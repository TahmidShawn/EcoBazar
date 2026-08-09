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
import { registerSchema } from "../validations/user.validation.js";

const router = Router();

router
    .route("/auth/register")
    .post(validateRequest(registerSchema), registerUser);

router.route("/auth/login").post(loginUser);

router.route("/auth/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getMe);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

export default router;
