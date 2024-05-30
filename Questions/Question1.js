// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of number, and for the multiples of five, print "Buzz". For numbers which are mulitples of both three and five, print "FizzBuzz".

let num = 0;

while (num < 100) {
  if (num % 3 == 0) {
    console.log(`Fizz`);
  } else if (num % 5 == 0) {
    console.log(`Buzz`);
  }

  num++;
  console.log(num);
}

// 31:19
