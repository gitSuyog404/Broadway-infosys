// import { users, vehicles } from "../data.js";

// let getUser = (req, res, next) => {
//   const id = req.query.id;

//   if (id) {
//     let user = users.find((u) => u.id == id);

//     if (user) {
//       res.send(user);
//     } else {
//       let err = new Error("User not found");
//       err.status = 404;
//       // throw err;
//       // Or
//       next(err);
//     }
//   } else {
//     res.send(users);
//   }
//   // cannot send double response
// };

// let postUser = (req, res) => {
//   users.push(req.body);
//   res.send({ message: "USER ADDED" });
// };

// let putUser = (req, res) => {
//   let newpassword = req.body.password;
//   let id = req.params.id;
//   let user = users.find((u) => u.id == id);
//   user.password = newpassword;
//   res.send({ message: "Password updated", user });

//   // Query params are optional but params are not optional

//   // params vaneko /1 jasto vayo
//   // query params vaneko user?id=1 jasto vayo
// };

// let deleteUser = (req, res) => {
//   let id = req.params.id;
//   let index = users.findIndex((u) => u.id == id);
//   users.splice(index, 1);
//   res.send({ message: "User deleted", users });
// };

// export { getUser, postUser, putUser, deleteUser };

// Assignment
// Implement MONGODB in this file
// aja sikeko kura sabai eta lyayera yo file through mongodb database ma file haru pathaune line saabai garne .
// PUT AND DELETE ni try garne

// assignment ra extra kei herera aune

// Import User model
import User from "../modules/userModel.js";

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create a new user
const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update a user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllUsers, getUserById, updateUser, createUser, deleteUser };
