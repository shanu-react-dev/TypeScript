//! functions
//? Function is a block of reusable code and used to perform some specific tasks. It is reusable in nature. It can be used anywhere in the script as per need once after declaration
//? We can create a function using function keyword followed  by function name followed by parameter block followed by block of codes.

//! Named Function
//? A function declared along with name is known as Named Function. It is also known as Function definition, or Function declaration

// function sum() {
//   let a = 10;
//   let b = 100;
//   let res = a + b;
//   console.log(res);
// }
// sum();

// function calCulateAge(): number {
//   let birthYear = 2003;
//   let currentYear = 2026;
//   let age = currentYear - birthYear;
//   return age;
// }

// let res = calCulateAge();
// console.log(res);

// function projectType() {
//   let duration = "45days";
//   let deadline = " testedBy " + "Duration";
//   return deadline;
// }
// let res2 = projectType();
// console.log(res2);

// type FUNCTION = () => number;

// type sum = {
//   (a: number, b: number): number;
// };

// let data: sum = (a, b) => a + b;
// let res5 = data(12, 34);
// console.log(res5);

// type sub = {
//   (a: number, b: number): number;
// };

// let mySubtraction: sub = function (a, b): number {
//   return a - b;
// };

// let data = mySubtraction(10, 20);
// console.log(data);

//! Function Type
// type FUNCTION = {
//   (a: number, b: number, c: number): number;
// };

// let SumOfTwoArgs: FUNCTION = function (a, b, c) {
//   return a + b + c;
// };

// let res = SumOfTwoArgs(10, 89, 90);
// console.log(res);

//! Function Types in TypeScript
//todo 1. Named Function
//todo 2. Anonymous Function
//? Any function without any name is known as anonymous function. It is also known as Unknown Function. It can be used as passing as an argument.
// function () {
//   console.log("I am Dabba Function")
// }
//todo 3. Function Expression
//? Function expression refers to a function which is stored inside a variable.
// let myFun = function () {
//   console.log("Hii this is one dabba function");
// };
// myFun();

// let func2 = function Demo() {
//   console.log("Hii this is Dabba with Named as Demo");
// };
// func2();
//todo 4. IIFE Function
//? IIFE stands for Immediately Invoked Function Expression, It is a function which will be executed just after declaration. We don't need to call it manually. It will be executed only once in the entire webpage lifetime.
//Syntax:  (declaration)(execution)
// (function (a: number, b: number) {
//   console.log(a + b);
//   console.log("I am an IIFE function");
// })(10, 20);

//todo 5. Arrow Function
//todo 6. Higher Order Function
//todo 7. Callback Function
//todo 8. Nested Function
//todo 9. Function Currying
//todo 10. Generator Function

// let a = 10;
// let b = undefined;
// console.log(a + b);

//! function
// function demo(a: number, b: number) {
//   return a + b;
// }
// let res = demo(10, 50);
// console.log(res);

// function fullName(fName: string, lName: string): number | string {
//   // return "Shanu";
//   console.log(fName + " " + lName);
//   return fName + lName;
// }
// let data = fullName("Shanu", "Singh");
// console.log(data, "Returned from the function");

//! FUNCTION type using type keyword

// type FUNCTYPE = {
//   (a: number, b: number): number;
// };

// let mySumFun: FUNCTYPE = function (a, b) {
//   console.log("The sum of given Numbers", a + b);
//   return a + b;
// };
// let res = mySumFun(20, 40);
// console.log("The returned value from function", res);

// let userName = "amarjeet";
// function countOfa(userName: string): number {
//   let count: number = 0;
//   for (let i = 0; i < userName.length; i++) {
//     if (userName[i] === "a") {
//       count += 1;
//     }
//   }
//   return count;
// }
// let a_Count = countOfa("kiruthikaa");
// console.log(a_Count);

// function repetitionOfLetter(word: string, letter: string): number {
//   let count: number = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// let count = repetitionOfLetter("swapna sundari", "a");
// console.log(count);

// function isPalindrome(word: string): boolean {
//   let str = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     // console.log(word[i]);
//     str = str + word[i];
//   }
//   console.log(str);
//   if (str === word) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let palindRes = isPalindrome("malayalam");
// console.log(palindRes);

//! Anonymous Function
//? Anonymoius function generally used in passing arguments to another function such as higher order function or callback function or in other methods such as array methods or Object methods.
// let myFunc = function () {
//   //! storing a function inside a variable known as function expression
//   let a = 10;
//   let b = 20;
//   console.log(a + b);
// };
// myFunc();

//! IIFE function
//? IIFE stands for Immediately Invoked Function Expression and it is a function which will be executed just after declaration. It executes only once in the entire webpage lifecycle.

// let data = (function (a: string) {
//   console.log(`Hii ${a}`); //! string interpolation
//   console.log("This is an IIFE function");
//   // return a.toUpperCase();
// })("Shanu");

// console.log(data);

//! Arrow Function
//? Arrow function is an ES6 feature is a shorthand function used to create a function without using function keyword.
//syntax: () =>

// let arrowFunc = () => console.log("This is an arrow function"); //! implicit return
// arrowFunc();

// let arrowFunc2 = () => {
//   console.log("This is arrow function 2"); //! explicit return
//   console.log("hii this is the second statement");
// };
// arrowFunc2();
// arrowFunc2();

// let arrowFunc3 = () => "Shanu";
// let retVal = arrowFunc3();
// console.log(retVal);

// let arrowFunc4 = () => {
//   return "Shanu Kumar Singh";
// };

// let retVal2 = arrowFunc4();
// console.log(retVal2);

//! higher Order Function and Callback Function
//? HOF stands for Higher Order Function and it is a function which accepts another function as an argument. Callback function is a function which is passed as an argument.
// let HigherOrderFunc = (calculateAge: Function) => {
//   let currYear = 2026;
//   // console.log(calculateAge);
//   calculateAge(currYear);
// };

// let myFunc = (currYear: number) => {
//   let dob = 2003;
//   let currAge = currYear - dob;
//   console.log(currAge);
// };

// HigherOrderFunc(myFunc);

//! nested function
//? A function is declared inside a function is known as nested function
// function parent() {
//   console.log("I am Parent");
//   function child() {
//     console.log("I am child");
//     function grandChild() {
//       console.log("I am grand child");
//     }
//     grandChild();
//   }
//   return child;
// }

// let res = parent();
// console.log(res);
// res();
//! Function currying
//? Function currying is a mechanism by which we cna call a returned function directly using one extra parantheses just after calling the outer function.
//? Currying is a functional programming technique that transforms a function taking multiple arguments into a sequence of nested functions, each accepting exactly one argument.
// parent()();

//! closures
//? closures is a special technique or feature of JS where an inner function can be able to accept outer function variables even after execution of parent function or outer function.

// function parent() {
//   let amt = 5000;
//   console.log(`Amount from parent function ${amt}`);
//   function child() {
//     let receivedAmt = amt;
//     console.log(`Amount received: ${receivedAmt}`);
//   }
//   return child;
// }

// let data = parent();
// console.log(data);
// data();

//! Generator Function
// function* demo() {
//   yield console.log("First statement");
//   yield console.log("Second statement");
//   console.log("Third statement");
//   console.log("Fourth statement");
//   return "This is Generator function";
// }

// let data = demo();
// console.log(data);
// let retVal = data.next();
// console.log(retVal);
// retVal = data.next();
// console.log(retVal);
// retVal = data.next();
// console.log(retVal);

function* groupOfFunc() {
  yield function () {
    console.log("First Function");
    return "First Function Executed";
  };

  yield () => "Shanu";

  return "Generator function got completed";
}

let data = groupOfFunc();
console.log(data);

let a = data.next();
console.log(a.value());

data.next();
let retval = data.next();
console.log(retval);

// let data = groupOfFunc();
// console.log(data);
// let res = data.next();
// console.log(typeof res.done);
// res.value();

// res = data.next();
// console.log(res.value());
