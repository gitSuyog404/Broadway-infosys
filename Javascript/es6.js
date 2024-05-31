// let and const
// arrow function
// object literal (spread operators)
// array

// let numbers = [1,2,3,4,5];

// foEach ma callback use hunxa so callback ma always arrow function banai halne.

// variable_name.forEach(callbackfunction)

// numbers.forEach((num)=>{
//     console.log(num);
// });

// let sq = numbers.map((n)=> `<h1>${n}</h1>`)  jsx syntax ko example ;
// console.log(sq);

// let even = numbers.filter((n) => n%2==0);
// console.log(even);

// for (let num of numbers){

// }

// Reduce

// let numbers = [1, 2, 3, 4, 5];

// numbers.reduce;
// let result = numbers.reduce((sum, n) => sum + n, 8);

// console.log(result);

// Reduce chai mostly use hudaina mostly use hune vaneko chai filter ra map

// .some ma chai kunai euta element le condition meet garyo vane pani true dinxa

// let numbers = [1,2,3,4,5]

// let result = numbers.some((n) => n%2==0);
// console.log(result);

// .every ma chai sabai element le condition meet garnu parxa

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.every((n) => n % 2 == 0);
// console.log(result);

// Object Destructuring

// For array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let [first, second] = numbers;

// console.log(`The first element is ${first} and second element is ${second}`);

// FOR OBJECTS

// let user = {
//   email: "email@gmail.com",
//   password: "12345",
// };

// let { email, password } = user;

// DOING THE SAME THING
// let email = user.email;
// let password = user.password;

// console.log(email);
// console.log(password);

// Spread operator

// EXAMPLE FOR ARRAY

let numbers = [1, 2, 3, 4, 5];

let newnum = [...numbers, 6, 7, 8, 9, 10];
console.log(newnum);

// EXAMPLE FOR OBJECTS

let user = { email: "email@gmail.com", age: 1 };
let newUser = { ...user, password: "1234" };

console.log(newUser);
