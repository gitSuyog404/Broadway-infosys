// Write a program that prints the numbers from 1 to 100, But for multiple of three, print "Fizz" instead of number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz"

// Using switch case and while loop

// let i = 1;

// while (i <= 100) {
//   switch (true) {
//     case i % 3 === 0 && i % 5 === 0:
//       console.log("FizzBuzz");
//       break;
//     case i % 3 === 0:
//       console.log("Fizz");
//       break;
//     case i % 5 === 0:
//       console.log("Buzz");
//       break;
//     default:
//       console.log(i);
//   }
//   i++;
// }

// Doing the same program using  while loop

let num = 1;

while (num <= 100) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`FizzBuzz`);
  } else if (num % 3 == 0) {
    console.log(`Fizz`);
  } else if (num % 5 == 0) {
    console.log(`Buzz`);
  }
  console.log(num);

  num++;
}
