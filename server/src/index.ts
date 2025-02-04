import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xssClean from "xss-clean";

import userRoutes from "./routes/userRoutes";
import connectDB from "./config/db";
import jobRoutes from "./routes/jobRoutes"
dotenv.config();
connectDB();

const app = express();

app.use(helmet());
const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);
app.use(express.json());
app.use(xssClean());

app.get("/", (req, res) => {
  res.send("API is working properly.");
});

app.use("/api/users", userRoutes);
app.use("/api/job", jobRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong! Please try again later." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
