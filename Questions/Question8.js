// Question 8: Average of Array

// Write a function averageArray(arr) that takes an array of numbers and returns the average of the elements. Use a loop to calculate the sum of the elements and then divide by the number of elements.

let averageArray = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;
  return average;
};

let numbers = [1, 2, 3, 4, 5];
console.log(averageArray(numbers));
