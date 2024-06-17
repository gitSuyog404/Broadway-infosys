import express from "express";
import { getPost } from "../controller/postController.js";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("<h1>The server is running</h1>");
});

postRouter.post("/addpost");
postRouter.get("/post", getPost);
postRouter.put("/updatepost/:id");
postRouter.delete("deletepost/:id");

export default postRouter;
