import { z } from "zod";

export const createCategorySchema = z.object({
    name: z
        .string({ error: "Please enter category name" })
        .trim()
        .min(2, "Category name must be at least 2 characters")
        .max(50, "Category name cannot exceed 50 characters"),
    isActive: z
        .enum(["true", "false"])
        .optional()
        .default("true")
        .transform((val) => val === "true"),
});

export const updateCategorySchema = z
    .object({
        name: z
            .string({ error: "Please enter category name" })
            .trim()
            .min(2, "Category name must be at least 2 characters")
            .max(50, "Category name cannot exceed 50 characters")
            .optional(),
        isActive: z
            .enum(["true", "false"])
            .optional()
            .transform((val) =>
                val === undefined ? undefined : val === "true",
            ),
    })
    .refine((data) => Object.keys(data).length > 0, {
        error: "Provide at least one field to update",
    });
