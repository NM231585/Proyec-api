import express from 'express';
import {getSubCategories, getSubCategory, addSubCategory, aditSubCategory, deleteSubCategory} from '../controllers/subcategory.controller.js';
import multer from 'multer';
import { validateSchema } from '../middlewares/valdator.middleware.js';
import { createSubCategorySchema } from '../schemas/subcategory.schema.js';

const router = express.Router();
const upload = multer();

router.get('/', getSubCategories);
router.get('/:id', getSubCategory);
router.post('/', upload.none(), validateSchema(createSubCategorySchema),addSubCategory);
router.put('/:id', aditSubCategory);
router.delete('/:id', deleteSubCategory); 

export default router;
