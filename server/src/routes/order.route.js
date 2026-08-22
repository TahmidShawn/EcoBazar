import Router from "express";
import {
    cancelOrder,
    createOrder,
    getMyOrders,
    getOrderById,
} from "../controllers/order.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/orders").post(isAuthenticatedUser, createOrder);
router.route("/orders/my").get(isAuthenticatedUser, getMyOrders);
router.route("/orders/:id").get(isAuthenticatedUser, getOrderById);
router.route("/orders/:id/cancel").put(isAuthenticatedUser, cancelOrder);

export default router;
