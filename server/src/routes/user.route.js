import Router from "express";
import {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getMe,
    updatePassword,
} from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";

import { validateRequest } from "../middlewares/validation.middleware.js";
import {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    updatePasswordSchema,
} from "../validations/user.validation.js";

const router = Router();

router
    .route("/auth/register")
    .post(validateRequest(registerSchema), registerUser);

router.route("/auth/login").post(validateRequest(loginSchema), loginUser);

router.route("/auth/logout").get(logout);

router
    .route("/password/forgot")
    .post(validateRequest(forgotPasswordSchema), forgotPassword);

router
    .route("/password/reset/:token")
    .put(validateRequest(resetPasswordSchema), resetPassword);

router.route("/me").get(isAuthenticatedUser, getMe);

router
    .route("/password/update")
    .put(
        isAuthenticatedUser,
        validateRequest(updatePasswordSchema),
        updatePassword,
    );

export default router;
