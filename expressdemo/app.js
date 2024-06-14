import express from "express";

const app = express();
app.use(express.json());

let users = [{ id: 1, username: "Johnwick" }];

app.get("/", (req, res) => {
  res.send("<h3>Server is running</h3>");
});

app.get("/user", (req, res) => {
  res.send(users);
});

app.post("/adduser", (req, res) => {
  // console.log(req.body);
  // res.send("posted");
  users.push(req.body);
  res.send({ message: "USER ADDED" });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
