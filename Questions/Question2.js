//  Question 2 : Sum of Array Elements

//Write a function sumArray(arr) that takes an array of numbers and returns the sum of the elements. Use a loop to iterate through the array and sum the numbers.

// let sumArray = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// };

// let result = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// SIR SOLUTION:

// function sumArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// let result = sumArr([1, 2, 3, 4, 5]);
// console.log(result);

// Sir solution: alternative way for the same question

let sumArr = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum = sum + num;
  }
  return sum;
};

let result = sumArr([1, 2, 3, 4, 5]);
console.log(result);
