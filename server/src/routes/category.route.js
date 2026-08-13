import Router from "express";
import { validateRequest } from "../middlewares/validation.middleware.js";
import upload from "../middlewares/multer.middleware.js";

import {
    createCategorySchema,
    updateCategorySchema,
} from "../validations/category.validation.js";
import {
    createCategory,
    getAllCategories,
} from "../controllers/category.controller.js";

const router = Router();

router
    .route("/categories")
    .post(
        upload.single("image"),
        validateRequest(createCategorySchema),
        createCategory,
    )
    .get(getAllCategories);

export default router;
