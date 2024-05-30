// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of number, and for the multiples of five, print "Buzz". For numbers which are mulitples of both three and five, print "FizzBuzz".

let num = 1;

while (num <= 100) {
  if (num % 3 == 0) {
    console.log(`Fizz`);
  } else if (num % 5 == 0) {
    console.log(`Buzz`);
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log(`FizzBuzz`);
  }

  num++;
  console.log(num);
}

// Sir ko code

for (let num = 1; num <= 100; num++) {
  num % 3 == 0 && num % 5 == 0
    ? console.log("FizzBuzz")
    : num % 3 == 0
    ? console.log("Fizz")
    : num % 5 == 0
    ? console.log("Buzz")
    : console.log(num);
}
