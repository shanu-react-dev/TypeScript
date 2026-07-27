let a = 10;
console.log(a); //10
// a = "Shanu";
// console.log(a);
let b;
b = "shanu";
// b = 10;
console.log(b);
let c;
c = true;
// c = 10
let d;
d = null;
let username = "Kirthika";
console.log(username);
let arrOfData = ["Apple", "banana", "Coconut"];
console.log(arrOfData);
let arrOfAge = [19, 24, 56];
let arrOfBool = [true, false];
console.log(arrOfAge);
console.log(arrOfBool);
const gender = "male";
// gender = "female"; //! value itself become the type.
console.log(gender);
const address = "Chennai";
console.log(address);
const isMarried = true;
console.log(isMarried);
let userData = {
    username: "Shanu",
    age: 24,
    gender: "Male",
};
console.log(userData);
//! Type inference:
//? Type inference is the TypeScript compiler's ability to automatically determine and assign types to variables, function returns, and expressions without requiring explicit type annotations.
// let userData: {
//   username: string;
//   age: number;
//   gender: string;
// };
//! Type annotations
let emp;
emp = {
    ename: "Kirthika",
    isExperienced: true,
    projects: "Full Stack Developer project",
    company: "Indium",
};
console.log(emp);
let arrOfuserDetails = ["Shanu", true, null];
console.log(arrOfuserDetails);
let arrOfEmp;
arrOfEmp = ["Hii"];
console.log(arrOfEmp);
let arrOfObj;
arrOfObj = [
    { username: "Shanu", age: 24, gender: "male", city: "Chennai" },
    { username: "Sundari", age: 24, gender: "female", city: "Chennai" },
];
console.log(arrOfObj);
export {};
