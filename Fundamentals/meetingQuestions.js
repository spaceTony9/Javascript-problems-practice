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

// lowest level prototype? = Null

// const obj = { 
//     name: "Roger"
// }

// Is this a deep copy of array?

// let array = [14, -4, 25, 8, 11];
// let arrayCopy = [...array];
// console.log(arrayCopy);

// What is constructor() function in classes? What is initializing of an class instance?
// class User {
//   constructor() {
//     // ...
//   }
// }

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const roger = new User("Roger", "Roger@gmail.com");
// console.log(roger);

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
// 	// Тіло класу ContentEditor
// }
// const admin = new User({email: "usermail@mail.com"})
// console.log(admin.email);

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"


// Immutability we operate with new data not with data that we know. 
// Object copying - spread operator. Nested objects when copying? 

// For in cycle in Objects.

// Wrapper objects.

// Object entries

// Objet key is always string or symbol. 

// Object methods - 

// Anonimous functions are arrow functions
// Arrow function has no own this, no object arguments, con not be used as a constructor. 