import express from "express";
import blogModel from "../models/blog.model.js";
import likeModel from "../models/like.model.js";
import userModel from "../models/user.model.js";
const likeRouter = express.Router();

likeRouter.post("/:blogId/:userId", async (req, res) => {
  const { userId, blogId } = req.params;

  const data = req.body;
  try {
    const user = await userModel.findById(userId);
    const blog = await blogModel.findById(blogId);

    data.Blog_id = blog._id;
    data.User_id = user._id;
    const like = await likeModel.create(data);
    res.send(like);
  } catch (error) {
    console.log(error);
  }
});
export default likeRouter;
