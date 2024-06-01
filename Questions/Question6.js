// Question 6: Reverse an Array.

// Write a function reverseArray(arr) that takes an array and returns a new array with the elements in reverse order. Use a loop to iterate through the array from the end of the beginning.

// SOLUTION

let reverseArray = (arr) => {
  // [1,2,3,4]
  // [4,3,2,1]

  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  console.log(reverse);
};

reverseArray([1, 2, 3, 4, 5]);
