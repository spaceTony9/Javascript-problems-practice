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

