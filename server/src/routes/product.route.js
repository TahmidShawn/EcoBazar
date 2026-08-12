import Router from "express";
import { validateRequest } from "../middlewares/validation.middleware.js";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/products").post(createProduct).get(getAllProducts);

router
    .route("/products/:id")
    .get(getProductById)
    .patch(updateProduct)
    .delete(deleteProduct);

export default router;
