// import express from "express";

// const app = express();
// app.use(express.json());

// let users = [{ id: 1, username: "Johnwick" }];

// app.get("/", (req, res) => {
//   res.send("<h3>Server is running</h3>");
// });

// app.get("/user", (req, res) => {
//   res.send(users);
// });

// app.post("/adduser", (req, res) => {
//   // console.log(req.body);
//   // res.send("posted");
//   users.push(req.body);
//   res.send({ message: "USER ADDED" });
// });

// app.listen(3000, () => {
//   console.log("Server is up and running");
// });

// adding new data practice garne
// post method, vehicle information

import express from "express";
import userRouter from "./routes/userRouter.js";
import pRouter from "./routes/postRouter.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFoundHandler.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));
// There are two ways or using middle ware which is globally and at route level

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h4>Server is running</h4>");
});

app.use("/api/users", userRouter);

app.use("/api/posts", pRouter);

// Always put the errorHandler at last after all the middlwares so that it can catch all the error in previous middleware
// notFoundHandler lai chai errorHandler vanda thyakka mathi but aru middlware haru vanda tala rakhinxa
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is up and running");
});
