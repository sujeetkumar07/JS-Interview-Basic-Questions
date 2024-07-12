/* BEHAVIOR OF BIND METHOD */

//  var obj1 = {
//   name: "Tanish",

//   getName: function (a, b) {
//     return `My name is ${this.name}. and sum is: ${a + b}`;
//   }
// };

// // console.log(obj1.getName(1, 10));

// var obj2 = {
//   name: "Archana"
// };

// var boundFunc = obj1.getName.bind(obj2, 1, 2);

// console.log(boundFunc());

/*
NOW< HOW TO WRITE POLYFILL FOR BIND METHOD
*/

//  var obj1 = {
//   name: "Tanish",

//   getName: function (a, b) {
//     return `My name is ${this.name}. and sum is: ${a + b}`;
//   }
// };
// var obj3 = {
//   name: "Sujeet"
// };
// Function.prototype.myBind = function (context, ...args1) {
//   let fn = this;
//   return function (...arg2) {
//     return fn.call(context, ...args1, ...arg2);
//   };
// };
// var myBoundFunc = obj1.getName.myBind(obj3, 1, 2);

// console.log(myBoundFunc());

//bind

// let name = {
//   firstname: "Akshay",
//   lastname: "Saini"
// }

// let printName = function (hometown, state, country) {
//   console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
// }

// let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
// printMyName( "India");

// Function.prototype.mybind = function(...args){
//   let obj = this,
//     params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   }
// }``

// let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
// printMyName2( "India");
