import express from "express";
import blogModel from "../models/blog.model.js";
import categoryModel from "../models/category.model.js";
const categoryRouter = express.Router();

categoryRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newCategory = await categoryModel.create(data);
    res.send(newCategory);
  } catch (error) {
    res.send(error);
  }
});

export default categoryRouter;
