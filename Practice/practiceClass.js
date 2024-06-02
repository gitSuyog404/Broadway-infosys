// class Student {
//   constructor(fullname, age, address) {
//     this.fullname = fullname;
//     this.age = age;
//     this.address = address;
//   }
// }

// let stud1 = new Student("John Wick", 40, "New York");
// let stud2 = new Student("Bruce Wayne", 43, "Gotham city");

// console.log(
//   `The name of the student is ${stud1.fullname} and he is ${stud1.age} years old and lives in ${stud1.address}`
// );

// console.log(
//   `The name of the student is ${stud2.fullname} and he is ${stud2.age} years old and lives in ${stud2.address}`
// );

// Creating methods in class

// class Student {
//   constructor(fullname, age, address) {
//     this.fullname = fullname;
//     this.age = age;
//     this.address = address;
//   }

//   getInformation() {
//     console.log(
//       `This person is ${this.fullname} and he is ${this.age} years old and he lives in ${this.address}.`
//     );
//   }
// }

// let student1 = new Student("JOHN WICK", 40, "NEW YORK");

// student1.getInformation();

// ENCAPSULATION in class

class superHero {
  #superpower;

  constructor(name, team, universe, superpower) {
    this.name = name;

    this.team = team;
    this.#superpower = superpower;

    this.universe = universe;
  }

  getsuperPower() {
    return this.#superpower;
  }

  setsuperPower(superpower) {
    this.#superpower = superpower;
  }

  getHeroInfo() {
    console.log(
      `This superhero is ${this.name} and this superhero is in ${
        this.team
      } and this superhero is from ${
        this.universe
      } and this superhero's superpower is ${this.#superpower}`
    );
  }
}

let hero1 = new superHero("Hulk", "Avengers", "Marvel Universe");
hero1.setsuperPower("Rage");
console.log(hero1.getsuperPower());
