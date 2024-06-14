import express from "express";

const app = express();

const user = {
  id: 1,
  username: "JohnWick",
};

app.get("/", (req, res) => {
  res.send("<h3>Server is running</h3>");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
