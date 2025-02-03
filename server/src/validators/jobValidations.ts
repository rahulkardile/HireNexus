import { body, param } from "express-validator";

export const createJobValidator = [
  body("title")
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters"),
  body("description")
    .isString()
    .isLength({ min: 10, max: 2000 })
    .withMessage("Description must be between 10 and 2000 characters"),
  body("company")
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("Company name must be between 2 and 100 characters"),
  body("location")
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("Location must be between 2 and 100 characters"),
  body("salary")
    .optional()
    .isNumeric()
    .isInt({ min: 3000, max: 10000000 })
    .withMessage("Salary must be between ₹3000 and ₹1 crore"),
  body("jobType")
    .isIn(["full-time", "part-time", "contract", "internship"])
    .withMessage("Invalid job type"),
  body("category")
    .isString()
    .isLength({ max: 50 })
    .withMessage("Category cannot exceed 50 characters"),
  body("experienceLevel")
    .isIn(["Junior", "Mid", "Senior"])
    .withMessage("Invalid experience level"),
  body("skillsRequired")
    .isArray({ min: 1, max: 20 })
    .withMessage("Skills should be between 1 and 20 items"),
  body("deadline").isISO8601().toDate().withMessage("Invalid date format"),
  body("remote").isBoolean().withMessage("Remote must be true or false"),
];

export const updateJobValidation = [
  param("id").isMongoId().withMessage("Invalid job ID"),
  body("title").optional().isString().isLength({ min: 3, max: 100 }),
  body("description").optional().isString().isLength({ min: 10, max: 2000 }),
  body("company").optional().isString().isLength({ min: 2, max: 100 }),
  body("location").optional().isString().isLength({ min: 2, max: 100 }),
  body("salary").optional().isNumeric().isInt({ min: 3000, max: 10000000 }),
  body("jobType")
    .optional()
    .isIn(["full-time", "part-time", "contract", "internship"]),
  body("category").optional().isString().isLength({ max: 50 }),
  body("experienceLevel").optional().isIn(["Fresher", "Mid", "Junior", "Senior"]),
  body("skillsRequired").optional().isArray({ min: 1, max: 20 }),
  body("deadline").optional().isISO8601().toDate(),
  body("remote").optional().isBoolean(),
];

export const jobIdValidation = [
    param("id").isMongoId().withMessage("Invalid job ID."),
  ];