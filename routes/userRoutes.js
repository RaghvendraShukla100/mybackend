import express from "express";
import { body } from "express-validator";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();
const userValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is required"),
  body("age")
    .optional()
    .isInt({ min: 0 })
    .withMessage("age must be a positive number"),
];

router.post("/", userValidation, createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", userValidation, updateUser);
router.delete("/:id", deleteUser);

export default router;
