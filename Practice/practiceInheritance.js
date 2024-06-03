class Account {
  constructor(accname, accnum, balance) {
    this.accname = accname;
    this.accnum = accnum;
    this.balance = balance;
  }

  deposit(amt) {
    this.balance += amt;
    console.log(`Amount deposited , New balance = ${this.balance}`);
  }

  withdraw(amt) {
    this.balance -= amt;
    console.log(`Amount withdrawn , New balance = ${this.balance}`);
  }

  calculateInterest(rate) {
    console.log(this.balance * rate);
  }
}

class SavingAccount extends Account {
  constructor(accname, accnum, balance, interestRate) {
    super(accname, accnum, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    super.calculateInterest(this.interestRate);
  }
}

let sa = new SavingAccount("John", 12312, 1000, 0.1);

sa.deposit(500);
sa.calculateInterest();

class FixedDeposit extends Account {
  constructor(accname, accnum, balance, interestRate) {
    super(accname, accnum, balance);
    this.interestRate = interestRate;
  }

  withdraw() {
    console.log(
      "Error: Withdrawals are not allowed in a fixed deposit account "
    );
  }

  calculateInterest() {
    super.calculateInterest(this.interestRate);
  }
}

let fd = new FixedDeposit("John", 123321312, 2000, 0.3);

fd.deposit(1000);
fd.calculateInterest();
fd.withdraw(400);
