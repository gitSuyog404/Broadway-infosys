// Question 9: Merge and Sort Arrays

// Write a function mergeAndSort(arr1,arr2) that takes two arrays, merges them into one array, and returns the merged array sorted in ascending order. Use array methods and loops as needed.

// There are different solution for this question

//  The first way;

// let mergeAndSort = (arr1, arr2) => {
//   let merged = [];

//   for (let num of arr1) {
//     merged.push(num);
//   }

//   for (let num of arr2) {
//     merged.push(num);
//   }

//   console.log(merged);
// };

// mergeAndSort([1, 3, 5, 7], [2, 4, 6, 8]);

// Second way

// let mergeAndSort =(arr1,arr2)=>{
//     let merged = arr1.concat(arr2);
//     console.log(merged)
// }
// mergeAndSort([1, 3, 5, 7], [2, 4, 6, 8]);

// Third way

let mergeAndSort = (arr1, arr2) => {
  let merged = [...arr1, ...arr2];

  merged.sort((a, b) => a - b);
  console.log(merged);
};
mergeAndSort([1, 3, 5, 7], [2, 4, 6, 8]);
