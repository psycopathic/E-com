import express from 'express';
import dotenv from 'dotenv';

import authRouter from './src/routes/authRoutes.js';
import productRouter from './src/routes/productRoutes.js';
import cartRouter from './src/routes/cartRoutes.js';
import couponRouter from './src/routes/couponRoutes.js';
import paymentRouter from './src/routes/paymentRoutes.js';

import cors from 'cors';
import { connectDB } from './src/lib/db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/payment', paymentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})