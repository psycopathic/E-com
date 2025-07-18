import Redis from "ioredis"
import dotenv from "dotenv";
dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

redis.on("connect",()=>{
    console.log("Redis is connected")
})
// await client.set('foo', 'bar');