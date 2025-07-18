import jwt from "jsonwebtoken";
import {redis} from '../lib/redis.js'

export const storeRefreshToken = async (userId,refreshToken) => { 
    try {
        await redis(`refresh token :${userId}`,refreshToken,"EX",7*24*60*60);//7 days expiration
    } catch (error) {
        console.log('error while storing refresh token', error.message);
        res.status(500).send('Internal Server Error');
    }
}