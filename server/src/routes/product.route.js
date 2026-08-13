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

const router = Router();

router
    .route("/products")
    .post(
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
