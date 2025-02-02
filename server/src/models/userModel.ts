import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name cannot be longer than 50 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      maxlength: [50, "Email cannot be longer than 50 characters"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must have at least 6 characters"],
      maxlength: [50, "Password cannot be longer than 50 characters"],
    },
    role: {
      type: String,
      enum: ["employer", "job-seeker"],
      required: [true, "Role is required"],
    },
    phone: {
      type: String,
      match: [/^\d{10}$/, "Please provide a valid 10-digit phone number"],
      trim: true,
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zip: { type: String, trim: true },
    },
    bio: {
      type: String,
      maxlength: [500, "Bio cannot be longer than 500 characters"],
    },
    experience: [
      {
        company: { type: String, required: true },
        role: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        description: { type: String },
      },
    ],
    skills: {
      type: [String],
      enum: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "CSS",
        "HTML",
        "Python",
      ],
      validate: {
        validator: function (skills: string[]) {
          return skills.every((skill) => {
            return (
              [
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "CSS",
                "HTML",
                "Python",
              ].includes(skill) || typeof skill === "string"
            );
          });
        },
        message: "Skill must be from the predefined list or a custom skill",
      },
    },
    profilePicture: {
      type: String,
    },
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      portfolio: { type: String },
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error.message);
  }
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", UserSchema);
