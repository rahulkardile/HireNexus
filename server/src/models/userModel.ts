import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name cannot be longer than 50 characters"],
      trim: true,  // Remove extra spaces before/after the name
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must have at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["employer", "job-seeker"],
      required: [true, "Role is required"],
    },
  },
  { timestamps: true }
);

// Hash password before saving (middleware)
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();  // Skip if password is not modified
  }

  try {
    const salt = await bcrypt.genSalt(10);  // Generate salt
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password
    next();
  } catch (error:any) {
    next(error.message);  // Pass any error to the next middleware
  }
});

// Compare password method (for login or authentication)
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", UserSchema);
