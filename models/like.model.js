import mongoose from "mongoose";
const likeSchema = new mongoose.Schema({
  User_id: mongoose.Types.ObjectId,
  Blog_id: mongoose.Types.ObjectId,
  Emoji: String,
});
const likeModel = mongoose.model("Like", likeSchema, "likes");
export default likeModel;
