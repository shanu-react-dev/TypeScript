//! Promise
//? Promise is an object in JavaScript and it represents eventual completion of a task. It has 3 phases pending, fulfilled and rejected.

// let data = fetch("https://api.github.com/users");
// console.log(data);

// let response = data.then((response) => {
//   console.log(response);
//   return response.json();
// });
// console.log(response);

// response.then((fdata) => {
//   console.log(fdata);
// });

// fetch("https://api.githu.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log("Promise has been completed just check with the result");
//   });

// function fetchData(stringURL) {
//   fetch(stringURL)
//     .then((data) => {
//       console.log(data);
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("Finally promise got completed");
//     });
// }

// fetchData("https://fakestoreapi.com/products");

//! creation of promise
let promise1 = new Promise((res, rej) => {
  let isAvailable = false;
  if (isAvailable == true) {
    res("Your promise got fulfilled");
  } else {
    rej("your promise got rejected");
  }
  console.log(res);
  console.log(rej);
});

console.log(promise1);
promise1
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
