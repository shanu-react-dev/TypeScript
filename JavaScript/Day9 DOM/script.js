//! DOM
//? DOM stands for Document Object Model. It's a browser API and it allows us to manipulate the HTML elements dynamically. It creaates a tree like structure for our HTML elements. It represents HTML elements in the form of nodes or object.

//? DOM Provides few methods to access and manipulate the HTML elements.
//! document.getElementById()
//? This is a method provided by DOM and it accepts ID name of an element as an argument and returns the first matching element. If the specified ID is not found in the HTML document it will return null.
//! document.getElementsByClassName()
//? This is also a DOM method used to access the elements by using their classnames it accepts class name of an element and returns one HTML collection. If there is no class found then it will return empty HTML Collection.
//! document.getElementsByTagName()
//? This is also a DOM method used to access the elements by using their tag name it accepts tag name of an element and returns one HTML collection. If there is no tag found then it will return empty HTML Collection.
//! document.querySelector()
//? This is the method provided by DOM and it accepts CSS selector as an argument and returns the first matching element. If there is no elements found by the specified argument it will return null.
//! document.querySelectorAll()
//? This is the method provided by DOM and it accepts CSS selector as an argument and returns the nodelist. If there is no elements found by the specified argument it will return empty Nodelist.

// let data = document.getElementById("firstHeading");
// console.log(data);
// let para = document.getElementById("firstPara");
// console.log(para);

// let input = document.getElementById("username");
// console.log(input);

// console.log(input.getAttributeNames());
// console.log(data.getAttributeNames());
// console.log(data.getAttributeNode("id"));

// let data = document.getElementsByClassName("firstClass");
// console.log(data); // HTML Collection

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }

let data2 = document.getElementsByTagName("h1");
console.log(data2); // HTML Collection

// data2.forEach((element) => {
//   console.log(element);
// });

// for (let i = 0; i < data2.length; i++) {
//   console.log(data2[i]);
// }

//! querySelector
let data = document.querySelector("input");
console.log(data);
data.style.background = "lightblue";
data.style.border = "2px solid navy";
data.style.outline = "none";

data.value = "I am Shanu";
data.disabled = true;

let password = document.querySelector(".password");
console.log(password);
password.style.background = "black";
password.style.color = "white";

let reset = document.querySelector("button");
console.log(reset);
reset.style.color = "red";

let submit = document.querySelector("[type=submit]");
console.log(submit);
submit.style.color = "blue";

//! querySelectorAll
let inputs = document.querySelectorAll("input");
console.log(inputs);
// inputs.forEach((element) => {
//   console.log(element);
// });

let lastPara = document.querySelector(".lastPara");
console.log(lastPara);
console.log(lastPara.children);
console.log(lastPara.childNodes);

//! HTML Collection and Nodelist
//? Both are an array like object and HTMLcollection contains only element nodes whereas Nodelist contains each and every node.

//! Updation of elements
//? 1. innerHTML
//? 2. innerText
//? 3. textContent
let demo = document.querySelector(".demo");
console.log(demo);
console.log(demo.innerHTML);
console.log(demo.innerText);
console.log(demo.textContent);

demo.innerText = "Go dabba, <br/> Hiii";
demo.innerHTML = "Go dabba, <br/> Hiii";
demo.textContent = "Chalo Chai Peete hai";
