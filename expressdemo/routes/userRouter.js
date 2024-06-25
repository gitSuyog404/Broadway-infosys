// import express from "express";
// import {
//   getUser,
//   postUser,
//   deleteUser,
//   putUser,
// } from "../controller/userController.js";
// ES modules ma import garda file extension xuttaunu hudaina
// import {...} from "../controller/userController.js"
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("<h3>Server is running</h3>");
// });

// router.get("/user", getUser);

// router.put("/updateuser/:id", putUser);

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

// router.delete("/deleteuser/:id", deleteUser);

// router.post("/adduser", postUser);

// router.get("/vehicles", (req, res) => {
//   res.send(vehicles);
// });

// router.post("/addvehicle", (req, res) => {
//   vehicles.push(req.body);
//   res.send({ message: "Vehicle Info added" });
// });

// PUT method to update user information
// :id vaneko chai varying value vayera rakheko ho

// router.put("/updateuser/:id", (req, res) => {
//   const userId = parseInt(req.params.id);
//   const updatedUser = req.body;

//   let userFound = false;

//   users = users.map((user) => {
//     if (user.id === userId) {
//       userFound = true;
//       return { ...user, ...updatedUser };
//     }
//     return user;
//   });

//   if (userFound) {
//     res.send({ message: "USER UPDATED" });
//   } else {
//     res.status(404).send({ message: "USER NOT FOUND" });
//   }
// });

// export default router;

// for posts
/*    

    {
        id: 1,
        post: "Chapter4",
        postedBy: 1,


    }

*/

import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
