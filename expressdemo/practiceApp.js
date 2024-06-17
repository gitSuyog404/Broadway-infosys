import express from "express";

const app = express();
app.use(express.json());

let users = [
  {
    id: 1,
    username: "John Wick",
    age: 40,
  },
];

app.get("/", (req, res) => {
  res.send("<h3>Server is running</h3>");
});

app.get("/user", (req, res) => {
  const id = req.query.id;

  if (id) {
    let user = users.find((u) => u.id == id);
  }
});
