import express from 'express';
import { upload } from '../middlewares/upload.middleware.js';
import { createBlogSchema } from '../schemas/blog.schemas.js';
import {
  getBlogs,
  createBlog,
  getBlog,
  editBlog,
  removeBlog
} from '../controllers/blog.controller.js';
import { validateSchema } from '../middlewares/valdator.middleware.js';

const router = express.Router();
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', upload.single('imagen'), validateSchema(createBlogSchema), createBlog);
router.put('/:id', upload.single('imagen'), editBlog);
router.delete('/:id', removeBlog);

export default router;
