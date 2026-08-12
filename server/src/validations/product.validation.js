import { z } from "zod";

const objectIdSchema = z
    .string({ error: "Invalid ID" })
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid ID format");

export const createProductSchema = z.object({
    name: z
        .string({ error: "Please enter product name" })
        .trim()
        .min(3, "Product name must be at least 3 characters")
        .max(150, "Product name cannot exceed 150 characters"),

    description: z
        .string({ error: "Please enter product description" })
        .trim()
        .min(1, "Please enter product description"),

    images: z
        .array(
            z
                .url({ error: "Each image must be a valid URL" })
                .min(1, "Image URL cannot be empty"),
            { error: "Please provide product images" },
        )
        .min(1, "At least one image is required"),

    category: objectIdSchema.refine((val) => !!val, {
        message: "Please select a category",
    }),

    price: z
        .number({ error: "Please enter product price" })
        .min(0, "Price cannot be negative"),

    discountPercentage: z
        .number()
        .min(0, "Discount cannot be negative")
        .max(100, "Discount cannot exceed 100%")
        .default(0),

    stock: z
        .number({ error: "Please enter product stock" })
        .min(0, "Stock cannot be negative")
        .default(0),

    unitValue: z
        .number({ error: "Please enter unit value" })
        .min(0.1, "Unit value must be greater than 0")
        .default(1),

    unitType: z
        .enum(["kg", "g", "l", "ml", "pcs", "dozen", "pack"], {
            error: "Please select unit type",
        })
        .default("pcs"),

    isFeatured: z.boolean().default(false),

    isActive: z.boolean().default(true),
});

export const updateProductSchema = createProductSchema.partial();
