// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails() {
//     console.log(`Name = ${this.name} and Age is ${this.age}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, roll) {
//     super(name, age);
//     this.roll = roll;
//   }

//   getDetails() {
//     console.log(
//       `Name = ${this.name} and Age is ${this.age} and Roll = ${this.roll}`
//     );
//   }
// }

// let std = new Student("John", 20, 1);
// std.getDetails();

class Account {
  constructor(accname, accnum, balance) {
    this.accname = accname;
    this.accnum = accnum;
    this.balance = balance;
  }

  deposit(amt) {
    this.balance += amt;
    console.log(`Amount deposited and new balance is ${this.balance}`);
  }

  withdraw(amt) {
    this.balance -= amt;
    console.log(`Amount withdrawed and new balance is ${this.balance}`);
  }

  calculateInterest(interestRate) {
    return this.balance * interestRate;
  }

  getDetails() {
    console.log(
      `The account name is under ${this.accname} and the account number is ${this.accnum} and the current balance of this account is ${this.balance}`
    );
  }
}

class savingAccount extends Account {
  constructor(accname, accnum, balance, interestRate) {
    super(accname, accnum, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    super.calculateInterest(this.interestRate);
  }

  getDetails() {
    console.log(
      `The account name is under ${this.accname} and the account number is ${this.accnum} and the current balance of this account is ${this.balance}  and the interest rate of this saving account is ${this.interestRate}`
    );
  }
}

let sa = new savingAccount("John", 112324, 1000, 0.1);
sa.deposit(500);
sa.calculateInterest(sa.interestRate);

class fixedDeposit extends Account {
  constructor(accname, accnum, balance, interestRate) {
    super(accname, accnum, balance);

    this.interestRate = interestRate;
  }

  calculateInterest() {
    super.calculateInterest(this.interestRate);
  }

  getDetails() {
    console.log(
      `The account name is under ${this.accname} and the account number is ${this.accnum} and the current balance of this account is ${this.balance}  and the interest rate of this fixed deposit account is ${this.interestRate}`
    );
  }
}
