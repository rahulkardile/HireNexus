import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controller/jobController";
import { createJobValidator, jobIdValidation } from "../validators/jobValidations";
import validateRequest from "../middlewares/validateRequest";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, createJobValidator, validateRequest, createJob);
router.get("/", getAllJobs);
router.get("/:id", jobIdValidation, validateRequest, getJobById);
router.put("/:id", authMiddleware, jobIdValidation, createJobValidator, validateRequest, updateJob);
router.delete("/:id", authMiddleware, jobIdValidation, validateRequest, deleteJob);

export default router;
