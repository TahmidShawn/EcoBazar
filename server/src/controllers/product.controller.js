import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";

export const createProduct = asyncHandler(async (req, res, next) => {
    console.log("create");
});
export const getAllProducts = asyncHandler(async (req, res, next) => {
    console.log("get all");
});
export const getProductById = asyncHandler(async (req, res, next) => {
    console.log("get by id");
});
export const updateProduct = asyncHandler(async (req, res, next) => {
    console.log("update");
});
export const deleteProduct = asyncHandler(async (req, res, next) => {
    console.log("delete");
});
