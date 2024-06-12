import fs from "fs";

// fs.writeFile("./test.txt", "First line", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("File written");
//   }
// });

// fs.appendFile("./test.txt", "\n Third Line", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("File Written");
//   }
// });

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     // console.log(data.toString());
//     console.log(data);
//   }
// });

fs.unlink("./test.txt", (err) => {
  if (err) {
    console.log(err.message);
  }
});

// fs.mkdir();  make new directory
// rm.mkdir(); remove directory
// fs.exists; checks whether the file exists or not

let isExists = fs.existsSync("./test.txt");
console.log(isExists);
