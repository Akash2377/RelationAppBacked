import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  social_profile: {
    linkedIn: String,
    facebook: String,
    Twiter: String,
    Github: String,
    Instagram: String,
  },
  Addresses: {
    Line1: String,
    City: String,
    State: String,
    PinCode: Number,
  },
  Blog_id: [mongoose.Types.ObjectId],
});
const userModel = mongoose.model("User", userSchema, "users");
export default userModel;
