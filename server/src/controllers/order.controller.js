import asyncHandler from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";

export const createOrder = asyncHandler(async (req, res, next) => {
    const id = req.params;
    console.log(id);
});
