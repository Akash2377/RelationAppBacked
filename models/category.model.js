import mongoose from "mongoose";
const ctegorySchema = new mongoose.Schema({
  Name: String,
});
const categoryModel = mongoose.model("Category", ctegorySchema, "category");
export default categoryModel;
