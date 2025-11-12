import express from "express";
import {getCategories, getCategory, addCategory, editCategory, removeCategory  } from '../controllers/category.controller.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id',getCategory);
router.post('/',addCategory);
router.put('/:id', editCategory);
router.delete('/:id', removeCategory);

export default router;