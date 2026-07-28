console.log("hii today we are going to learn Operators with typescript");
//! Operators
//? Operators are predefined symbol used to perform some specific tasks based on operands.
//! Arithmetic Operator
//? Arithmetic operators are used to  perform mathematical Expressions
// let a: number = 10;
// let b: string = "10";
// let c: undefined = undefined;
// console.log(a + b);
// console.log(a + c);
//todo In arithmetic operator in TypeScript or JS if we are using addition with any datatype along with string it will perform concatenation apart from this any datatype apart from string will throw error in TypeScript
//! Addition
let a = 10;
let b = "Shanu";
//? addition operator with string:- Any datatype with string will get concatenated except Symbol and bigint
/**
 * console.log(a + b);
 * let c = null;
 * console.log(b + c);
 * let d = undefined;
 * console.log(b + d);
 *
 * let arrOfFruits: string[] = ["guava", "pomegranate", "grapes", "orange"];
 * console.log(b + arrOfFruits);
 */
//? Addition operator with other data types
// let c = null;
// console.log(a + c);
// let d = undefined;
// console.log(a + d);
//! Subtraction
let res = b - a;
console.log(res);
res = isNaN(90);
console.log(res);
export {};
