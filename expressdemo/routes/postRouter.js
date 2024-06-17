import express from "express";

import {
  getPost,
  addPost,
  deletePost,
  updatePost,
} from "../controller/postController.js";

const pRouter = express.Router();

pRouter.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

pRouter.get("/post", getPost);

pRouter.put("/updatepost/:id", updatePost);

pRouter.delete("/deletepost/:id", deletePost);

pRouter.post("/addPost", addPost);

export default pRouter;
