import { Post } from "../data.js";

let getPost = (req, res) => {
  const id = req.query.id;

  if (id) {
    let post = Post.find((p) => p.id == id);

    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ error: "Post not found" });
    }
  } else {
    res.send(Post);
  }
};

export { getPost };
// post tanda chai user ko id bata tannu paryo
