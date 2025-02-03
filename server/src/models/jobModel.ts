import mongoose from "mongoose";

export interface IJob extends mongoose.Document {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: number;
  jobType: "full-time" | "part-time" | "contract" | "internship";
  category: string;
  experienceLevel: "Fresher" | "Junior" | "Mid" | "Senior";
  skillsRequired: string[];
  deadline: Date;
  applicants: mongoose.Schema.Types.ObjectId[];
  status: "open" | "closed";
  remote: boolean;
  postedBy: mongoose.Schema.Types.ObjectId;
}

const JobSchema = new mongoose.Schema<IJob>(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      minlength: [3, "Job title must be at least 3 characters"],
      maxlength: [100, "Job title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      minlength: [10, "Job description must be at least 10 characters"],
      maxlength: [2000, "Job description cannot exceed 2000 characters"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      minlength: [2, "Company name must be at least 2 characters"],
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      minlength: [2, "Location must be at least 2 characters"],
      maxlength: [100, "Location cannot exceed 100 characters"],
    },
    salary: {
      type: Number,
      min: [3000, "Salary must be at least 3000"],
      max: [10000000, "Salary cannot exceed 10 million"],
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship"],
      required: [true, "Job type is required"],
    },
    category: {
      type: String,
      required: [true, "Job category is required"],
      maxlength: [50, "Category cannot exceed 50 characters"],
    },
    experienceLevel: {
      type: String,
      enum: ["Fresher", "Junior", "Mid", "Senior"],
      required: [true, "Experience level is required"],
    },
    skillsRequired: {
      type: [String],
      required: [true, "At least one skill is required"],
      validate: {
        validator: function (skills: string[]) {
          return skills.length > 0 && skills.length <= 20;
        },
        message: "Skills should be between 1 and 20 items",
      },
    },
    deadline: {
      type: Date,
      required: [true, "Application deadline is required"],
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    remote: {
      type: Boolean,
      default: false,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IJob>("Job", JobSchema);
