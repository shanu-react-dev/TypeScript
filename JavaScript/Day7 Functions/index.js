//! Functions
//? Functions are a block of reusable codes which is used to perform some specific tasks. It can be used anywhere in the file once after declaration.

//? we can declare a function using function keyword followed by function name followed by parameter block and followed by code block

// Syntax: function functionName () {}
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// function demo() {
//   console.log("Hii this is Demo");
// }
// let retVal = demo(); //! Function calling or invocation
// console.log(retVal);
//! Named Function

function isLoggedIn() {
  console.log(true);
  return true;
}

// if (isLoggedIn() == true) {
//   console.log("You are logged in");
// }

let data = isLoggedIn;
data();

let a = 19;
let b = a;

//! anonymous
//! function expression
//! IIFE Function
// Arrow
// HOF
// Callback
// Nested
// Function currying
//generator function
