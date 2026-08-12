let arrOfEmp: string[] = ["Shanu", "Ganesh", "Lokesh", "Sundari"];
console.log(arrOfEmp);

//! interface
interface USERDATA {
  userName: string;
  userId: number;
  contact: number;
  address: {
    houseNumber: number;
    city: string;
    pin: number;
  };
}

// let user1: USERDATA = {
//   userName: "Dhanalakshmi",
//   userId: 12,
//   contact: 9821756211,
//   address: {
//     houseNumber: 23,
//     city: "Chennai",
//     pin: 123445,
//   },
// };
// console.log(user1);

// interface ARR_WITH_INTERFACE {
//   empName: string;
// }
// [];

interface data {
  arrOfSkills: string[];
  arrOfFuits: string[];
}
[];

let skillSection = [{}];

type isMarried = boolean;

let data: isMarried = true;

type stars = null;

let data2: stars = null;

type userObj = {
  username: string;
  userid: number;
};

let user1: userObj = {
  username: "Shanu",
  userid: 23,
};

console.log(user1);

interface dabba {}

interface dabba {}
