// Question 6: Reverse an Array.

// Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order. Use a loop to iterate through the array from the end of the beginning.

let reverseArray = (arr) => {
  let reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
};

let normArray = [1, 2, 3, 4, 5];
console.log(reverseArray(normArray));
