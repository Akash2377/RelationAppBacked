import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  Title: String,
  Body: String,
  UserId: mongoose.Types.ObjectId,
  Category_ids: [mongoose.Types.ObjectId],
});

const blogModel = mongoose.model("Blog", blogSchema, "blogs");
export default blogModel;
