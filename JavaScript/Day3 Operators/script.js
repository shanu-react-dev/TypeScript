//! Operators
//? Operators are predefined symbol which is used to perform some specific tasks based on operands.
/**
 * let a = 10;
let b = 15;
 */
//! arithmetic operators:- Mathematical Operations
//? Exponent operator
/**let res = a + b;
console.log(res);

res = a - b;
console.log(res);

res = a * b;
console.log(res);

res = a / b; // 10/15 =
console.log(res);

res = a % b; // remainder
console.log(res);

res = b ** a; // Exponent
console.log(res);

let num1 = 24;
let num2 = "90a";
console.log(num1 + num2); // 2490 in JavaScript arithmetic operator addition if any operand is string it will perform concatenation

// let isMarried = false;
let name = "shanu";
// console.log(isMarried + name);
console.log(Number(name));

console.log(num1 - num2); // 24 - 90=>66
console.log(num1 - name); // NaN
console.log(num1 * num2);

console.log(undefined + 19);
console.log("The conversion of undefined to number: ", Number(undefined));
console.log(undefined + "Shanu");
*/
//! Comparison operators:- comparison between two operands, return type boolean
//? < > <= >= == === != !==
let num1 = 10;
let num2 = "abc";
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 == num2); // data checking
console.log(num1 === num2); // data along with datatypes
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(undefined < 10);
console.log(undefined > 10);
console.log(10 < undefined);
//! Assignment operators:- Assign values to the operands or variables
let a = 10;
let b = 11;
a = a + b;
a += b;

//! Logical operators:- Used to group multiple operators
//! Unary operators: Usually it is used with only one operand
//! Ternary operators: Also known as conditional operator used to perform conditions
