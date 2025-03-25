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
