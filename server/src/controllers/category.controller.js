import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import Category from "../models/category.model.js";

export const createCategory = asyncHandler(async (req, res, next) => {
    console.log(req.body);
});
export const getAllCategories = asyncHandler(async (req, res, next) => {
    console.log("get all");
});
