import Router from "express";
import { validateRequest } from "../middlewares/validation.middleware.js";

import upload from "./../middlewares/multer.middleware.js";
import {
    createProduct,
    getAllProducts,
    getProductById,
    // updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";
import { createProductSchema } from "../validations/product.validation.js";
import { isAuthenticatedUser } from "../middlewares/auth.middleware.js";

const router = Router();

router
    .route("/products")
    .post(
        isAuthenticatedUser,
        upload.array("images", 5),
        validateRequest(createProductSchema),
        createProduct,
    )
    .get(getAllProducts);

router
    .route("/products/:id")
    .get(getProductById)
    // .patch(updateProduct)
    .delete(deleteProduct);

export default router;
