import { body } from "express-validator";

export const registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long")
    .isLength({ max: 50 })
    .withMessage("Name cannot be longer than 50 characters"),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail()
    .isLength({ max: 50 })
    .withMessage("Email cannot be longer than 50 characters"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters")
    .isLength({ max: 50 })
    .withMessage("Password cannot be longer than 50 characters"),

  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["employer", "job-seeker"])
    .withMessage("Role must be either 'employer' or 'job-seeker'"),

  body("skills")
    .optional()
    .isArray()
    .withMessage("Skills must be an array")
    .custom((value) => {
      const validSkills = [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "CSS",
        "HTML",
        "Python",
      ];
      return value.every((skill: string) =>
        validSkills.includes(skill) || typeof skill === "string"
      );
    })
    .withMessage("Each skill must be either in the predefined list or a custom skill")
];

export const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
];
