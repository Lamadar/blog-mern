import { body } from "express-validator";

export const loginValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
];

export const postCreateValidation = [
  body("title", "Enter post title").isLength({ min: 3 }).isString(),
  body("text", "Enter post text").isLength({ min: 10 }).isString(),
  body("tags", "Enter valid tag format (arr)").optional().isString(),
  body("imageUrl").optional().isString(),
];
export const registerValidator = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("fullName").isLength({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];
