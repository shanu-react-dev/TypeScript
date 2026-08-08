//! Non-Primitive DataType
//? Non-Primitve DataTypes are multi value or reference based datatypes in JavaScript or TypeScript. It is mutable in nature means we can modify the data inside our non-primitive datatype.
//? In TypeScript or JS we have three Non-Primitive Datatypes
//! Array
//? Array is a continuous block of memory where data are stored in the form of indexes (positions of elements.).  Indexes are the position and it starts from 0 and go upto infinite positive value. It can't be negative.
let arr = [10, 11, 15, 12]; // Array literals
console.log(arr);
let arr2 = Array(10, 11, 12, 14);
console.log(arr2);
let arr3 = new Array("Earth", "Mars", "Jupiter", "Saturn");
console.log(arr3);
let arr4;
arr4 = [true];
let arr5;
arr5 = [17, true];
let arr6;
arr6 = ["Shanu", "Naveen", "Kirthika"];
console.log(arr6);
arr6 = {
    userName: "Shanu",
    age: 24,
};
console.log(arr6);
//! object
//? Object is a non-primitive datatype and it stores multiple values in the form of key and value pairs.
let obj1 = {
    userName: "Shanu",
    age: 24,
    id: 1,
};
console.log(obj1);
let obj2;
obj2 = {
    empName: "Shanu",
    empId: "1234a",
    isExperienced: true,
};
// obj2.isMarried = true;
// console.log(obj2);
let obj3;
obj3 = {
    category: "clothes",
    gender: "female",
    id: 10,
    color: "fuchsia",
    isAvailable: true,
    address: {
        temporaryAddress: {},
        permanentAddress: {},
    },
};
console.log(obj3);
let nestedArr;
nestedArr = [[19], [20], ["Shanu"]];
console.log(nestedArr);
export {};
