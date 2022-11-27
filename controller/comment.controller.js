import express from "express";
import blogModel from "../models/blog.model.js";
import commentModel from "../models/Comments.model.js";
import userModel from "../models/user.model.js";
const commentRouter = express.Router();

commentRouter.post("/:blogId/:userId", async (req, res) => {
  const { userId, blogId } = req.params;

  const data = req.body;
  try {
    const user = await userModel.findById(userId);
    const blog = await blogModel.findById(blogId);

    data.Blog_id = blog._id;
    data.User_id = user._id;
    const comment = await commentModel.create(data);
    res.send(comment);
  } catch (error) {
    console.log(error);
  }
});
export default commentRouter;
