import Router from "express";
import { validateRequest } from "../middlewares/validation.middleware.js";

import {
    createCategory,
    getAllCategories,
} from "../controllers/category.controller.js";

const router = Router();

router.route("/categories").post(createCategory).get(getAllCategories);

export default router;
