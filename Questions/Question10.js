// Question 10: Find Common Elements

// Write a function commonElements(arr1,arr2) that takes two arrays and returns a new array containing the common elements between the two arrays. Use loops and conditionals to find and store the common elements.

let commonElements = (arr1, arr2) => {
  let celements = [];

  for (let num of arr1) {
    if (arr2.includes(num)) {
      celements.push(num);
    }
  }

  console.log(celements);
};
commonElements([1, 2, 3, 4], [3, 4, 5, 6]);
