//! Conditional Statements in JavaScript
//? A conditional Statement is used to get the desired output based on certain conditions. In JavaScript we can perform conditional statements in various ways as follows
//? if: - This is also known as true statement and it will execute the block of codes only if the condition is true else it will not execute

//? if else: Here will have two blocks if is for true block and else is for false block it will executed if the condition is false.
//Syntax:  if(condition){}
let age = 41;
// if (age >= 18) {
//   console.log("you are adult");
// } else {
//   console.log("You are below 18");
// }

//? else if ladder: This allows you to check multiple conditions
// if (age > 0 && age <= 5) {
//   console.log("you are a kid");
// } else if (age > 5 && age <= 18) {
//   console.log("You are a teenage");
// } else if (age > 18 && age <= 40) {
//   console.log("You are an adult");
// } else if (age > 40 && age <= 70) {
//   console.log("you are an old");
// } else {
//   console.log("Human does not exist");
// }

//! Nested If Else
// if (age >= 18) {
//   console.log("yes you're eligible, Go for the physical test");
//   let isFit = true;
//   if (isFit == true) {
//     console.log("You're fit, so you can go for driving test");
//     let isPassed = false;
//     if (isPassed == true) {
//       console.log("Here is your license");
//     } else {
//       console.log("You don't know driving first learn then come back");
//     }
//   } else {
//     console.log("You're not fit so get fit physically first");
//   }
// } else {
//   console.log("You are under age so you can't get now");
// }

//! switch
//? it is also a conditional statement and it shows the values or print the statements based on cases.

// let day = 5;
// switch (
//   day // day === 1
// ) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Weekend started saturday");
//     break;
//   case 7:
//     console.log("Sunday means fun day");
//     break;
//   default:
//     console.log("Invalid date");
// }

//! Loops
//? It is a control flow statement and it executes a block of code for multiple times based on certain conditions. It will execute a block of code continuously until the condition gets false.
//! In JS we have multiple loops as follows
//? 1. while
//? 2. do while
//? 3. for
//? 4. for in
//? 5. for of

//! while loop
//? syntax while(condition){}
// let isLoggedIn = true; //false
// while (isLoggedIn == true) {
//   console.log("Hii I have logged in in the account!!");
//   isLoggedIn = !isLoggedIn;
// }

// let num = 0;
// while (num <= 10) {
//   //   console.log(num);
//   if (num == 0) {
//     console.log("Exception");
//   } else if (num % 2 == 0) {
//     console.log(num);
//   }
//   num += 1;
// }

//! do while
//? This loop runs at least once even the condition is false

// let isWork = true;
// do {
//   console.log("I will do the work");
//   isWork = !isWork;
// } while (isWork == true);

// for(initialization, condition, updation){
//   codeblock
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= -10; i--) {
//   console.log(i);
// }

// let str = ""; // '*', '**'
// for (let i = 0; i < 4; i++) {
//   str += "*";
//   console.log(str);
// }

// for (let i = 4; i >= 1; i--) {
//   let str = "";
//   // console.log(str);
//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }
// let n = 4;
// for (let i = 0; i <= n; i++) {
//   let str = "";
//   for (let j = i; j >= 0; j--) {
//     if (i + j < n) {
//       str += " ";
//     } else {
//       str += "* ";
//     }
//   }
//   console.log(str);
// }

// for (let i = n; i >= 0; i--) {
//   let str = "";
//   for (let j = i; j >= 0; j--) {
//     if (i + j >= n) {
//       str += "  ";
//     } else {
//       str += " *";
//     }
//   }
//   console.log(str);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 0; j <= n; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

