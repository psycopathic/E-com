import express from 'express';
import dotenv from 'dotenv';
import authRouter from './src/routes/authRoutes.js';
import cors from 'cors';
import { connectDB } from './src/lib/db.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})