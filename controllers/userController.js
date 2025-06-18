import User from "../models/User";
import validationResults from "express-validator";

// CREATE NEW USER
export const createUser = async (req, res, next) => {
  try {
    const error = validationResults(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    const user = await User.create(req.body);
  } catch (err) {
    next(err);
  }
};

// GET ALL THE USERS
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

//  GET SINGLE USER
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.prams.id);
    if (!user) return res.status(404).json({ message: `user not found` });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// UPDATE USER
export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.prams.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).json({ message: "user not found" });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// DELETE USER
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.prams.id);
    if (!user) return res.status(404).json({ message: "user not found " });
    res.json({ message: "user deleted successfully" });
  } catch (err) {
    next(err);
  }
};
