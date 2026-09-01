let formBox = document.querySelector(".formBox");
//! creation of the elements
let heading = document.createElement("h2");
let form = document.createElement("form");
let username = document.createElement("input");
let password = document.createElement("input");
let submitBtn = document.createElement("input");

//! adding necessary attributes and values
heading.innerText = "Login Here";
username.type = "text";
username.id = "username";
username.placeholder = "Enter username";
console.log(username);

password.type = "password";
password.id = "password";
password.placeholder = "Enter Password";
console.log(password);

submitBtn.innerText = "Login";
submitBtn.type = "submit";

//! Appending the elements
form.append(username, password, submitBtn);
console.log(form);
formBox.append(heading, form);

//! Stylings of the form
formBox.style.height = "300px";
formBox.style.width = "350px";
// formBox.style.border = "3px solid blue";
formBox.style.background = "lightgreen";
formBox.style.display = "flex";
formBox.style.flexDirection = "column";
formBox.style.justifyContent = "center";
formBox.style.gap = "30px";
formBox.style.alignItems = "center";
formBox.style.borderRadius = "50px 0";

form.style.height = "60%";
form.style.width = "80%";
form.style.display = "flex";
form.style.alignItems = "center";
form.style.justifyContent = "center";
form.style.flexDirection = "column";
// form.style.background = "lightgray";

let inputs = document.getElementsByTagName("input");
console.log(inputs);

Array.from(inputs).forEach((ele) => {
  ele.style.padding = "10px";
  ele.style.width = "100%";
  ele.style.borderRadius = "20px";
  ele.style.margin = "10px";
  ele.style.border = "2px solid darkgreen";
  ele.style.color = "green";
  ele.style.fontWeight = "600";
  ele.style.outline = "none";
});

submitBtn.style.cursor = "pointer";
submitBtn.style.color = "#fff";
submitBtn.style.background = "darkgreen";
