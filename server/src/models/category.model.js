import mongoose from "mongoose";
import generateSlug from "../utils/generateSlug.js";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter category name"],
            unique: true,
            trim: true,
            maxLength: [50, "Category name cannot exceed 50 characters"],
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        image: {
            type: String,
            required: [true, "Please provide a category image"],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

categorySchema.pre("validate", function (next) {
    if (this.name && !this.slug) {
        this.slug = generateSlug(this.name);
    }
    next();
});

const Category =
    mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
