// Question 7: Palindrome Checker

// Write a function isPalindrome(str) that takes a string and returns true if the string is a palindrome (it reads the same forward and backward) and false otherwise. Use a loop to compare characters from the beginning and end of the string.

// let isPalindrome = (str) => {
//   let rev = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str;
//   }

//   if (rev === str) {
//     console.log("IT IS PALINDROME");
//   } else {
//     console.log("IT IS NOT PALINDROME");
//   }
// };

// isPalindrome("WOW");

// TO check palindrome for numbers

let isPalindrome = (num) => {
  let reverse = 0;
  let original = num;

  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);

    reverse = reverse * 10 + rem;
  }
  console.log(reverse);

  if (reverse === original) {
    console.log("Palindrome");
  } else {
    console.log("Not palindrome");
  }
};

isPalindrome(1001);
