import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        rating: {
            type: Number,
            required: [true, "Please provide a rating"],
            min: [1, "Rating must be at least 1"],
            max: [5, "Rating cannot exceed 5"],
        },
        comment: {
            type: String,
            trim: true,
            maxLength: [500, "Comment cannot exceed 500 characters"],
        },
    },
    { timestamps: true },
);

// reviewSchema.index({ product: 1, user: 1 }, { unique: true });

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
