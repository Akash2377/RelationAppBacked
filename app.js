import express from "express";
import userRouter from "./controller/user.controller.js";
import connection from "./configs/index.js";
import blogRouter from "./controller/blog.controller.js";
import commentRouter from "./controller/comment.controller.js";
import likeRouter from "./controller/like.controller.js";
import categoryRouter from "./controller/category.controller.js";
const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/comment", commentRouter);
app.use("/like", likeRouter);
app.use("/category", categoryRouter);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("listening on port 8080");
  } catch (error) {
    console.log(error);
  }
});
