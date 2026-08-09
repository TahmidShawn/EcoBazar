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

export const loginSchema = z.object({
    email: z
        .string({
            error: "Please enter your email address",
        })
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address"),

    password: z
        .string({
            error: "Please enter your password",
        })
        .min(1, "Please enter your password"),
});

export const forgotPasswordSchema = z.object({
    email: z
        .string({
            error: "Please enter your email address",
        })
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address"),
});

export const resetPasswordSchema = z
    .object({
        password: z
            .string({
                error: "Please enter your password",
            })
            .min(8, "Password must be at least 8 characters")
            .max(100, "Password cannot exceed 100 characters"),

        confirmPassword: z.string({
            error: "Please confirm your password",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const updatePasswordSchema = z
    .object({
        currentPassword: z
            .string({
                error: "Please enter your current password",
            })
            .min(1, "Please enter your current password"),

        newPassword: z
            .string({
                error: "Please enter your new password",
            })
            .min(8, "Password must be at least 8 characters")
            .max(100, "Password cannot exceed 100 characters"),

        confirmPassword: z.string({
            error: "Please confirm your new password",
        }),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
