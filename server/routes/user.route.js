import { Router } from 'express';
import { login, createUser, getUserById, updateUserById, deleteUserById } from '../controllers/user.controller.js';
import { createAccessToken, verifyAccessToken, deleteAccessToken } from '../authMiddleWare/controller/token.controller.js';

const router = Router();

router
    .route('/')
    .get(verifyAccessToken, getUserById)
    .put(verifyAccessToken, updateUserById)
    .delete(verifyAccessToken, deleteUserById, deleteAccessToken);

router.route('/login').post(login, createAccessToken);

router.route('/signup').post(createUser, createAccessToken);

router.route('/logout').delete(deleteAccessToken);

export default router;
