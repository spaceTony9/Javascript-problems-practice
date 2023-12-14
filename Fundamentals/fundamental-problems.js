// using Math.min function The first version, using Math.min() with the spread operator (...), works by leveraging the Math.min() function, which normally accepts a list of arguments and returns the smallest value among them. However, Math.min() doesn't directly accept an array as an argument; it expects individual values.
// The spread operator (...) comes into play here. When used with an array, it "spreads" its elements into individual values, allowing them to be passed as arguments to functions or constructors that accept multiple arguments.

// using Math.min operator
// function findSmallestValue(args) {
//   return Math.min(...args);
// }

// console.log(findSmallestValue([78, 56, 232, 12, 8]));
// console.log(findSmallestValue([78, 56, 232, 12, 228]));
// console.log(findSmallestValue([78, 56, 232, 412, 228]));

// Loop

// function findSmallestValue(args) {
//   let smallestNumber = args[0]; // create variable with assuming 1 item is the smallest
//   for (let i = 0; i < args.length; i++) {
//     // iterate through every item in array
//     if (args[i] < smallestNumber) {
//       smallestNumber = args[i];
//     }
//   }
//   return smallestNumber;
// }

// Sorting array and returning index 0 - the smallest value. Poor perfomance.

// function findSmallestValue(args) {
//     // sorting values in ascending order.
//     return args.sort((a, b) => a - b)[0];
// }

// find the value in the array.

// Method includes()

// function check(a, x) {
//     return a.includes(x);
//     // includes() return true or false
// }

// function check(a, x) {
//     if (a.includes(x)) {
//         return true;
//     }
//     return false;
// }
// less effective version since includes return true or false

// sheep counter

// var countSheep = function (num) {
//   //your code here
//   let count = "";
//   for (let i = 0; i < num; i++) {
//     count += `${i + 1} sheep...`;
//   }
//   return count;
// }

// iterate through every object in the array, and return the value of the correct key. Function takes key name as an argument

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const finalArray = [];
//   for (const keys of products) {
//     // console.log(keys);
//     const arrayOfKeys = Object.keys(keys);
//     if (arrayOfKeys.includes(propName)) {
//       finalArray.push(keys[propName]);
//     }
//   }
//   return finalArray;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));

// funtion takes the string and returns middle character if its odd, when round returns 2 middle characters,
// function getMiddle(s) {
//   //Code goes here!
//     let a = s.split("");
//     const b = Math.round(a.length / 2 - 1);
//     if (a.length % 2 === 0) {
//         return String(a.slice(b, b + 2)).replaceAll(',', '');
//     }
//     return s[b];
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));

// optimised version of the previous problem
// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// s.substr(startIndex, length): This function extracts a part of a string, starting from startIndex and going up to the specified length.

// function openOrSenior(data) {
//   // ...
//   const resultArray = [];
//   for (const keys of data) {
//     if (keys[0] >= 55 && keys[1] > 7) {
//       resultArray.push("Senior");
//     } else {
//       resultArray.push("Open");
//     }
//   }
//     return resultArray;
//   //   console.log(arguments);
// }

// function openOrSenior(data) {
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? "Senior" : "Open"));
// }

// Map method iterates through every object in the array and applies the function to that element

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

// receiving an array of numbers. pROGRAMM ITERATES FROM THE LOVEST TO HIGHEST AND SUMS THE VALUES INBETWEEN
// (max - min + 1) * (min + max) / 2 computes the sum of integers within the range using a formula known as the arithmetic series sum formula, which is (count of integers) * (sum of first and last term) / 2.

// function getSum(a, b) {
//   //Good luck!
//   const highestInt = Math.max(a, b);
//     const smallestInt = Math.min(a, b);
//     highestInt === smallestInt ? highestInt : smallestInt;
//   const totalSum = [];
//   for (let i = smallestInt; i < highestInt + 1; i++) {
//       totalSum.push(i);
//   }
//     console.log(totalSum);
//   return totalSum.reduce((a, b) => a + b);
// }

// // console.log(getSum(0, -1));
// console.log(getSum(-1, -1));

// function boolToWord(bool) {
//     //...

//   return (bool) ? "Yes" : "No";
// }

// console.log(boolToWord(true));

// finds the 2 smallest integers in the array and sums them

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//     let total = 0;
//     for (let i = 0; i < 2; i++) {
//         let smallestInt = Math.min(...numbers),
//             indexOfsmall = numbers.indexOf(smallestInt);
//         numbers.splice(indexOfsmall, 1);
//         total += smallestInt;
//     }
//   return total;
// }

// sorts the array from smallest to highest number and sums 2 first

// function sumTwoSmallestNumbers(numbers) {
//     //Code here
//     numbers = numbers.sort((a, b) => a - b);
//   return numbers[0] + numbers[1];
// }

// console.log(sumTwoSmallestNumbers([5, 11, 12, 19, 22]));

// code counts all the postitive integers and sums all negative. Return Array of positive counter and sum of negative.

// function countPositivesSumNegatives(input) {
//   // your code here
//   if (input === null || input.length === 0) {
//     return [];
//   }
//   let positiveCounter = 0,
//     negativeSum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       positiveCounter++;
//     } else if (input[i] < 0) {
//       negativeSum += input[i];
//     }
//   }
//   return [positiveCounter, negativeSum];
// }

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter((a) => a > 0).length, input.filter((b) => b < 0).reduce((a, b) => a + b, 0)] : [];
// }
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives([]));
// console.log(countPositivesSumNegatives([null]));

// convert number to string, make an array from the string and put to square each number in the string

// function squareDigits(num) {
//   num += "";
//   num = num
//     .split("")
//     .map((number) => number * number)
//     .join("");
//   return Number(num);
// }

// console.log(squareDigits(4343));

// function isIsogram(str) {
//     //...
//     str = str.split('');
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j < str.length; j++) {
//           if (str[i] === str[j]) {
//               return false;
//         }
//       }
//     }
//     return true;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => (number > value ? filteredNumbers.push(number) : []));

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// console.log("hello world");


// function changeEven(numbers, value) {
//   const finalArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       finalArray.push(numbers[i] + value);
//     }
//     else {
//       finalArray.push(numbers[i]);
//     }
//   }
//   return finalArray;
// }


// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); 
// // [12, 18, 3, 7, 14, 16]`


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

  console.log(names);