// class Customer {
//   constructor(fullname, age, address) {
//     this.fullname = fullname;
//     this.age = age;
//     this.address = address;
//   }
// }

// let customer1 = new Customer("John", 40, "New York");
// let customer2 = new Customer("Bruce", 41, "Gotham");

// console.log(
//   `The first person is ${customer1.fullname} and this person is ${customer1.age} years old and this person lives in ${customer1.address}.`
// );
// console.log(
//   `The first person is ${customer2.fullname} and this person is ${customer2.age} years old and this person lives in ${customer2.address}.`
// );

// For methods in class
// class Customer {
//   constructor(fullname, age, address) {
//     this.fullname = fullname;
//     this.age = age;
//     this.address = address;
//   }

// Class vitra method wa functino banauda function keyword ya let garera arrow function garna mildaina direct function syntax ma garne ho

//   getInfo() {
//     console.log(
//       `The first person is ${this.fullname} and this person is ${this.age} years old and this person lives in ${this.address}.`
//     );
//   }
// }

// let customer1 = new Customer("John", 40, "New York");
// let customer2 = new Customer("Bruce", 41, "Gotham");

// Mathi banako method lai call garne way :
// customer1.getInfo();
// customer2.getInfo();

// The four pillars of object oriented programming
// 1. Encapsulation
// esma encapsulation ko property apply huna ko lagi getter ra setter function banainxa
// getter ma value line ra setter ma value set garne

//  esma chai class bahira bata value change garna namilna chai private variable banainxa jun ko lagi chai "#" use hunxa
// for example #a yo vaneko chai aba private variable

class Customer {
  #age;

  constructor(fullname, age, address) {
    this.fullname = fullname;
    this.#age = age;
    this.address = address;
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    this.#age = age;
  }

  getCustInfo() {
    console.log(
      `The first person is ${this.fullname} and this person is ${
        this.#age
      } years old and this person lives in ${this.address}.`
    );
  }
}

let cust = new Customer("John", 12, "New York");
cust.setAge(20);
console.log(cust.getAge());

// Abstraction chai dherai use hudaina aru languages ma chai abstract class banayera garinxa
// esko example chai jasto bank ma transaction garda hamilai vitra ko process kei vairaxa tha hudaina tara tyo transaction complete hunxa
// abstraction ek choti afai herne
