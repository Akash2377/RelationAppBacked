import express from "express";
import userModel from "../models/user.model.js";
const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = await userModel(data);
    newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

export default userRouter;
