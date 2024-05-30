// Question 4: Find the Maximum number

// Write a function findMax(arr) that takes an array of numbers and returns the largest number in the array. Use a loop to iterate through the array and a conditional to keep track of the maximum value.

let findMax = (arr) => {
  let max = arr[0];
  for (let element of arr) {
    if (element > max) {
      max = element;
    }
  }

  console.log(max);
};

findMax([1, 4, 67, 7, 3234, 55]);
