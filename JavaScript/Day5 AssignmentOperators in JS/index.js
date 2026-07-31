//! assignment Operators in JS
//? Assignment operators is used to assign some values to the existing varaibles or new variables.

// let a = 10;
// let b = 20; //30
// // a = a + b;
// // a += b;

// b += a;
// console.log(a);
// console.log("Value of b", b);

// b %= a;
// console.log("Remainder of a and b:", b);

// let a = 10;
// let b = "2";
// a += b;
// console.log("Value of a:", a);
// b += a;
// console.log("Value of b: ", b);

// a = a % b;

//! logical Operator
//? Logical Operator helps to group two or more condtions together. It returns values based on the conditions or multiple values also.

// && Operator: It is used to combine myltiple comparison or any other operators or expressions even values if all values are truthy or if all expression returns truthy values then && operator will return the last value. Else it will return the falsy values

// let a = 10;
// let b = 20;

// let res = a > b && b > a; // false && true
// console.log(res); // false

// console.log(null && 19);
// console.log(19 && null);

// console.log(190 && "Shanu" && true);
// console.log(900 && "" && true);

//! || it is also known as OR operator and it searchs for the first truthy value if we got the first truthy  value it will not go for next iterations.

//! short Circuiting in JavaScript
//? This is a mechanism where the execution starts from left to right && operator will look for the first falsy value if it is ther it will return falsy value else it will return the last value
// console.log(null || 8);
// console.log(null || false);

// for (let i = 4; i >= 0; i--) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

//! NOT Operator: This is just used to make values vice versa means if any value is truthy value it will be converting into false boolean value. And if any value is falsy values it will be converting into true boolean value. It will always return boolean value

let isMarried = true;
console.log(!isMarried);

let age = 10;
console.log(!age);
let isLoggedIn = true;
console.log(!isLoggedIn);

let username = "Shanu";
console.log(!username);

let user = undefined;
console.log(!user);
