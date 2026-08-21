import Router from "express";
import { addToCart } from "../controllers/cart.controller.js";

const router = Router();

router.route("/cart/:id").post(addToCart);

export default router; 
