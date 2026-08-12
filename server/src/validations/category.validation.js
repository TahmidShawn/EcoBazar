import { z } from "zod";

export const createCategorySchema = z.object({
    name: z
        .string({ error: "Please enter category name" })
        .trim()
        .min(2, "Category name must be at least 2 characters")
        .max(50, "Category name cannot exceed 50 characters"),
    image: z.url({ error: "Please provide a category image" }),
    isActive: z.boolean().default(true),
});

export const updateCategorySchema = z
    .object({
        name: z
            .string({ error: "Please enter category name" })
            .trim()
            .min(2, "Category name must be at least 2 characters")
            .max(50, "Category name cannot exceed 50 characters")
            .optional(),
        image: z.url({ error: "Please provide a category image" }).optional(),
        isActive: z.boolean().optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
        error: "Provide at least one field to update",
    });
