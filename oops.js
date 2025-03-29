// OOPS : Object Oriented Programming Style

// const jatin = Object.freeze({
//   name: "Jatin",
//   accountNumber: 123456789,
//   balanve: 150000,
// });

// jatin.name = "Priyanshu";

// console.log(jatin);

// const jatinAccount = new Object();

// jatinAccount.name = "Jatin";
// jatinAccount.accountNumber = 123456;
// jatinAccount.balance = 150000;

// delete jatinAccount.accountNumber;

// console.log(jatinAccount);

// function createAccount(name, balance) {
//   return {
//     name: name,
//     accountNumber: Date.now(),
//     balance: balance,
//   };
// }

// const kiranAccount = createAccount("Kiran", 100000);
// kiranAccount.balance = 1000;
// console.log(kiranAccount);

// Constructor Function

// function BankAccount(name, balance = 0) {
//   this.name = name;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = (num) => {
//     this.balance += num;
//   };
//   this.withdraw = (num) => {
//     this.balance -= num;
//   };
// }

// BankAccount.prototype.deposit = function (num) {
//   this.balance += num;
// };
// BankAccount.prototype.withdraw = function (num) {
//   this.balance -= num;
// };

// let pankajAcc = new BankAccount("Pankaj", 10000);
// let yasirAcc = new BankAccount("Yasir");

// pankajAcc.deposit(10000);

// console.log(pankajAcc);
// yasirAcc.deposit(500);
// console.log(yasirAcc);

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// let numbers = new Array();

// console.log(numbers);

// Class

// class BankAccount {
//   name;
//   balance;
//   accountNUmber;

//   constructor(name, balance = 0) {
//     this.name = name;
//     this.balance = balance;
//     this.accountNUmber = Date.now();
//   }

//   deposit(num) {
//     this.balance += num;
//   }
//   withdraw(num) {
//     this.balance -= num;
//   }
// }

// let ankitaAccount = new BankAccount("Ankita", 1000);

// ankitaAccount.deposit(15000);
// ankitaAccount.withdraw(8000);

// console.log(ankitaAccount);

// Inheritence
// class BankAccount {
//   name;
//   balance;
//   accountNum;

//   constructor(name, balance = 0) {
//     this.name = name;
//     this.balance = balance;
//     this.accountNum = Date.now();
//   }

//   deposit(num) {
//     this.balance += num;
//   }
//   withdraw(num) {
//     this.balance -= num;
//   }
// }

// class SavingsAccount extends BankAccount {
//   limit = 100000;

//   constructor(name, balance = 0) {
//     super(name, balance);
//   }
// }

// class CurrentAccount extends BankAccount {
//   limit = 500000;

//   constructor(name, balance = 0) {
//     super(name, balance);
//     this.accountNum = this.accountNum;
//   }
// }

// let kiranAccount = new SavingsAccount("Kiran", 1000);

// kiranAccount.deposit(100000000);
// kiranAccount.withdraw(100000000);

// console.log(kiranAccount);

// Encapsulation
// class BankAccount {
//   name;
//   #balance;
//   accountNum;

//   constructor(name, balance = 0) {
//     this.name = name;
//     this.#balance = balance;
//     this.accountNum = Date.now();
//   }

//   deposit(num) {
//     this.#balance += num;
//   }
//   withdraw(num) {
//     this.#balance -= num;
//   }

//   set balance(num) {
//     if (isNaN(num)) {
//       throw new Error("Invalid Date Type");
//     }

//     this.#balance = num;
//   }

//   get balance() {
//     return this.#balance;
//   }
// }

// class SavingsAccount extends BankAccount {
//   limit = 100000;

//   constructor(name, balance = 0) {
//     super(name, balance);
//   }

//   #takeLoan() {
//     console.log("loan dissbursed");
//   }

//   get loan() {
//     this.#takeLoan();
//   }
// }

// class CurrentAccount extends BankAccount {
//   limit = 500000;

//   constructor(name, balance = 0) {
//     super(name, balance);
//     this.accountNum = this.accountNum;
//   }
// }

// let pankajAcc = new SavingsAccount("Pankaj", 1000);

// // pankajAcc.#balance = "Hello World";

// // pankajAcc.setBalance(7000000);

// // pankajAcc.takeLoan();
// pankajAcc.loan;
// pankajAcc.balance = 700000;

// console.log(pankajAcc);

// this
// new
// constructor function
// class
// super
// extends
// inheritence
// prototype chaining
// setter & getters
// private fileds and methods
// encapsulation
