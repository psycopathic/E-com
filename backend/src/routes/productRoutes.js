import express from 'express';
import { getAllProducts } from '../controllers/productControllers.js';
import { protectedRoutes, adminRoute } from '../middleware.js/authMiddleware.js';
const router = express.Router();

router.get('/', protectedRoutes, adminRoute, getAllProducts);

export default router;