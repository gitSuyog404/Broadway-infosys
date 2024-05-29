// CALLBACK
// let area = (L, B, callback) => {
//   setTimeout(() => {
//     if (L < 0 || B < 0) {
//       let msg = "Length or breadth cannot be negative";
//       callback(msg, null);
//     } else {
//       let area = L * B;
//       callback(null, area);
//     }
//   }, 2000);
// };

// area(10, 20, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`The area of the given values are ${result} cmsquare`);
//   }
// });

// Promise
let area = (L, B) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (L < 0 || B < 0) {
        let msg = new Error("LEngth or breath cannot be negative");
        reject(msg);
      } else {
        let area = L * B;
        resolve(area);
      }
    }, 2000);
  });
};

area(10, 20)
  .then((result) => {
    console.log(result);
  })

  .catch((err) => {
    console.log(err.message);
  });
