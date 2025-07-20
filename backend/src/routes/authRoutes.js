import express from 'express';
import { signup, login, logout } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/refreshToken', logout)

export default router;