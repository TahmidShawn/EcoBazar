import ErrorHandler from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

// create order

export const createOrder = asyncHandler(async (req, res, next) => {
    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress || !paymentMethod) {
        throw new ErrorHandler(
            "Shipping address and payment method are required.",
            400,
        );
    }

    const cart = await Cart.findOne({ user: req.user._id }).populate(
        "items.product",
        "name price images discountPercentage stock",
    );

    if (!cart || cart.items.length === 0) {
        throw new ErrorHandler("Your cart is empty.", 400);
    }

    const orderItems = [];
    let itemsPrice = 0;

    for (const cartItem of cart.items) {
        const product = cartItem.product;

        if (!product) {
            throw new ErrorHandler(
                "One of the products in your cart no longer exists.",
                400,
            );
        }

        if (product.stock < cartItem.quantity) {
            throw new ErrorHandler(
                `Insufficient stock for ${product.name}. Only ${product.stock} left.`,
                400,
            );
        }

        const finalPrice = product.discountPercentage
            ? Math.round(
                  (product.price -
                      (product.price * product.discountPercentage) / 100) *
                      100,
              ) / 100
            : product.price;

        orderItems.push({
            product: product._id,
            name: product.name,
            image: product.images?.[0]?.url,
            price: finalPrice,
            quantity: cartItem.quantity,
        });

        itemsPrice += finalPrice * cartItem.quantity;
    }

    const shippingPrice = itemsPrice > 1000 ? 0 : 60;
    const totalPrice = itemsPrice + shippingPrice;

    const order = await Order.create({
        user: req.user._id,
        items: orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
    });

    for (const item of orderItems) {
        await Product.findByIdAndUpdate(item.product, {
            $inc: { stock: -item.quantity, salesCount: item.quantity },
        });
    }

    cart.items = [];
    await cart.save();

    return res.status(201).json({
        success: true,
        message: "Order placed successfully",
        data: order,
    });
});

// get my orders

export const getMyOrders = asyncHandler(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id }).sort({
        createdAt: -1,
    });

    return res.status(200).json({
        success: true,
        message: "Orders fetched successfully",
        data: orders,
    });
});

// get single order by id

export const getOrderById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const order = await Order.findById(id).populate("user", "username email");

    if (!order) {
        throw new ErrorHandler("Order not found.", 404);
    }

    if (order.user._id.toString() !== req.user._id.toString()) {
        throw new ErrorHandler("Not authorized to view this order.", 403);
    }

    return res.status(200).json({
        success: true,
        message: "Order fetched successfully",
        data: order,
    });
});

// cancel order

export const cancelOrder = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
        throw new ErrorHandler("Order not found.", 404);
    }

    if (order.user.toString() !== req.user._id.toString()) {
        throw new ErrorHandler("Not authorized to cancel this order.", 403);
    }

    if (order.orderStatus !== "processing") {
        throw new ErrorHandler("Only processing orders can be cancelled.", 400);
    }

    order.orderStatus = "cancelled";
    await order.save();

    for (const item of order.items) {
        await Product.findByIdAndUpdate(item.product, {
            $inc: { stock: item.quantity, salesCount: -item.quantity },
        });
    }

    return res.status(200).json({
        success: true,
        message: "Order cancelled successfully",
        data: order,
    });
});
