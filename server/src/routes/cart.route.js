import Router from "express";
import {
    addToCart,
    getCart,
    updateCartItem,
    removeCartItem,
    clearCart,
} from "../controllers/cart.controller.js";

import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";
const router = Router();

router
    .route("/cart/:id")
    .post(isAuthenticatedUser, addToCart)
    .put(isAuthenticatedUser, updateCartItem)
    .delete(isAuthenticatedUser, removeCartItem);

router
    .route("/cart")
    .get(isAuthenticatedUser, getCart)
    .delete(isAuthenticatedUser, clearCart);

export default router;
