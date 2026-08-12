//! Non-Primitive DataType
//? Non-Primitve DataTypes are multi value or reference based datatypes in JavaScript or TypeScript. It is mutable in nature means we can modify the data inside our non-primitive datatype.
//? In TypeScript or JS we have three Non-Primitive Datatypes

//! Array
//? Array is a continuous block of memory where data are stored in the form of indexes (positions of elements.).  Indexes are the position and it starts from 0 and go upto infinite positive value. It can't be negative.
// let arr = [10, 11, 15, 12]; // Array literals
// console.log(arr);
// let arr2 = Array(10, 11, 12, 14);
// console.log(arr2);
// let arr3 = new Array("Earth", "Mars", "Jupiter", "Saturn");
// console.log(arr3);

// let arr4: boolean[];
// arr4 = [true];

// let arr5: (number | boolean)[];
// arr5 = [17, true];

// let arr6: object;
// arr6 = ["Shanu", "Naveen", "Kirthika"];
// console.log(arr6);

// arr6 = {
//   userName: "Shanu",
//   age: 24,
// };
// console.log(arr6);

//! object
//? Object is a non-primitive datatype and it stores multiple values in the form of key and value pairs.
// let obj1 = {
//   userName: "Shanu",
//   age: 24,
//   id: 1,
// };
// console.log(obj1);

// let obj2: {};
// obj2 = {
//   empName: "Shanu",
//   empId: "1234a",
//   isExperienced: true,
// };
// obj2.isMarried = true;
// console.log(obj2);

// let obj3: {
//   category: string;
//   gender: string;
//   id: number;
//   color: string;
//   isAvailable: boolean;
//   address: {
//     permanentAddress: {};
//     temporaryAddress: {};
//   };
// };
// obj3 = {
//   category: "clothes",
//   gender: "female",
//   id: 10,
//   color: "fuchsia",
//   isAvailable: true,
//   address: {
//     temporaryAddress: {},
//     permanentAddress: {},
//   },
// };
// console.log(obj3);

// let nestedArr: (number | object)[];
// nestedArr = [[19, 20], [20]];
// console.log(nestedArr);

//! Nested array and objects
// let arrOfObj: {
//   username: string;
//   age: number;
//   address: {
//     streetName: string;
//     houseNumber: number;
//     pinCode: number;
//   };
//   isAvailable: boolean;
// }[];

// arrOfObj = [
//   {
//     username: "Shanu",
//     age: 24,
//     address: {
//       streetName: "4th cross",
//       houseNumber: 39,
//       pinCode: 600075,
//     },
//     isAvailable: true,
//   },

//   {
//     username: "Sundari",
//     age: 21,
//     address: {
//       streetName: "2nd main",
//       houseNumber: 4,
//       pinCode: 600075,
//     },
//     isAvailable: false,
//   },
// ];
// console.log(arrOfObj);

//! Push is an array method and it helps us to add the specified elements at the last index.
// arrOfObj.push(
//   {
//     username: "Stark",
//     age: 46,
//     address: {
//       streetName: "2nd main",
//       houseNumber: 1,
//       pinCode: 123456,
//     },
//     isAvailable: false,
//   },
//   {
//     username: "Peter",
//     age: 28,
//     address: {
//       streetName: "2nd main",
//       houseNumber: 12,
//       pinCode: 654321,
//     },
//     isAvailable: true,
//   },
// );
// console.log(arrOfObj);

// arrOfObj.push({
//   username: "Thanos",
//   age: 1000,
//   address: {
//     streetName: "2nd main",
//     houseNumber: 1,
//     pinCode: 123456,
//   },
//   isAvailable: false,
// });

// let statusCode: {
//   pageNotFound: 400;
//   serverError: 500;
//   Created: 201;
//   Success?: 200;
// };

// statusCode = {
//   pageNotFound: 400,
//   serverError: 500,
//   Created: 201,
// };

//! Array inside an object
// let obj1: {
//   studentId: number;
//   studentName: string;
//   skills: string[];
// };

// obj1 = {
//   studentId: 123,
//   studentName: "Shanu",
//   skills: ["JavaScript", "TypeScript", "React", "Node", "Mongo"],
// };

// console.log(obj1);

//! type keyword
type UserData = {
  username: string;
  age: number;
  gender: string;
};

let user1: UserData = {
  username: "Suman",
  age: 12,
  gender: "male",
};

type isMarried = boolean;
let user1MaritalStatus: isMarried = true;
console.log(user1MaritalStatus);

type arrOfFruits = string[];
let fruitData: arrOfFruits = ["pomegranate", "Mango", "PineApple", "Litchi"];
console.log(fruitData);
export {};
