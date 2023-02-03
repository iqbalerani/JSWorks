'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firtName);
//   return age;
// }

// const firtName = 'Jonas';
// calcAge(1991);

//Hoisting Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Iqbal';
// let job = 'Software Engineer';
// const year = 2020;

// //Hoisting Functions
// console.log(addDeck(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDeck(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// function addtwo(a, b) {
//   return y + a + b;
// }
// // console.log(y);
// const y = 2;
// console.log(y);

// console.log(addtwo(2, 5));

// console.log(this);

let firtName = 'Iqbal';

const info = {
  lastName: 'Erani',
  year: 1984,
  calcAge: function () {
    console.log(this);
    // console.log(2020 - this.year);
    console.log(`Hey ${firtName}`);
  },

  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firtName}`);
  },
};

info.calcAge();
info.greet();
