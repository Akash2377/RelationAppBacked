import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  Blog_id: mongoose.Types.ObjectId,
  User_id: mongoose.Types.ObjectId,
  Message: String,
  Rating: Number,
});
const commentModel = mongoose.model("Comment", commentSchema, "comments");
export default commentModel;
