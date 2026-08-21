import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const addToCart = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { quantity = 1 } = req.body;

    const product = await Product.findById(id);
    if (!product) {
        throw new ErrorHandler("Product not found.", 404);
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = await Cart.create({
            user: req.user._id,
            items: [{ product: id, quantity }],
        });
    } else {
        const existingItem = cart.items.find(
            (item) => item.product.toString() === id,
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ product: id, quantity });
        }

        await cart.save();
    }

    const populatedCart = await Cart.findById(cart._id).populate(
        "items.product",
        "name price images discountPercentage",
    );

    return res.status(200).json({
        success: true,
        message: "Product added to cart",
        data: populatedCart,
    });
});

export const getCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
        "items.product",
        "name price images discountPercentage",
    );

    if (!cart) {
        return res.status(200).json({
            success: true,
            message: "Cart is empty",
            data: { items: [] },
        });
    }

    return res.status(200).json({
        success: true,
        message: "Cart fetched successfully",
        data: cart,
    });
});

export const updateCartItem = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
        throw new ErrorHandler("Quantity must be at least 1.", 400);
    }

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
        throw new ErrorHandler("Cart not found.", 404);
    }

    const item = cart.items.find((item) => item.product.toString() === id);
    if (!item) {
        throw new ErrorHandler("Item not found in cart.", 404);
    }

    item.quantity = quantity;
    await cart.save();

    const populatedCart = await Cart.findById(cart._id).populate(
        "items.product",
        "name price images discountPercentage",
    );

    return res.status(200).json({
        success: true,
        message: "Cart item updated",
        data: populatedCart,
    });
});

export const removeCartItem = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
        throw new ErrorHandler("Cart not found.", 404);
    }

    cart.items = cart.items.filter((item) => item.product.toString() !== id);
    await cart.save();

    const populatedCart = await Cart.findById(cart._id).populate(
        "items.product",
        "name price images discountPercentage",
    );

    return res.status(200).json({
        success: true,
        message: "Item removed from cart",
        data: populatedCart,
    });
});

export const clearCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
        throw new ErrorHandler("Cart not found.", 404);
    }

    cart.items = [];
    await cart.save();

    return res.status(200).json({
        success: true,
        message: "Cart cleared successfully",
        data: cart,
    });
});
