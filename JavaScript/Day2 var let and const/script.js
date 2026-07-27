//! console is an object and log is a method and it is used to show the output in console window. it is also known as printing statement.
console.log("Hii this is javaScript");

console.log(2 + 2);
console.log("Tamil Nadu is a great state.");

//! var vs let vs const
//? All of these three keywords in JavaScript used to declare the variables. all are having different behaviors

//! var is  a traditional way to create variables
var userName; // declaration
console.log(userName);
userName = "Shanu"; // initialization
console.log(userName);

var age = 19; // decalaration and intialization at the same time
console.log(age);

var userName; //redeclaration
console.log(userName); // shanu

userName = "Kumar"; //re initialization
console.log(userName);

var age = 20; // redeclaration and re initialization is possible
console.log(age);

//! let and const: These both keywords introduced in ES6 feature or version. It is used to prevent global pollutions

let a; // undefined
console.log(a);

a = "Hii this is Sundari";
console.log(a);
let num1 = 10;
console.log(num1);

// let a //!Uncaught SyntaxError: Identifier 'a' has already been declared
a = "hey folks this is shanu" // reinitialization is possible
console.log(a)

// const data
// data = "mydata"

const data = "data" //! only declaration and initialization at the same time is possible here
console.log(data)