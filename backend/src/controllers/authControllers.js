import User from "../models/userModel.js";
import { generateToken } from "../utils/token.js";
import { storeRefreshToken } from "../utils/storeRefreshToken.js";
import { setCookies } from "../utils/setCookies.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    // 1. Input validation
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).send("Please fill all the fields");
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    // console.log(userExists);
    if (userExists) {
      return res.status(400).send("User already exists");
    }

    // 3. Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();

    // 4. Generate auth tokens
    const { accessToken, refreshToken } = generateToken(user._id);

    // 5. Store refresh token
    await storeRefreshToken(user._id, refreshToken);

    // 6. Set cookies
    setCookies(res, refreshToken, accessToken);

    // 7. Send response
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("this is login page");
};
export const logout = async (req, res) => {
  res.send("this is logout page");
};
