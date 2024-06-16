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

const app = express();
app.use(express.json());

let users = [{}];

let vehicles = [
  { vehicleno: 1, makeYear: 2023, model: "Hellcat", company: "Dodge" },
];

app.get("/", (req, res) => {
  res.send("<h3>Server is running</h3>");
});

app.get("/user", (req, res) => {
  const id = req.query.id;

  if (id) {
    let user = users.find((u) => u.id == id);

    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } else {
    res.send(users);
  }
  // cannot send double response
});

app.put("/updateuser/:id", (req, res) => {
  let newpassword = req.body.password;
  let id = req.params.id;
  let user = users.find((u) => u.id == id);
  user.password = newpassword;
  res.send({ message: "Password updated", user });

  // Query params are optional but params are not optional

  // params vaneko /1 jasto vayo
  // query params vaneko user?id=1 jasto vayo
});

// app.delete("/deleteuser/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const initialLength = users.length;

//   users = users.filter((user) => user.id !== userId);

//   if (users.length < initialLength) {
//     res.send({ message: "User deleted successfully" });
//   } else {
//     res.status(404).send({ message: "User not found" });
//   }
// });

app.delete("/deleteuser/:id", (req, res) => {
  let id = req.params.id;
  let index = users.findIndex((u) => u.id == id);
  users.splice(index, 1);
  res.send({ message: "User deleted", users });
});

app.post("/adduser", (req, res) => {
  users.push(req.body);
  res.send({ message: "USER ADDED" });
});

app.get("/vehicles", (req, res) => {
  res.send(vehicles);
});

app.post("/addvehicle", (req, res) => {
  vehicles.push(req.body);
  res.send({ message: "Vehicle Info added" });
});

// PUT method to update user information
// :id vaneko chai varying value vayera rakheko ho

app.put("/updateuser/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  let userFound = false;

  users = users.map((user) => {
    if (user.id === userId) {
      userFound = true;
      return { ...user, ...updatedUser };
    }
    return user;
  });

  if (userFound) {
    res.send({ message: "USER UPDATED" });
  } else {
    res.status(404).send({ message: "USER NOT FOUND" });
  }
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
