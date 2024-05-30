// Question 3: Remove Duplicates

// Write a function removeDuplicates(arr) that takes an array and returns a new array with duplicate elements removed. Use loops and conditionals to check for duplicates.

// SOLUTION:

let removeDuplicate = (arr) => {
  let newArr = [];

  for (let ball of arr) {
    if (!newArr.includes(ball)) {
      newArr.push(ball);
    }
  }
  console.log(newArr);
};

removeDuplicate([1, 2, 3, 4, 5, 6, 3, 4, 2, 6, 8]);
