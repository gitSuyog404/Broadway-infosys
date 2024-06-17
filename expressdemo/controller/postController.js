import { posts } from "../data.js";

let getPost = (req, res) => {
  const id = req.query.id;

  if (id) {
    let post = posts.find((p) => p.id == id);

    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ error: "Post not found" });
    }
  } else {
    res.send(posts);
  }
};

let addPost = (req, res) => {
  posts.push(req.body);
  res.send({ message: "Post added" });
};

let updatePost = (req, res) => {
  let newTitle = req.body.title;
  let id = req.params.id;

  let post = posts.find((p) => p.id == id);

  post.title = newTitle;
  res.send({ message: "Post updated", post });
};

let deletePost = (req, res) => {
  let id = req.params.id;
  let index = posts.findIndex((p) => p.id == id);
  posts.splice(index, 1);

  res.send({ message: "Post Deleted", posts });
};

export { getPost, updatePost, deletePost, addPost };
