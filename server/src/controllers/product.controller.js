import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
import { uploadFile, deleteFile } from "../services/storage.service.js";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const createProduct = asyncHandler(async (req, res, next) => {
    const {
        name,
        description,
        category,
        price,
        stock,
        discountPercentage,
        unitValue,
        unitType,
        isFeatured,
        isActive,
    } = req.body;

    if (!req.files || req.files.length === 0) {
        throw new ErrorHandler("At least one product image is required.", 400);
    }

    const invalidFile = req.files.find(
        (file) => !ALLOWED_TYPES.includes(file.mimetype),
    );
    if (invalidFile) {
        throw new ErrorHandler("Invalid image type.", 400);
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
        throw new ErrorHandler("Selected category does not exist.", 404);
    }

    // 4. image upload
    let uploadResults;
    try {
        uploadResults = await Promise.all(
            req.files.map((file) => uploadFile(file.buffer, file.originalname)),
        );
    } catch (err) {
        console.error("Upload error:", err.status, err.name, err.message);
        throw new ErrorHandler("Failed to upload images.", 500);
    }

    const invalidUpload = uploadResults.find(
        (result) => !result?.url || !result?.fileId,
    );
    if (invalidUpload) {
        throw new ErrorHandler("Image upload returned invalid response.", 500);
    }

    const images = uploadResults.map((result) => ({
        url: result.url,
        fileId: result.fileId,
    }));

    // 5. create product
    try {
        const product = await Product.create({
            name,
            description,
            category,
            price,
            stock,
            discountPercentage,
            unitValue,
            unitType,
            isFeatured,
            isActive,
            images,
            createdBy: req.user?._id,
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (err) {
        await Promise.allSettled(
            images.map((img) => deleteFile(img.fileId).catch(() => {})),
        );
        throw err;
    }
});

export const getAllProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find().populate("category", "name");

    return res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: products,
    });
});

export const getProductById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id).populate("category", "name");

    if (!product) {
        throw new ErrorHandler("Product not found.", 404);
    }

    return res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: product,
    });
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
        throw new ErrorHandler("Product not found.", 404);
    }

    await product.deleteOne();

    await Promise.allSettled(
        product.images.map((img) => deleteFile(img.fileId).catch(() => {})),
    );

    return res.status(200).json({
        success: true,
        message: "Product deleted successfully",
    });
});
