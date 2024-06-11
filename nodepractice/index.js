// const add = require("./calculator.js");

// console.log(add(1, 2));

// Importing more than one function
// Method 1

// const calc = require("./calculator.js");

// console.log(calc.sum(2, 1));
// console.log(calc.sub(2, 1));

// Method 2

// const { sum, sub } = require("./calculator.js");

// console.log(sub(4, 3));

// Import using ES modules

import { sum, sub } from "./calculator.js";

console.log(sum(3, 4));
console.log(sub(5, 3));
