console.log("Hii this is floder setup class!!");

//! type and interface
//? type and interface both are keywords used to define the type of the variables. Type we can't declare again and again but interface can be redeclared.
// type USERDATA = {
//   username: string;
//   userId: number;
//   gender: string;
//   houseNumber: number;
//   isMarried: boolean;
//   isExperienced: boolean;
// };

// let user1: USERDATA = {
//   username: "Shanu",
//   userId: 123,
//   gender: "male",
//   houseNumber: 23,
//   isMarried: false,
//   isExperienced: true,
// };
// console.log(user1);

// let user2: USERDATA = {};

// type OBJECT = {
//   empName: string;
//   empid: number;
//   empRole: string;
//   isExperienced: boolean;
//   experience?: {
//     domain: string;
//     years: number;
//     companyName?: string;
//   };
// };

// let emp1: OBJECT = {
//   empName: "Shanu",
//   empid: 123,
//   empRole: "trainer",
//   isExperienced: true,
//   experience: {
//     domain: "IT",
//     years: 1,
//     companyName: "TestYantra",
//   },
// };
// console.log(emp1);

// let emp2: OBJECT = {
//   empName: "Sundari",
//   empid: 234,
//   empRole: "Software Engineer",
//   isExperienced: false,
//   experience: {
//     domain: "CyberSecurity",
//     years: 4,
//   },
// };

// console.log(emp2);

interface MY_OBJ {
  userName: string;
  address: {
    street: string;
    housenumber: number;
    city: string;
    pin: number;
  };
}

let user1: MY_OBJ = {
  userName: "Sharanya",
  address: {
    street: "2nd main",
    housenumber: 24,
    city: "BasvanGudi",
    pin: 811302,
  },
};
console.log(user1);

interface arrayInsideAnObj {
  arrOfSkills: object;
  arrOfCompanies: string[];
}

let myDataObj: arrayInsideAnObj = {
  arrOfSkills: ["Java", "Python"],
  arrOfCompanies: ["Indium", "TestYantra", "McDonalds", "Paypal"],
};

console.log(myDataObj);

interface EMP_OBJ {
  empId: number;
  empName: string;
  address: [
    {
      permanentAddress: {
        streetName: string;
        pin: number;
        city: string;
        state: string;
      };
      communication_Address?: {
        streetName: string;
        pin: number;
        city: string;
        state: string;
      };
    },
  ];
}

let arrOfEmps: EMP_OBJ[] = [
  {
    empId: 123,
    empName: "Keerthi",
    address: [
      {
        permanentAddress: {
          streetName: "4th cross",
          pin: 811302,
          city: "Chennai",
          state: "Tamil Nadu",
        },
      },
    ],
  },
];
