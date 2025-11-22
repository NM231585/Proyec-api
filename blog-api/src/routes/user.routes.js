import express from 'express';
import { getUsers, getUser, addUser, editUser, removeUser } from '../controllers/user.controller.js';
import {upload} from '../middlewares/upload.middleware.js';
import {validateSchema} from '../middlewares/valdator.middleware.js';
import { createUserSchema } from '../schemas/user.scemas.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', upload.none(), validateSchema(createUserSchema) ,addUser);
router.put('/:id', editUser);
router.delete('/:id', removeUser);

export default router;
