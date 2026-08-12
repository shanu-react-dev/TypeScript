console.log("Hii this is floder setup class!!");

//! type and interface
//? type and interface both are keywords used to define the type of the variables. Type we can't declare again and again but interface can be redeclared.
type USERDATA = {
  username: string;
  userId: number;
  gender: string;
  houseNumber: number;
  isMarried: boolean;
  isExperienced: boolean;
};

let user1: USERDATA = {
  username: "Shanu",
  userId: 123,
  gender: "male",
  houseNumber: 23,
  isMarried: false,
  isExperienced: true,
};
console.log(user1);

// let user2: USERDATA = {};
