// CALL BACK

// WAP to find the area of the given length or breadth using callback

// let area = (l, b, callback) => {
//   setTimeout(() => {
//     if (l < 0 || b < 0) {
//       let message = "The given length or breadth cannot be negative";
//       callback(message, null);
//     } else {
//       let area = l * b;
//       callback(null, area);
//     }
//   }, 2000);
// };

// area(20, 40, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`The area of the given values is ${result}cm2`);
//   }
// });

// Write a program to find the area of the given length or breadth using callback

let area = (length, breadth, callback) => {
  setTimeout(() => {
    if (length < 0 || b < 0) {
      let message = "The given length or breadth should not be negative";
      callback(message, null);
    } else {
      let area = length * breadth;
      callback(null, area);
    }
  }, 2000);
};

area(10, 20, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`The area of the given values is ${result}cm2`);
  }
});
