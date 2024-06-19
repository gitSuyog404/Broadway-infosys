import { users, vehicles } from "../data.js";

let getUser = (req, res, next) => {
  const id = req.query.id;

  if (id) {
    let user = users.find((u) => u.id == id);

    if (user) {
      res.send(user);
    } else {
      let err = new Error("User not found");
      err.status = 404;
      // throw err;
      // Or
      next(err);
    }
  } else {
    res.send(users);
  }
  // cannot send double response
};

let postUser = (req, res) => {
  users.push(req.body);
  res.send({ message: "USER ADDED" });
};

let putUser = (req, res) => {
  let newpassword = req.body.password;
  let id = req.params.id;
  let user = users.find((u) => u.id == id);
  user.password = newpassword;
  res.send({ message: "Password updated", user });

  // Query params are optional but params are not optional

  // params vaneko /1 jasto vayo
  // query params vaneko user?id=1 jasto vayo
};

let deleteUser = (req, res) => {
  let id = req.params.id;
  let index = users.findIndex((u) => u.id == id);
  users.splice(index, 1);
  res.send({ message: "User deleted", users });
};

export { getUser, postUser, putUser, deleteUser };
