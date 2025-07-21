import express from 'express';
import { signup, login, logout, refreshToken, profile } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/refreshToken', refreshToken)
router.get('/profile', profile)

export default router;