import express, { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { loginValidator, registerValidator } from "../validators/userValidator";

const router = express.Router();

router.post("/register", registerValidator, async (req: any, res: any) => {
  const { name, email, password, role, skills, phone, address, bio, experience, profilePicture, socialLinks } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const user = new User({
      name,
      email,
      password,
      role,
      skills,
      phone,
      address,
      bio,
      experience,
      profilePicture,
      socialLinks,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

router.post("/login", loginValidator, async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        skills: user.skills,
      },
    });
  } catch (error:any) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

export default router;
