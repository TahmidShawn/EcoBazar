import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import Category from "../models/category.model.js";
import { uploadFile, deleteFile } from "../services/storage.service.js";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const createCategory = asyncHandler(async (req, res, next) => {
    const { name, isActive } = req.body;

    if (!req.file || !req.file.buffer) {
        return next(new ErrorHandler("Image file is required.", 400));
    }

    if (!ALLOWED_TYPES.includes(req.file.mimetype)) {
        return next(new ErrorHandler("Invalid image type.", 400));
    }

    const existing = await Category.findOne({ name: name.trim() });
    if (existing) {
        return next(new ErrorHandler("Category name already exists.", 409));
    }
    // image upload
    let uploadResult;
    try {
        uploadResult = await uploadFile(req.file.buffer, req.file.originalname);
    } catch (err) {
        console.error("Upload error:", err.status, err.name, err.message);
        return next(new ErrorHandler("Failed to upload image.", 500));
    }

    if (!uploadResult?.url || !uploadResult?.fileId) {
        return next(
            new ErrorHandler("Image upload returned invalid response.", 500),
        );
    }

    // 5. create category
    try {
        const category = await Category.create({
            name,
            isActive,
            image: uploadResult.url,
            imageFileId: uploadResult.fileId,
        });

        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category,
        });
    } catch (err) {
        await deleteFile(uploadResult.fileId).catch(() => {});
        throw err;
    }
});

export const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();

    return res.status(200).json({
        success: true,
        message: "Categories fetched successfully",
        data: categories,
    });
});
