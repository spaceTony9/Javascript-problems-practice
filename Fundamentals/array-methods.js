// Array methods
// splice: arr.splice(start[, deleteCount, elem1, ..., elemN])
// 1. Modifies the array

// slice - return a new array

// concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.

// But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead

// Iterate: forEach
// The arr.forEach method allows to run a function for every element of the array.

// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

// find and findIndex/findLastIndex

// filter 

// map

// Difference between forEach() and map() :
// forEach() doesn't create a new array; it operates on the existing array.
// map() creates a new array with transformed elements without modifying the original array.

// Array.isArray  It returns true if the value is an array, and false otherwise.

// A cheat sheet of array methods:

// To add/remove elements:

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.
// To iterate over elements:

// forEach(func) – calls func for every element, does not return anything.
// To transform the array:

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// Additionally:

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
// Please note that methods sort, reverse and splice modify the array itself.

// These methods are the most used ones, they cover 99% of use cases. But there are few others:

// arr.some(fn)/arr.every(fn) check the array.

// The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

// These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

// We can use every to compare arrays: