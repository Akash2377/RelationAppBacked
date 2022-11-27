import express from "express";
import blogModel from "../models/blog.model.js";
import categoryModel from "../models/category.model.js";
import userModel from "../models/user.model.js";
const blogRouter = express.Router();

blogRouter.post("/:id", async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    let CategoryId = [];
    for (let i = 0; i < data.Category_ids.length; i++) {
      let newId = await categoryModel.findOne({ Name: data.Category_ids[i] });
      CategoryId.push(newId._id);
    }
    data.Category_ids = CategoryId;
    const user = await userModel.findById(id);
    data.UserId = user._id;
    const newBlog = await blogModel.create(data);
    user.Blog_id = [...user.Blog_id, newBlog._id];
    await user.save();
    res.send(newBlog);
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

export default blogRouter;
