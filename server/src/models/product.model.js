import mongoose from "mongoose";
import generateSlug from "../utils/generateSlug.js";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
            trim: true,
            maxLength: [150, "Product name cannot exceed 150 characters"],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Please enter product description"],
        },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Please select a category"],
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"],
            min: [0, "Price cannot be negative"],
        },
        discountPercentage: {
            type: Number,
            default: 0,
            min: [0, "Discount cannot be negative"],
            max: [100, "Discount cannot exceed 100%"],
        },
        stock: {
            type: Number,
            required: [true, "Please enter product stock"],
            min: [0, "Stock cannot be negative"],
            default: 0,
        },
        unitValue: {
            type: Number,
            required: [true, "Please enter unit value"],
            min: [0.1, "Unit value must be greater than 0"],
            default: 1,
        },
        unitType: {
            type: String,
            enum: ["kg", "g", "l", "ml", "pcs", "dozen", "pack"],
            required: [true, "Please select unit type"],
            default: "pcs",
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        avgRating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        numReviews: {
            type: Number,
            default: 0,
        },
        salesCount: {
            type: Number,
            default: 0,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true },
);

productSchema.virtual("discountPrice").get(function () {
    if (!this.discountPercentage) return this.price;
    return (
        Math.round(
            (this.price - (this.price * this.discountPercentage) / 100) * 100,
        ) / 100
    );
});

productSchema.virtual("unitLabel").get(function () {
    return `${this.unitValue}${this.unitType}`;
});

productSchema.pre("validate", function (next) {
    if (this.name && !this.slug) {
        this.slug = generateSlug(this.name);
    }
    next();
});

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
