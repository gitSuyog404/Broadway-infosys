// Write a function removeDuplicates(arr) that takes an array and returns a new array with duplicate elements removed. Use loops and conditionals to check for duplicates.

let removeDuplicates = (arr) => {
  let newArray = [];

  for (let dup of arr) {
    if (!newArray.includes(dup)) {
      newArray.push(dup);
    }
  }

  console.log(newArray);
};

removeDuplicates([1, 2, 3, 4, 5, 4, 7, 5, 8, 9, 2]);
