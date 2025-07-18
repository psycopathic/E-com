import dotenv from "dotenv";
dotenv.config();

export const setCookies = async (res, refreshToken, accessToken) =>{
   res.cookie("accessToken",accessToken, {
     httpOnly:true,
     secure:process.env.NODE_ENV === "production",
     sameSite:"strict",
     maxAge: 7 * 24 * 60 * 60 * 1000,
   })
   res.cookie("refreshToken",refreshToken, {
     httpOnly:true,
     secure:process.env.NODE_ENV === "production",
     sameSite:"strict",
     maxAge: 7 * 24 * 60 * 60 * 1000,
   })
}