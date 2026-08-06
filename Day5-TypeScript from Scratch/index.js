//! To run TypeScript file normally we use tsc filename.ts command. It generates one JavaScript file with same code whatever we have written in TypeScript. But even there is an error in TypeScript still it will generate JS file. To prevent this we can run the command tsc filename.ts --noEmitOnError
//? TypeScript is statically typed language it does not allow any other type of datatype once we have initialized with a specific one.
//! Type Inference
//? Type inference is the TypeScript compiler's ability to automatically determine and assign types to variables, function returns, and expressions without requiring explicit type annotations.
var a = 10; // the type if variable a will become number var a: number;
console.log(a);
var a = 12;
console.log(a);
// var a = "Shanu"; //This is not valid TypeScript code but in JS it is valid
var b = true; //var b: boolean
console.log(b);
let c = null; //let c: any :- any is a typescript special datatype
console.log(c);
c = true;
console.log(c);
c = false;
console.log(c);
c = "Shanu";
console.log(c);
c = 10;
console.log(c);
let d = true;
// d = 10 // Not valid because here the type of d is boolean and we are trying to assign number
//! Type Annotations
//? Type Annotations in TypeScript refers to assigning datatype of a variable explicitly so that any other datatype can't be assigned later on.
let userName;
userName = "Shanu";
console.log(userName);
// userName = 10;
let kids;
// let kids = null
kids = null;
//! Type annotations and inference with Non-Primitive Datatypes
//? array
let arr1 = [19, 20, 21, 22, 23];
console.log(arr1);
let arr2 = ["Shanu", "Sheela", "Shakeela", "Sharanya"];
console.log(arr2);
let arr3;
arr3 = ["Grapes", "Banana", "Papaya", "Litchi"];
console.log(arr3);
let arr4;
// arr4 = "Shanu";
// arr4 = 19;
// arr4 = [true];
arr4 = ["Shanu", 24, true];
console.log(arr4);
export {};
