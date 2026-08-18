"use strict";
//! functions
//? Function is a block of reusable code and used to perform some specific tasks. It is reusable in nature. It can be used anywhere in the script as per need once after declaration
//? We can create a function using function keyword followed  by function name followed by parameter block followed by block of codes.
Object.defineProperty(exports, "__esModule", { value: true });
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
function fullName(fName, lName) {
    // return "Shanu";
    console.log(fName + " " + lName);
    return fName + lName;
}
let data = fullName("Shanu", "Singh");
console.log(data, "Returned from the function");
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
function isPalindrome(word) {
    let str = "";
    for (let i = word.length - 1; i >= 0; i--) {
        // console.log(word[i]);
        str = str + word[i];
    }
    console.log(str);
    if (str === word) {
        return true;
    }
    else {
        return false;
    }
}
let palindRes = isPalindrome("malayalam");
console.log(palindRes);
//# sourceMappingURL=index.js.map