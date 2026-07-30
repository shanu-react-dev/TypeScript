// let a = 10;
// let b = Number("20");
// console.log(b);
// console.log(typeof b);
// let c = 9;

// console.log(a + b);
// console.log(a - b);
// console.log(a * c);

// let username: string;
// username = "Shanu";
// username = 90

//! Type Annotation
//? A type annotation in TypeScript is a lightweight way to explicitly declare the data type of a variable, function parameter, return value, or object property. It uses a colon (:) followed by the specific type name placed after the identifier.
let age: number = 90;

//! Type Inference
//? Type inference is TypeScript's ability to automatically determine and assign data types to variables, expressions, and function return values without requiring explicit type annotations. The TypeScript compiler figures out the correct type at compile time based on the value you provide and how you use it.
let userName = "Shanu";
userName = "Hii this is Shanu";

// let data: null = null;

let data: any = 19;
console.log(data); //19
data = "Shanu";
console.log(data); // Shanu
data = null;
console.log(data); //null

let arr = ["Shanu", "Sundari", 19, true];

let arr2: number[] = [19, 45, 18, 7, 10];

let obj = {
  username: "Shanu",
  age: 24,
  gender: "male",
  ismarried: true,
};
console.log(obj.username); //Shanu
console.log(obj.gender);

let obj1: {
  empName: string;
  empID: number;
  isExperienced: boolean;
  projects: null | number;
  isMarried: boolean;
};

obj1 = {
  empName: "Karthik",
  empID: 129,
  isExperienced: true,
  projects: 19,
  isMarried: true,
};

let TodayDate = new Date();
console.log(TodayDate.getDate());
console.log(TodayDate.toDateString());
console.log(typeof TodayDate);

let obj2: object;
obj2 = {
  cName: "Deepak",
  cId: "2345a",
  isDelivered: true,
  hasReceived: false,
};
console.log(obj2);
obj2.shopKeeperName = "Radha";
console.log(obj2);

let projectLead = "Sanu";
obj2.projectLead = projectLead;
console.log(obj2);

export {};
