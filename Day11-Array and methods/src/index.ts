let arr: (string | number)[] = [10, 20, 30, 40];
console.log(arr.length);

//! at is a array method and it acepts index as an argument and returns the value present at the specified argument. If there is no element it will return undefined.
let res = arr.at(10);
console.log(res);

//! concat
//? concat is an array method and it accepts another array or any other argument and it will be merging the array. It returns one new array with added data.
let res2 = arr.concat([25, 50, "Shanu"]);
console.log(res2);
res2 = arr.concat("Dummy Data");
console.log(res2);
console.log(arr);

//! find and findIndex
//? find and findIndex both are array methods and accepts one callback function as an argument find returns the matched value if it is not matched it will return undefined. findIndex will return the index of the matched value if the
let res3 = arr.find(function (ele) {
  return ele === "Shiva";
});

console.log(res3);
let res4 = arr.findIndex(function (ele) {
  return ele == 10;
});

console.log(res4);

//! findLast and findLastIndex
//? it is similar to find and findIndex both accepts one callback function and returns the last iteration of the value whereas findLastIndex will return the index of the last iteration of the value.
//! flat
//? flat is an array method and it accepts number as an argument it tells upto what level we need to flatten an array. If we want to flatten an array to the multi nested level we can pass Infinity as an argument.
let arr2 = [10, [20, 40, 80, ["Shanu", "Sailaja"], "Sanu", ["Shiva"]]];
let data = arr2.flat(Infinity);
console.log(data);

//! includes
//? includes is an array method and it accepts one argument if the specified argument is present inside an array it will return true else false.
// let arr3 = ["Shiva", "Sailaja", "Gauri", "Gokul", "Gyanvik"];
// let res5 = arr3.includes("Sailaja");
// console.log(res5);

let arr3 = ["Shiva", ["Shahil"]];
let data1 = arr3[1].includes("Shahil");
console.log(data1);

//! indexOf
//? It is an array method and it accepts element as an argument if the argunment is present it will return the index of the specified element if not then it will return -1
// let arr4 = ["Khushi", "Shraddha", "Laxmi", "Lalita"];
// let res6 = arr4.indexOf("Shanu");
// console.log(res6);

//! join
//? join is an array method and it accepts one argument, By default it will be converting the array into string format. It will accept one separator as an argument.
// let res7 = arr4.join("|");
// console.log(res7);
