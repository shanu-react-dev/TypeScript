//! string
//? string is a sequence of characters enclosed within either double quptes or single quotes.
// let a = "Shanu";
// let b = "Bharati";
// let c = `Cat`;
// console.log(a);
// console.log(b);
// console.log(c);

// a = "Shanu's friend is not so good";
// b = 'Shanu said, "Hii this is Friday"';
// c = `${a} ${b}  ${c}`;
// console.log(a);
// console.log(b);
// console.log(c);

// let person = `Sailaja`;
// let sent = `${person} is a good boy.
// He is also a good friend

// sdgfabngjk
// sdjgkan
// `;

// console.log(sent);
// console.log(typeof sent);

// let str = new String(12345678);
// console.log(str);
// console.log(typeof str);

//! string methods
//! length
//? length is a property used to count how many characters are present in the string.
let str = "Shanu Singh";
console.log(str.length);

//! at
//? at is a string method and it accepts index value as an argument and returns the character at the specified index. If the index does not exist then it will return undefined.
let res = str.at(1);
console.log(res);
res = str.at(-3);
console.log(res);
res = str.at(100);
console.log(res);

//! charAt
//? charAt is a string method and it is similar to at but it does not accept negative index as an argument. If it is negative index or specified index does not exist then it will return empty string.
res = str.charAt(4);
console.log(res);
res = str.charAt(100);
console.log(res);
res = str.charAt(-1);
console.log(res);

//! charCodeAt
//? charCodeAt is a string method and it accepts index as an argument and returns ASCII character or value of the characters present at the specified index. It does not accept any negative index and if the specified index does not present then it will return NaN. The return type of this method is number
let res2 = str.charCodeAt(2);
console.log(res2);
res2 = str.charCodeAt(-1);
console.log(res2);

//! concat
//? concat is a string method and it concatenates the specified value with existing string value. In TypeScript here it accepts only string as an argument. By default the type of pararmeter is string. The return type of this method is string
res = str.concat(" Sailaja");
console.log(res);

//! endsWith
//? endsWith is a string method and it accepts string as an argument it checks the specified argument is matching with the last part of string or not if it is then it will return true else false. The return type of this method is boolean
let res3: boolean = str.endsWith("hgin");
console.log(res3);

//! startsWith --> return type is boolean

//! includes
//? it is a string method and it is used to check the specified argument is existing in the string value or not if it is existing then it will return true else false.
res3 = str.includes("S");
console.log(res3);
//! slice, substring and substr
