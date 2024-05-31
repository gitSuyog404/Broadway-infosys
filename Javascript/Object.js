// let user = {
//   Name: "John wick ",
//   Age: 40,
//   password: "Mrwick",
//   login: function () {
//     console.log("Logged in success with email ${this.email}");
//   },

//   Object use garda normal function ko use hunxa
//   arrow function le this lai global object linxa
//   logout: () => {
//     console.log("Logged out success with email ${this .email}");
//   },
// };

// user.login();
// user.logout();
// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log(user.Name);
// let myKey = "password";

// console.log(user[myKey]);
// console.log(user.email);

// user.password = "newPassword";
// console.log(user[myKey]);

// let myUser = {
//   Name: "Suyog",
//   Age: 17,
//   email: "suyogbaniya@gmail.com",
//   Online: function () {
//     console.log(`This user is online with email ${this.email}`);
//   },
// };

// myUser.Online();

// Array of objects for multiple users

// let users = [
//   {
//     email: "John@gmail.com",
//     password: "john123",
//   },

//   {
//     email: "Bruce@gmail.com",
//     password: "bruce123",
//   },

//   {
//     email: "Clark@gmail.com",
//     password: "Clark123",
//   },
// ];

// let email = "Bruce@gmail.com";
// let password = "bruce123";

// for (let i = 0; i < 3; i++) {
//   if (email == users[i].email && password == users[i].password) {
//     console.log("User found in the server");
//   } else {
//     console.log("User not found in the server");
//   }
// }

// using for of

// for (let user of users) {
//   if (user.email === email) {
//     if (user.password === password) {
//       console.log("Login Success");
//     } else {
//       console.log("Invalid message");
//     }
//     break;
//   }
// }

// To check if the user is in the server;

let users = [
  {
    email: "John@gmail.com",
    password: "john123",
  },

  {
    email: "Bruce@gmail.com",
    password: "bruce123",
  },

  {
    email: "Clark@gmail.com",
    password: "Clark123",
  },
];

let email = "Bruce@gmail.com";
let password = "bruce123";

let isMatch = false;

for (let user of users) {
  if (user.email === email) {
    if (user.password === password) {
      console.log("Login Success");
    } else {
      console.log("Invalid password");
    }

    isMatch = true;
    break;
  }
}

if (!isMatch) {
  console.log("Email not found");
}
