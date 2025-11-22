import express from "express";
import {getCategories, getCategory, addCategory, editCategory, removeCategory  } from '../controllers/category.controller.js';
import multer from 'multer';
import { validateSchema } from "../middlewares/valdator.middleware.js";
import { createCategorySchema } from "../schemas/category.schemas.js";

const router = express.Router();
const upload = multer();

router.get('/', getCategories);
router.get('/:id',getCategory);
router.post('/', upload.none(), validateSchema(createCategorySchema), addCategory);
router.put('/:id', editCategory);
router.delete('/:id', removeCategory);

export default router;