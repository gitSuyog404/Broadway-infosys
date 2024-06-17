import express from "express";

const router = express.Router();

let users = [
  {
    id: 1,
    username: "John Wick",
    age: 40,
  },
];

let vehicles = [
  { vehicleno: 1, makeYear: 2023, model: "Hellcat", company: "Dodge" },
];

router.get("/", (req, res) => {
  res.send("<h3>Server is running</h3>");
});

router.get("/user", (req, res) => {
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

router.put("/updateuser/:id", (req, res) => {
  let newpassword = req.body.password;
  let id = req.params.id;
  let user = users.find((u) => u.id == id);
  user.password = newpassword;
  res.send({ message: "Password updated", user });

  // Query params are optional but params are not optional

  // params vaneko /1 jasto vayo
  // query params vaneko user?id=1 jasto vayo
});

// router.delete("/deleteuser/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const initialLength = users.length;

//   users = users.filter((user) => user.id !== userId);

//   if (users.length < initialLength) {
//     res.send({ message: "User deleted successfully" });
//   } else {
//     res.status(404).send({ message: "User not found" });
//   }
// });

router.delete("/deleteuser/:id", (req, res) => {
  let id = req.params.id;
  let index = users.findIndex((u) => u.id == id);
  users.splice(index, 1);
  res.send({ message: "User deleted", users });
});

router.post("/adduser", (req, res) => {
  users.push(req.body);
  res.send({ message: "USER ADDED" });
});

router.get("/vehicles", (req, res) => {
  res.send(vehicles);
});

router.post("/addvehicle", (req, res) => {
  vehicles.push(req.body);
  res.send({ message: "Vehicle Info added" });
});

// PUT method to update user information
// :id vaneko chai varying value vayera rakheko ho

router.put("/updateuser/:id", (req, res) => {
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

export default router;
