import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import sendToken from "../utils/sendToken.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// TO DO
// Rate limiting for login and register routes to prevent brute force attacks

// Register User

export const registerUser = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ErrorHandler(
            "An account with this email already exists. Please use a different email.",
            409,
        );
    }
    // Create new user
    const user = await User.create({
        username,
        email,
        password,
    });

    // Send token
    const { token, options } = sendToken(user);

    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Registration successful. You are now logged in.",
        data: user,
    });
});

// Login User

export const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password");
    if (!user) {
        throw new ErrorHandler("Please enter valid information", 401);
    }
    // Matching Password
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        throw new ErrorHandler("Invalid Email or password", 401);
    }
    // Send token
    const { token, options } = sendToken(user);

    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Login successful. You are now logged in.",
        data: user,
    });
});

// Logout User

export const logout = asyncHandler(async (req, res, next) => {
    // remove cookie
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out successfully",
    });
});

// Forgot Password

export const forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    // intentionally not revealing whether the user exists or not for security reasons
    if (!user) {
        return res.status(200).json({
            success: true,
            message:
                "If an account exists with this email, password reset instructions have been sent.",
        });
    }
    // get reset password token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${process.env.CORS_ORIGIN}/password/reset/${resetToken}`;

    const message = `
		Hello ${user.name || "User"},

		We received a request to reset the password associated with your account. You can reset your password by clicking on the link below:

		${resetPasswordUrl}

		If you did not request this password reset, please disregard this email or contact our support team for assistance.

		Thank you,
		The Website Team
	`;

    // send email
    try {
        await sendEmail({
            email: user.email,
            subject: "Password Reset Request - Action Required",
            message,
        });

        res.status(200).json({
            success: true,
            message: `An email with password reset instructions has been sent to ${user.email}.`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        throw new ErrorHandler(error.message, 500);
    }
});

// reset password

export const resetPassword = asyncHandler(async (req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
        throw new ErrorHandler(
            "Reset password token is invalid or has been expired",
            400,
        );
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    const { token, options } = sendToken(user);
    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "Password reset successful. You are now logged in",
        data: user,
    });
});

// Get Me

export const getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if (!user) {
        throw new ErrorHandler("User not found", 404);
    }
    const { token, options } = sendToken(user);
    res.status(201).cookie("token", token, options).json({
        success: true,
        message: "user found",
        data: user,
    });
});

// Update user password

export const updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");
    if (!user) {
        throw new ErrorHandler("User not found", 404);
    }
    const isPasswordMatched = await user.comparePassword(
        req.body.currentPassword,
    );

    if (!isPasswordMatched) {
        throw new ErrorHandler("Old password is incorrect", 401);
    }

    user.password = req.body.newPassword;
    await user.save();
    const { token, options } = sendToken(user);
    res.status(200).cookie("token", token, options).json({
        success: true,
        message: "Password update successfully",
        data: user,
    });
});
