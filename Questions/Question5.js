// Question 5: Count Vowels

// Write a function countVowels(str) that takes a string and returns the number of vowels (a,e,i,o,u) in the string. Use a loop to iterate through the string and a conditional to check if each character is a vowel.

let countVowels = (str) => {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      vowelCount++;
    }
  }

  console.log(vowelCount);
};

countVowels("BANANA");
