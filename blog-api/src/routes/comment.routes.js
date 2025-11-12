import express from 'express';
import { getComments, getComment, getCommentsByBlog, addComment, editComment, removeComment } from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/', getComments);
router.get('/:id', getComment);
router.get('/blog/:id_blog', getCommentsByBlog);
router.post('/', addComment);
router.put('/:id', editComment);
router.delete('/:id', removeComment);

export default router;
