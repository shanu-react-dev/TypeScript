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
isLoggedIn();

// let myFun = function myFunction() {
//   console.log(true, "From My Fun");
// };
// myFun();
// // myFunction();
// console.log(typeof myFun);

// let a = 19;
// let b = a;

//! anonymous
// let myFun = function () {
//   console.log("Hii this is anonymous function");
// };
// myFun();

//! function expression
//? A function which is stored inside a variable named as function expression.
// let myFun2 = function NamedFun() {
//   console.log("I am function Expression");
// };
// // NamedFun();
// myFun2();

// function demo() {
//   console.log("I am demo");
// }

// let myFun3 = demo;
// myFun3();
// demo();
//! IIFE Function
//? Immediately Invoked Function Expression: It is a function which is executed immediately after declaration. It is executed only once in the entire web page lifecycle.

// let a = 9;
// (function () {
//   console.log("I am an iife function");
// })();

// let a = (function () {
//   console.log("Hi this is IIFE");
//   return "Naveen";
// })();
// console.log(a);

//! Arrow
//? This is an ES6 feature where we can create a function without using function keyword.
// let a = () => "Shanu"; //Implicit return
// let retVal = a();
// console.log(retVal);
// let b = () => console.log("Hii I am a printing statement");
// let data = "hii";
// b();
// console.log(b());

// let c = () => {
//   let a = 10;
//   let b = 20;
//   return a + b; //! Explicit return
// };

// let res = c();
// console.log(res);
//! HOF
//? HOF stands for higher Order function and it accepts another function as an argument.
//! Callback
//? Callback function is a function which is passed as an argument.

// let a = (num1, num2) => {
//   let res = num1 + num2;
//   console.log(res);
// };

// a(7, 10);

// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log("It is even");
//     return true;
//   } else {
//     console.log("It is odd");
//     return false;
//   }
// }
// let retval = isEven(5);
// console.log(retval);

// function numberOfEven(start, end, checkeven) {
//   let count = 0;
//   // for (let i = start; i <= end; i++) {
//   //   if (i % 2 === 0) {
//   //     count++;
//   //   } else {
//   //     // console.log("nothing");
//   //   }
//   // }
//   // return count;
//   for (let i = start; i <= end; i++) {
//     checkeven(i) === true ? count++ : "";
//   }
//   console.log("The count of even number:", count);
// }
// let evenNumberCount = numberOfEven(50, 100, isEven);
// console.log(evenNumberCount);
// numberOfEven(50, 100, isEven);

//! Nested
//? A function created inside a function is known as nested function.
// function Child() {
//   console.log("I am child");
//   let a = 10;
//   function grandChild() {
//     console.log("I am Grandchild");
//   }
//   grandChild();
// }
// Child();
// console.log(a);
// grandChild();

// function Child() {
//   console.log("I am child");
//   function grandChild() {
//     console.log("I am GrandChild");
//     function demo() {
//       console.log("demo");
//     }
//     return demo;
//   }

//   return grandChild;
// }

// let receivedFun = Child();
// console.log(receivedFun());
// receivedFun();
//! Function currying
//? Currying is a functional programming technique in JavaScript that transforms a function with multiple arguments into a sequence of nesting functions, each taking a single argument.
// Child()()();
//! generator function

//? Generator function is a function in JS where we can pause the execution of the function and we can again start executing the function where we have paused.

// function demo() {
//   console.log("Taks one is done");
//   console.log("Taks two is done");
//   console.log("Taks three is done");
//   console.log("Taks four is done");
//   console.log("Taks five is done");
// }
// demo();

// function* generator() {
//   yield console.log("Taks one is done");
//   yield "Hii, Naveen";
//   yield console.log("Taks two is done");
//   yield console.log("Taks three is done");
//   yield console.log("Taks four is done");
//   yield "Last Task completed";

//   return "All tasks got completed";
// }
// let data = generator(); // generator Object
// console.log(data);
// data.next();
// let retVal = data.next();
// console.log(retVal);
// retVal = data.next();
// console.log(retVal);
// retVal = data.next();
// console.log(retVal);
// retVal = data.next();
// console.log(retVal);
// retVal = data.next();
// console.log(retVal);

// let exactVal = data.next();
// console.log(exactVal);

function demo(a, b) {
  return a - b;
}
let res = demo(10, null);
console.log(res);
