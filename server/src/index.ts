import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import jobRoutes from "./routes/jobRoutes";
// import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("okay")
})

// app.use("/api/jobs", jobRoutes);
// app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 