let sum = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

// console.log(sum(1, 2));

// module.exports = sum;

// To export more than one functions there are two ways

// Method 1

// module.exports = { sum, sub };

// Method 2

exports.sum = sum;
exports.sub = sub;
