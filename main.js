// 1. . Write a function called countOccurrences()
// that takes in a string and a character and returns
// the number of occurrences of that character in the string.

// const countOccurrences = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// };

// const result = countOccurrences("bananA", "a");
// console.log(result);

// 2. Write a function called findMaxNumber that takes
// in an array of numbers and returns the largest number
// in the array.

// const findMaxNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// const result = findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 22, 9, 10]);
// console.log(result);

// 3. Write a function called titleCase that takes in a string
// and returns the string with the first letter of each word
// capitalized.

// const titleCase = (str) => {
//   const words = str.toLowerCase().split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(" ");
// };

// const result = titleCase("i am Cat");
// console.log(result);

// 4. Write a function called reverseString that takes in a
// string and returns the reverse of that string.

// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };

// const reverseString = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };

// const result = reverseString("priyanshu");
// console.log(result);

// 5. Write a function called countVowels that takes in a
//  string and returns the number of vowels in the string.

// function countVowels(str) {
//   const formattedStr = str.toLowerCase();
//   let count = 0;

//   for (let i = 0; i < formattedStr.length; i++) {
//     const char = formattedStr[i];

//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// }

// const result = countVowels("apple");
// console.log(result);

// 6. Write a function called removeDuplicates that takes in
// an array and returns a new array with duplicates
// removed.

// const removeDuplicates = (arr) => {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }

//   return uniqueArr;
// };

// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

// const result = removeDuplicates([1, 2, 3, 4, 2, 3, 4, 5, 6]);
// console.log(result);

// 7. A palindrome is a word, phrase, number, or other
// sequence of characters which reads the same backward or
// forward. An example of a palindrome is "madam".

// const isPalindrome = (str) => {
//   const reversed = str.split(" ").reverse().join(" ");
//   return reversed === str;
// };

// const result = isPalindrome("madam");
// console.log(result);

// 8. Write a function called arrayIntersection that takes in
// two arrays and returns an array containing the
// intersection of the two input arrays
// (i.e., the common elements that appear in both arrays).

// const arrayIntersection = (arr1, arr2) => {
//   const intersection = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
//       intersection.push(arr1[i]);
//     }
//   }
//   return intersection;
// };

// const result = arrayIntersection([1, 2, 4, 5, 6], [4, 5, 6, 9]);
// console.log(result);

// 9. write a function called fizzBuzzArray that takes in a number and returns an array.
// The array should contain all the numbers from 1 to the number passed in.
// However, if the number is divisible by 3, you should replace the
// number with "Fizz". If the number is divisible by 5, you should
// replace the number with "Buzz". If the number is divisible by
// both 3 and 5, you should replace the number with "FizzBuzz".

// const fizzBuzzArray = (num) => {
//   const arr = [];

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr;
// };

// const result = fizzBuzzArray(15);
// console.log(result);

// 10. Write a function called displayLikes that takes in an
// array of names and returns
// a string of who likes the post.
// The function should return a string formatted as follows:
// • If no one likes it, it should return 'no one likes this'
// • If one person likes it, it should return '{name} likes this'
// • If two people like it, it should return '{name1} and {name2} like this'
// • If three people like it, it should return '{name1}, {name2} and {name3} like this'
// • If more than three people like it, it should return '{name1}, {name2} and {x} others like this'

// function displayLikes(names) {
//   const length = names.length;

//   if (length === 0) {
//     return "no one likes this";
//   } else if (length === 1) {
//     return `${names[0]} likes this`;
//   } else if (length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else {
//     return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//   }
// }

// const result = displayLikes(["imran", "yasir", "ankita", "gopal"]);
// console.log(result);

// 11. Write a function called findMissingNumber that takes in an
// array of unique numbers from 1 to n (inclusive),
// where one number is missing. It should return the missing number.

// function findMissingNumber(arr) {
//   if (!arr || arr.length === 0) {
//     return undefined;
//   }

//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;

//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }

//   return expectedSum - actualSum;
// }

// const result = findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]);
// console.log(result);

// 12.  Write a function called findMissingLetter that takes in
// an array of consecutive (increasing) letters as input and
// returns the missing letter in the array.

// const findMissingLetter = (arr) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const startIndex = alphabet.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) return alphabet[startIndex + i];
//   }

//   return " ";
// };

// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt(0);

//   for (let i = 1; i < arr.length; i++) {
//     const current = arr[i].charCodeAt(0);
//     if (current - start > 1) {
//       return String.fromCharCode(start + 1);
//     }
//     start = current;
//   }
//   return "";
// }

// const result = findMissingLetter(["a", "b", "d", "e"]);
// console.log(result);

// 13.  Write a function called areAllCharactersUnique that takes in a string and
// returns true or false depending on whether all characters in the
// string are unique (i.e., no character is repeated).

// const areAllCharactersUnique = (str) => {
//   const charCount = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (charCount[char]) {
//       return false;
//     }

//     charCount[char] = true;
//   }

//   return charCount;
// };

// const result = areAllCharactersUnique("banana");
// console.log(result);

// 14. Write a function called findFirstNonRepeatingCharacter
// that takes in a string and returns the first non
// repeating character in the string.

// const findFirstNonRepeatingCharacter = (str) => {
//   const charCount = {};

//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// };

// const result = findFirstNonRepeatingCharacter("banana");
// console.log(result);

// 15. Write a function called diceGameSimulation that simulates this dice game.
// The function should take one
// argument:
// a. numSimulations: The number of times to simulate the dice game.
// b. The game rules are if a 7 or 11 are rolled, the player wins and
// they get a result of win. If a 2, 3 or 12
// are rolled they lose and get a result of lose. Anything else and
// they get a result of roll again.
// c. The function should return an array of objects, where each
// object represents a simulation result.
// Each object should contain the following properties:
// d. dice1: The value of the first dice (a random number between 1 and 6).
// e. dice2: The value of the second dice (a random number between 1 and 6).
// f. sum: The sum of the two dice values.
// g. result: The result of the roll, which can be "win", "lose", or "roll again"

// const rollDice = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const diceGameSimulation = (numSimulation) => {
//   const results = [];

//   for (let i = 0; i < numSimulation; i++) {
//     const diceOne = rollDice();
//     const diceTwo = rollDice();
//     const sum = diceOne + diceTwo;

//     let result = "";

//     if (sum === 7 || sum === 11) {
//       result = "winner";
//     } else if (sum === 2 || sum === 3 || sum === 12) {
//       result = "loser";
//     } else {
//       result = "roll again";
//     }

//     results.push({ diceOne, diceTwo, sum, result });
//   }

//   return results;
// };

// const result = diceGameSimulation(10);
// console.table(result);

// 16. Write a function called formatPhoneNumber that takes in an
// array of numbers and returns a string representing
// the phone number formed by concatenating the numbers
// in the specified format.

// const formatPhoneNumber = (numbers) => {
//   const areaCode = numbers.slice(0, 3).join("");
//   const prefix = numbers.slice(3, 6).join("");
//   const lineNumber = numbers.slice(6).join("");

//   return `(${areaCode})-${prefix}-${lineNumber}`;
// };

// function formatPhoneNumber(numbers) {
//     const formatted = numbers.join('');
//     return `(${formatted.substring(0, 3)}) ${formatted.substring(
//       3,
//       6
//     )}-

// const result = formatPhoneNumber([9, 8, 9, 3, 7, 2, 1, 9, 2, 0]);
// console.log(result);
// (989) - 372 - 1920;

// 17. Write a function called validateEmail that takes in a
// string and returns whether the string is a valid email
// address. For the purposes of this challenge,
// a valid email address is defined as a string that contains an @
// symbol and a . symbol

// function validateEmail(email) {
//   if (email.indexOf("@") === -1) {
//     return false;
//   }

//   const [localPart, domain] = email.split("@");
//   if (localPart.length === 0 || domain.length < 3) {
//     return false;
//   }

//   const domainExtension = domain.split(".");

//   if (
//     domainExtension.length < 2 ||
//     domainExtension[domainExtension.length - 1].length < 2
//   ) {
//     return false;
//   }

//   return true;
// }

// const result = validateEmail("imran@gmail.com");
// console.log(result);

// 18.  Write a function called sumOfEvenSquares that takes an
// array of numbers and returns the sum of the
// squares of the even numbers in the array

// const sumOfEvenSquares = (numbers) => {
//   const evenSquares = numbers
//     .filter((num) => num % 2 == 0)
//     .map((num) => num ** 2);

//   return evenSquares.reduce((p, c) => p + c, 0);
// };

// const result = sumOfEvenSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

// 19.  Given a string of words, you need to find the highest
// scoring word. Each letter of a word scores points
// according to its position in the
// alphabet: a = 1, b = 2, c = 3, and so on.
// a. You need to return the highest scoring word as a string.
// b. If two words score the same, return the word that appears
// earliest in the original string.
// c. All letters will be lowercase and all inputs will be valid.

// const highestSchoringWord = (str) => {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     let score = 0;

//     for (let letter of word) {
//       score += letter.charCodeAt(0) - 96;
//     }

//     return score;
//   });

//   let highestScore = 0;
//   let highestIndex = 0;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i];
//       highestIndex = i;
//     }
//   }

//   return words[highestIndex];
// };

// const result = highestSchoringWord("my name is jatin");
// console.log(result);

// 20.  Write a function called validAnagrams that takes in two
// strings and determines whether they are valid
// anagrams of each other. An anagram is a word
// or phrase formed by rearranging the letters of
// a different word or phrase, typically using all
// the original letters exactly once.

// Recursion

// Recursion vs iteration
// At first glance, recursion and iteration (loops) seem to be very similar. They both can be used to solve the same
// problems, but there are some differences between them. There are also pros and cons to both.
// As we've established, recursion is a function that calles itself until a base case is met and solves a smaller version
// of the same problem, while iteration is just a block of code that is executed a specific number of times.
// When using recursion, you're adding function calls to the call stack and that takes up memory and can affect
// performance. Iteration doesn't because you aren't adding function instances. So that's one pro for iteration over
// recursion.
// However, recursion can really minimize the amount of code needed and can be a very elegant solution and
// minimize complex problems.
// Both recursion and iteration have their strengths and weaknesses, and the choice between them depends on the
// problem you're trying to solve and the code readability and efficiency you're aiming for.
// When to use which
// This really depends on the problem, the developer and many other factors, but in general:
// • Use recursion when the problem can be broken down into smaller instances of the same problem and you
// have a clear base case. Recursion is often used for problems that have a natural recursive structure, like
// traversing trees or finding combinations.
// • Use iteration when you need to repeat a block of code a specific number of times or until a condition is
// met. Iteration is generally simpler to implement and understand for simpler repetitive tasks.

// 21. Write a countDown function which takes
// number as an argument and return
// the reverse countdown to zero

// const countDown = (num) => {
//   // Base Case
//   if (num <= 0) {
//     console.log("All Done");
//     return;
//   }

//   // Recursive Case
//   console.log(num);
//   num--;
//   countDown(num);
// };

// countDown(10);

// const recur = () => {
//   recur();
// };

// recur();

// Recursive Unwinding
// 22. write a function name supUpTo which takes number as an argument and sum up all to 0

// function sumUpTo(n) {
//   if (n === 1) {
//     console.log(`sumUpTo(${n}) returns 1`);
//     return 1;
//   }

//   console.log(`sumUpTo(${n}) calls sumUpTo(${n - 1}) + ${n}`);
//   const result = n + sumUpTo(n - 1);
//   console.log(`sumUpTo(${n}) returns ${result}`);
//   return result;
// }

// const result = sumUpTo(5);
// console.log(result);

// 23. Write a function called reverseString that
// takes in a string and returns the reversed version
// of the string.
// Be sure to use recursion in your solution.

// const reverseString = (str) => {
//   if (str === "") {
//     return "";
//   }

//   console.log(str.substr(1) + str.charAt(0));

//   return reverseString(str.substr(1)) + str.charAt(0);
// };

// const reverseString = (str) =>
//   str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);

// const result = reverseString("cat");
// console.log(result);

// 24. Write a function called fibonacci
// that takes in a number and returns the number
// at that index of the Fibonacci sequence.
// function fibonacci(num) {

// const fibonacci = (num) => {
//   // Base Case
//   if (num < 2) return num;

//   // Recursive Case
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };

// const result = fibonacci(3);
// console.log(result);

// 25. Write a function called factorial
// that takes in a number and
// returns the factorial of that number.

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   console.log(num);
//   return num * factorial(num - 1);
// };

// const result = factorial(5);
// console.log(result);

// 26. Write a function called power that takes in a
// base and an exponent and returns the result
//  of raising the base to the power of the exponent.
// Use recursion to solve this problem.

// const power = (base, exponent) => {
//   if (exponent === 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// };

// const result = power(5, 2);
// console.log(result);

// 27 . Write a function called arraySum that takes
// in an array of numbers and returns
// their sum using recursion.

// const arraySum = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   } else {
//     return arr[0] + arraySum(arr.slice(1));
//   }
// };

// const result = arraySum([1, 2, 3, 4, 5]);
// console.log(result);

// 28. Write a function called flattenArray that
// takes in an array containing nested
// arrays of integers and returns a new array
// with all the integers from the
// nested arrays flattened into a single level.

// const flattenArray = (arr) => {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// };

// const result = flattenArray([1, [2, 3], [4, [5, 6]], 7]);
// console.log(result);

// 29. Write a function called permutations that
// takes in a string as a parameter and returns
// an array of all possible
// permutations of the characters in the string.

// 30. "Write a recursive function called
// numberRange that takes two numbers,
// startNum and endNum, and returns
// an array containing all numbers
// from startNum to endNum in sequential order."

// const numberRange = (startNum, endNum) => {
//   if (startNum === endNum) {
//     return [startNum];
//   }

//   const numbers = numberRange(startNum, endNum - 1);
//   numbers.push(endNum);
//   return numbers;
// };

// const result = numberRange(1, 10);
// console.log(result);

// Space Time Complexity

// 31. /*
// Example of constant time O(1)
// Constant time means that the time required to complete a
// function is the same regardless of the size of the input
// data set.
// */

// function accessElement(arr, index) {
//   return arr[index];
// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.time("Access Element 1");
// console.log(accessElement(arr1, 2));
// console.timeEnd("Access Element 1");

// const arr2 = Array.from({ length: 1000000 }, (_, index) => index + 1);

// console.time("Access Element 2");
// console.log(accessElement(arr2, 100));
// console.timeEnd("Access Element 2");

/*
  Linear Time O(n)
  32. Linear time means that the time required to complete a 
  function is directly proportional to the size of the input 
  data set.
*/

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const arr1 = [1, 2, 3, 4, 5];
// console.time("Sum Array 1");
// sumArray(arr1);
// console.timeEnd("Sum Array 1");

// const arr2 = Array.from({ length: 10000000 }, (_, index) => index + 1);

// console.time("Sum Array 2");
// sumArray(arr2);
// console.timeEnd("Sum Array 2");

/*
Quadradic Time O(n^2)
33 . Quadradic time means that the time required to complete a 
function is proportional to the square of the input data set.
*/

// function sumArray(arr) {
//   let sum = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       sum2 += arr[j];
//     }
//   }
//   return sum + sum2;
// }

// const arr1 = [1, 2, 3, 4, 5];
// console.time("Sum Array 1");
// sumArray(arr1);
// console.timeEnd("Sum Array 1");

// const arr2 = Array.from({ length: 100 }, (_, index) => index + 1);

// console.time("Sum Array 2");
// sumArray(arr2);
// console.timeEnd("Sum Array 2");

/*
Logarithmic Time (O(log n))

34. Logarithmic time means that the time required to 
complete a function is proportional to the logarithm 
of the input data set. 

*/

// function findPower(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }

//   if (exponent % 2 === 0) {
//     const halfPower = findPower(base, exponent / 2);
//     return halfPower * halfPower;
//   } else {
//     const halfPower = findPower(base, (exponent - 1) / 2);
//     return base * halfPower * halfPower;
//   }
// }

// console.time("Find Power 1");
// findPower(2, 100);
// console.timeEnd("Find Power 1");

// console.time("Find Power 2");
// findPower(2, 1000000000);
// console.timeEnd("Find Power 2");

// Maps

const nameMap = new Map([
  [1, "Priyanshu"],
  [2, "Jatin"],
  [3, "Yasir"],
  [4, "Gopal"],
]);

// console.log(nameMap);

const myFunc = () => {};
const emptyObj = {};

const map2 = new Map([
  ["name", "Kiran"],
  [1, "number one"],
  [true, "really true"],
  [myFunc, "empty function"],
  [emptyObj, "empty object"],
]);

// console.log(map2);

// Getting Values
// console.log(nameMap.get(1));
// console.log(map2.get(myFunc));
// console.log(map2.get(emptyObj));

// Setting Values
// nameMap.set(4, "Muskan");
// nameMap.set(5, "Ankita");

// console.log(nameMap);

// Check Values
// console.log(nameMap.has(1));
// console.log(nameMap.has(6));

// Deleting Values
// nameMap.delete(1);
// console.log(nameMap.has(1));

// Get Size
// console.log(nameMap.size);

// Iterating (for...of)
// for (let [key, value] of nameMap) {
//   console.log(key, value);
// }

// Using forEach
// nameMap.forEach((value, key) => {
//   console.log(key, value);
// });

// looping keys and values
// console.log(nameMap.keys());
// console.log(nameMap.values());

// clearing
// nameMap.clear();
// console.log(nameMap);
