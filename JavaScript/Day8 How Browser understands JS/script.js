console.log("Hii this is Shanu");

console.log(a); //! Due to hoisting we can access global variable before its declaration or initialization.
//? Hoisting is a mechanism where elements will be moved to the top of their current scope.
var a = 10; //! Global by default:- Any variable which is in Global scope by default it will have the value as undefined

//! Named Function will also have global scope by default

console.log(a); // 10
let b = "Sandeep"; //! Script Scope:- You can't access the variable before initialization
console.log(b); //Sandeep
const c = "China";
console.log(c); //China

//! Block Scope: Any variable declared using let and const inside conditional statements or Loops will follow Block Scope. And It can be accessible inside the block only. It can't be accessed outside of the block.
// if (true) {
//   var a = "Shalini";
//   console.log(a); //Shalini
//   let b = "Sandhya";
//   console.log(b); //Sandhya
//   const c = "Shalu";
//   console.log(c); //Shalu
// }
// console.log(a); //Shalini
// console.log(b); //Sandhya
// console.log(c); //Shalu

demo();
function demo() {
  console.log(a); //! undefined
  //   var a = "Sharanya";
  //   console.log(a);
  let b = "Naveen";
  console.log(b);
  const c = "Kirthika";
  console.log(c);
}
console.log(a); //10
console.log(b); //
console.log(c);
// console.log(a);

//! Scope in JavaScript
//? Scope represents the visibility or accessibility of a variable. Means where a variable can be accessed.
//? There are three scopes in JavaScript 1. Global 2. Block 3. Function or Local Scope

// console.log(a); //undefined
// var a = 10;
// console.log(a);
// // console.log(b);
// let b = "Shanu";
// console.log(b);
