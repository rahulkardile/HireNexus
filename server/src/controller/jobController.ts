import { Request, Response } from "express";
import { Types } from "mongoose";
import Job, { IJob } from "../models/jobModel";
import { ICustomRequest } from "../types/types";

export const createJob = async (req: ICustomRequest, res: any): Promise<void> => {
  try {
    const { title, description, company, location, salary, jobType, experienceLevel, skillsRequired, deadline, status, category } = req.body;

    if (!title || !description || !company || !location || !salary || !category || !jobType || !experienceLevel || !skillsRequired || !deadline || !status ) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    
    const job: IJob = new Job({
      title,
      description,
      company,
      location,
      salary,
      category,
      jobType, 
      experienceLevel, 
      skillsRequired, 
      deadline, 
      status,
      postedBy: req.user.userId,
    });

    await job.save();
    res.status(201).json(job);
    return;
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllJobs = async (req: Request, res: any): Promise<void> => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");

    if (!jobs || jobs.length === 0) {
      res.status(404).json({ message: "No jobs found" });
      return;
    }

    res.status(200).json(jobs);
  } catch (error:any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getJobById = async (req: Request, res: any): Promise<void> => {
  try {
    const jobId = req.params.id;

    if (!Types.ObjectId.isValid(jobId)) {
      res.status(400).json({ message: "Invalid job ID" });
      return;
    }

    const job = await Job.findById(jobId).populate("postedBy", "name email");

    if (!job) {
      res.status(404).json({ message: "Job not found" });
      return;
    }

    res.status(200).json(job);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateJob = async (req: ICustomRequest, res: any): Promise<void> => {
  try {
    const jobId = req.params.id;

    if (!Types.ObjectId.isValid(jobId)) {
      res.status(400).json({ message: "Invalid job ID" });
      return;
    }

    const job = await Job.findById(jobId);

    if (!job) {
      res.status(404).json({ message: "Job not found" });
      return;
    }

    if (job.postedBy.toString() !== req.user.userId) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    Object.assign(job, req.body);
    await job.save();

    res.status(200).json(job);
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteJob = async (req: ICustomRequest, res: any): Promise<void> => {
  try {
    const jobId = req.params.id;

    if (!Types.ObjectId.isValid(jobId)) {
      res.status(400).json({ message: "Invalid job ID" });
      return;
    }

    const job = await Job.findById(jobId);

    if (!job) {
      res.status(404).json({ message: "Job not found" });
      return;
    }

    if (job.postedBy.toString() !== req.user.userId) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    await job.deleteOne();
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
