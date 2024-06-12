import fs from "fs";

// fs.writeFile("./test.txt", "First line", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("File written");
//   }
// });

fs.appendFile("./test.txt", "\n Third Line", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("File Written");
  }
});
