// using Math.min function The first version, using Math.min() with the spread operator (...), works by leveraging the Math.min() function, which normally accepts a list of arguments and returns the smallest value among them. However, Math.min() doesn't directly accept an array as an argument; it expects individual values.
// The spread operator (...) comes into play here. When used with an array, it "spreads" its elements into individual values, allowing them to be passed as arguments to functions or constructors that accept multiple arguments.
function findSmallestValue(args) {
    return Math.min(...args);
}


console.log(findSmallestValue([78, 56, 232, 12, 8]));
console.log(findSmallestValue([78, 56, 232, 12, 228]));
console.log(findSmallestValue([78, 56, 232, 412, 228]));

// Loop

// function findSmallestValue(args) {
//     let smallestNumber = args[0];  // create variable with assuming 1 item is the smallest
//     for (let i = 0; i < args.length; i++) { // iterate through every item in array
//         if (args[i] < smallestNumber) { 
//             smallestNumber = args[i];
//         }
//     }
//     return smallestNumber;
// }