import express from 'express';
import { getComments, getComment, getCommentsByBlog, addComment, editComment, removeComment } from '../controllers/comment.controller.js';
import { validateSchema } from '../middlewares/valdator.middleware.js';
import { createCommentSchema } from '../schemas/comment.schema.js';

const router = express.Router();

router.get('/', getComments);
router.get('/:id', getComment);
router.get('/blog/:id_blog', getCommentsByBlog);
router.post('/', validateSchema(createCommentSchema), addComment);
router.put('/:id', editComment);
router.delete('/:id', removeComment);

export default router;
