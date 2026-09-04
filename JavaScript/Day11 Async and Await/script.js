//? Async and Await
//? Both are keywords in JavaScript and used to perform asynchronous behavior in JavaScript. Async keyword is used to create asynchronous function whereas await keyword is used to wait for the task completions.
// async function fetchAPI() {
//   let res = await fetch("https://fakestoreapi.com/products");
//   let fData = await res.json();
//   console.log(fData);
// }
// fetchAPI();
async function fetchData(urlData) {
  try {
    let response = await fetch(urlData);
    console.log(response); // string data
    let finalData = await response.json();
    console.log(finalData);

    // if (response.status != 200) {
    //   console.log("Reques not succeeded");
    // }

    // finalData.forEach((ele, index) => {
    //   console.log(ele);
    // });
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();

fetchData("https://fakestoreapi.com/users");
