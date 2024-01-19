// What is "THIS" in object context?
// When "THIS" is being defined with regular function? With arrow function?

// Usual function
// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// Arrow function
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();

// This Strict and not Strict modes?

// function foo() {
//   console.log(this);
// }

// foo(); // window

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo(); // undefined

// Call method

// foo.call(thisArg, arg1, arg2, ...)

// Method Bind?

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName);

// Prototypes

// Object.create(obj);

// lowest level prototype?

// const obj = { 
//     name: "Roger"
// }

// Is this a deep copy of array?

// let array = [14, -4, 25, 8, 11];
// let arrayCopy = [...array];
// console.log(arrayCopy);
