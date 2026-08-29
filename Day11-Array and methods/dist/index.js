"use strict";
// let arr: (string | number)[] = [10, 20, 30, 40];
// console.log(arr.length);
Object.defineProperty(exports, "__esModule", { value: true });
//! at is a array method and it acepts index as an argument and returns the value present at the specified argument. If there is no element it will return undefined.
// let res = arr.at(10);
// console.log(res);
//! concat
//? concat is an array method and it accepts another array or any other argument and it will be merging the array. It returns one new array with added data.
// let res2 = arr.concat([25, 50, "Shanu"]);
// console.log(res2);
// res2 = arr.concat("Dummy Data");
// console.log(res2);
// console.log(arr);
//! find and findIndex
//? find and findIndex both are array methods and accepts one callback function as an argument find returns the matched value if it is not matched it will return undefined. findIndex will return the index of the matched value if the
// let res3 = arr.find(function (ele) {
//   return ele === "Shiva";
// });
// console.log(res3);
// let res4 = arr.findIndex(function (ele) {
//   return ele == 10;
// });
// console.log(res4);
//! findLast and findLastIndex
//? it is similar to find and findIndex both accepts one callback function and returns the last iteration of the value whereas findLastIndex will return the index of the last iteration of the value.
//! flat
//? flat is an array method and it accepts number as an argument it tells upto what level we need to flatten an array. If we want to flatten an array to the multi nested level we can pass Infinity as an argument.
// let arr2 = [10, [20, 40, 80, ["Shanu", "Sailaja"], "Sanu", ["Shiva"]]];
// let data = arr2.flat(Infinity);
// console.log(data);
//! includes
//? includes is an array method and it accepts one argument if the specified argument is present inside an array it will return true else false.
// let arr3 = ["Shiva", "Sailaja", "Gauri", "Gokul", "Gyanvik"];
// let res5 = arr3.includes("Sailaja");
// console.log(res5);
// let arr3 = ["Shiva", ["Shahil"]];
// let data1 = arr3[1].includes("Shahil");
// console.log(data1);
//! indexOf
//? It is an array method and it accepts element as an argument if the argunment is present it will return the index of the specified element if not then it will return -1
// let arr4 = ["Khushi", "Shraddha", "Laxmi", "Lalita"];
// let res6 = arr4.indexOf("Shanu");
// console.log(res6);
//! join
//? join is an array method and it accepts one argument, By default it will be converting the array into string format. It will accept one separator as an argument.
// let res7 = arr4.join("|");
// console.log(res7);
//! keys
//? this is an array method and it does not accept any argument and returns one array like object with the indexes of the elements.
// let arr = [1, 2, 3, 4, 5];
// let data = arr.keys();
// console.log(data);
// for (let i of data) {
//   console.log(i);
// }
//!pop
//? pop is an array method and it does not accept any argument and returns the last element and it removes the last element from an array. It modifies the original arrya
// let removedEle = arr.pop();
// console.log("removed Element: ", removedEle);
// console.log(arr);
//! push
//? push is an array method and it accepts arguments to be added in the array. It returns the updated length of an array. It modifies the original array.
// let res = arr.push(100, 50, 23, 25);
// console.log(res);
// console.log(arr);
//! reverse
//? reverse method is an array method and reverse the order of the elements of an array. It will modify the original array.
// let res2 = arr.reverse();
// console.log(res2);
//! shift
//? shift is an array method and it removes the first element and returns it as an output. It will also not accept any argument. It will modify the original array.
// let res4 = arr.shift();
// console.log(res4);
//! unshift
//? unshift falls under array method and it accepts elements needs to be added in the exisiting array. It will modify the original array and returns the updated length of an array.
// let res3 = arr.unshift(7, 55, 17);
// console.log(res3);
// console.log(arr);
//! slice
//? slice is an array method and it accepts upto two arguments and returns the part of an array based on the specified argument it collects the elements from the start index to last index -1 and returns one new array with the collected elements.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let res = arr.slice(1, 4);
// console.log(res);
// res = arr.slice(1);
// console.log(res);
// res = arr.slice(-6, -1);
// console.log(res);
//! splice
//? splice is an array method and it can accept three or more arguments first is for start index, second argument is for deletecount and third arguments elements needs to be added at the position of deleted value. It modifies the original array.
// let data = arr.splice(1);
// console.log(data);
// console.log(arr);
// let data = arr.splice(1, 3);
// console.log(data);
// console.log(arr);
// let data = arr.splice(0, 1);
// data = arr.splice(6, 1);
// console.log(arr);
// let data = arr.splice(-1);
// console.log(data);
// let data = arr.splice(1, 1, 900);
// console.log(data);
// console.log(arr);
//! Advanced Array methods
//? Map :- transforms the array elements and returns one new array with same length.
//? Filter
//? Foreach
//? Reduce
let arr = [1, 2, 3, 4, 5, 6];
let res = arr.map((ele, index, array) => {
    // console.log(ele);
    return ele * ele;
});
console.log(res);
let res2 = arr.map((ele) => {
    if (ele % 2 === 0) {
        return ele;
    }
});
console.log(res2);
let filter = arr.filter((ele) => {
    if (ele % 2 === 0) {
        return ele;
    }
});
console.log(filter);
let data = arr.forEach((ele) => {
    console.log(ele);
    return "SHanu";
});
console.log(data);
let reducedArr = arr.reduce((acc, currEle, index, arrya) => {
    return acc + currEle;
});
console.log(reducedArr);
reducedArr = arr.reduce((acc, currEle, index, arrya) => {
    return acc + currEle;
}, 0);
console.log(reducedArr);
// let arr2 = [];
// let data2 = arr2.reduce((acc, currEle) => {
//   return acc + currEle;
// }, 0);
// console.log(data2);
//# sourceMappingURL=index.js.map