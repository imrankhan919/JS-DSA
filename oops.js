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
//   this.customerName = name;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = (num) => {
//     this.balance = this.balance + num;
//   };

//   this.withdraw = (num) => {
//     this.balance = this.balance - num;
//   };
// }

// let kiranAccount = new BankAccount("Kiran", 10000);
// let ankitaAccount = new BankAccount("Ankita", 20000);

// kiranAccount.deposit(50000);
// kiranAccount.withdraw(10000);
// console.log(kiranAccount);
// console.log(ankitaAccount);

// const user = {
//   name: "Priyanshu",
//   email: "priyanshu@gmail.com",
//   age: 20,
//  printDetails: () => {
//     console.log(`my name is ${this.name}`);
//   },
// };

// user.printDetails();

// console.log(this);

// function CreateBook(name, genre, isPublished = false) {
//   this.bookName = name;
//   this.genre = genre;
//   this.isPublished = isPublished;

//   this.addYear = (year) => {
//     this.publishedYear = year;
//   };
// }

// const harryPotter = new CreateBook("Prisonar of Azkaban", "Fantasy", true);

// harryPotter.addYear(2000);

// console.log(harryPotter);
