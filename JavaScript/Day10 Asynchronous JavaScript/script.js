//! Asynchronous JavaScript

//? Asynchronous JavaScript is a feature of JavaScript where JavaScript will allow to run the code in Non-blocking manner. We can perform asynchronous JavaScript in various ways
//! Timer function or callback function
//? setTimeout(): It allows us to run a certain block of code after a certain period of time. It accepts one callback function and duration in millisecond as an argument.

//? setInterval(): It allows you to run the block of code again and again after a certain period of time. It also accepts one callback function and duration as an argument.
//Syntax: setTimeout(function() {console.log("hello Sundari")}, 1000)
console.log("Hiii");

// setTimeout(function () {
//   for (let i = 0; i <= 100000; i++) {
//     console.log("I am Shanu");
//   }
// }, 5000);

// setTimeout(() => {
//   console.log("Hii this is Shanu");
// }, 5000);

// console.log("Hello");

// setInterval(() => {
//   console.log("Hii this is Interval");
// }, 4000);

let count = document.querySelector(".count");
let increment = document.querySelector(".increment");
console.log(count);
// console.log(increment);

let interval;
increment.onclick = function () {
  //   console.log("Shanu");
  interval = setInterval(() => {
    count.innerText = Number(count.innerText) + 1;
  }, 1000);
};

let stoptimer = document.querySelector(".stop");
// console.log(stoptimer);

// stoptimer.onclick = function () {
//   clearInterval(interval);
// };

stoptimer.addEventListener("click", (e) => {
  //   console.log(e);
  clearInterval(interval);
});

function printName() {
  console.log("Shanu");
}
