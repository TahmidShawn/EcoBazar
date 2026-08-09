import { z } from "zod";

export const registerSchema = z.object({
    username: z
        .string({
            error: "Please enter your username",
        })
        .trim()
        .min(4, "Username must be at least 4 characters")
        .max(30, "Username cannot exceed 30 characters"),

    email: z
        .string({
            error: "Please enter your email address",
        })
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address")
        .max(200, "Email cannot exceed 200 characters"),

    password: z
        .string({
            error: "Please enter your password",
        })
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password cannot exceed 100 characters"),
});
