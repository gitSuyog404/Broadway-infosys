// Callback use gareko

// let area = (length, breadth, callback) => {
//   setTimeout(() => {
//     if (length < 0 || breadth < 0) {
//       let message = "Length or breadth cannot be negative";
//       callback(message, null);
//     } else {
//       let area = length * breadth;
//       callback(null, area);
//     }
//   }, 1000);

//   area(30, 40, (err, result) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`The area of the given values are ${result}cmsquare`);
//     }
//   });
// };

// Promise use gareko

let area = (length, breadth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (length < 0 || breadth < 0) {
        let message = new Error("Length or breadth cannot be negative");
        reject(message);
      } else {
        let area = length * breadth;
        resolve(area);
      }
    }, 1000);
  });
};

area(40, 50)
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error.message);
  });
