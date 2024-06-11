// let sum = (a, b) => {
//   return a + b;
// };

// let sub = (a, b) => {
//   return a - b;
// };

// console.log(sum(1, 2));

// module.exports = sum;

// To export more than one functions there are two ways

// Method 1

// module.exports = { sum, sub };

// Method 2

// exports.sum = sum;
// exports.sub = sub;

// Node ma two types of modules system hunxa mathi diyeko chai common js vayo arko chai ES modules hunxa

// Es modules chalauna chai package.json ma gayera
// "type" : "module" rakhne
// export default chai euta ko lagi matra use hunxa
// for multiple exports use export keyword

export let sum = (a, b) => {
  return a + b;
};

export let sub = (a, b) => {
  return a - b;
};
