// let myDogesName = "cujo";
// console.log(myDogesName);

// let and const

// let myDogesName = "cujo";
// myDogesName = "dogo";
// address of two variable are different
// const myDogesName = "cujo";
// myDogesName = "dogo";
// console.log(myDogesName);

// let mydogsName;
// console.log(mydogsName);

// let mydogsName = "sujeet";
// mydogsName = null;
// console.log(mydogsName);

const profile = {
  name: "Sujeet",
  age: 30,
  single: true,
  "got a job": false,
  kids: [
    {
      name: "peter",
      age: 3
    },
    {
      name: "kate",
      age: 2
    }
  ]
};

// let abc = Object.keys(profile).map((data, key) => {
//   return profile[data];
// });
// console.log(abc);

// profile.kids.push({ name: "adwait", age: 32 });
// console.log(profile.kids);
// console.log(delete profile.kids[0].age);
// for (let item in profile) {
//   console.log(item.name);
// }

// profile.kids.forEach((data) => {
//   console.log(delete data.age);
// });
// profile.kids.forEach((data) => {
//   console.log(data);
// });
// const numArray = [1, 2, 3, 3, 2, 1, 3, 2];

// let mySet = new Set(numArray);
// console.log(mySet);
// // mySet.forEach((data)=>{
// //   console.log(data)
// // })
// for (let item of mySet) {
//   console.log(item);
// }
// var arr = [
//   { price: "100", prduct: "Redmi" },
//   { price: "200", prduct: "Redmi7" },
//   { price: "300", prduct: "Redmi8" }
// ];

// for (let arr1 of arr) {
//   console.log(arr1.price=+arr1.price+1);
// }
// const numArr1 = [4, 1, 2, 10, 1000];

// let max1 = Number.NEGATIVE_INFINITY;

// let max2 = Number.NEGATIVE_INFINITY;

// let sorted = numArr1.sort((a, b) => {
//   return a - b;
// });
// console.log(sorted[sorted.length-1]);

// let addE = function () {
//   console.log(arguments);
//   let s = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     s = s + arguments[i];
//   }
//   return s;
// };
// let sum1 = addE(2, 6,9,8);
// console.log(sum1);

// const add = function (a = [], b = []) {
//   return [...a, ...b];
// };
// let total = add(undefined, [4, 5]);
// console.log(total);

// const arr = [5, 10, 15];
// let initialvalue = 0;
// let reducer = (accumulater, item) => {
//   return accumulater + item;
// };

// let arr1 = arr.reduce(reducer, initialvalue);
// console.log(arr1);

// let function2 = function () {
//   console.log("func 2");
// };
// let function1 = function (cb) {
//   console.log("func");
//   cb();
// };
// function1(function2);

// const host =function(cb){
//   console.log(1)
//   cb();
// }
// const callback =function(){
//   console.log('you called me back from host ')
// }

// host(callback)

// const numArray = [{ num: 1 }, { num: 2 }, { num: 3 }];

// let numArray1 = numArray.filter((data) => {
//   //console.log(data.num);
//   if (data.num % 2 === 0) {
//   } else {
//     console.log(data.num * 2);
//   }
// });
// console.log(numArray1);

// const numArray = [{ num: 1 }, { num: 2 }, { num: 3 }];
// const cb = function (e) {
//   if (e.num % 2 === 0) {
//   } else {
//     return e.num * 2;
//   }
// };
// const newArray = numArray.filter(cb);
// console.log(newArray);

// const numArray = [{ num: 1 }, { num: 2 }, { num: 3 }];
// numArray.map((data) => {
//   // let c=0
//   //console.log(data.num);
//   // console.log(data.num+c)
// });
// numArray.reduce(reducer,initialValue)

// let numArr1 = numArray.reduce((acc, e) => {
//   return acc + e.num;
// }, 0);
// console.log(numArr1);

// const array = [
//   { name: "Sujeet", age: 30 },
//   { name: "Ajeet", age: 20 },
//   { name: "Bittu", age: 10 }
// ];

// let arr1 = array.sort((a, b) => {
//   return b.name > a.name ? -1 : 1;
// });
// //console.log(arr1);
// let arr2 = array.sort((a, b) => {
//   return b.age > a.age ? -1 : 1;
// });
//console.log(arr2);

// let id = setInterval(() => {
//   console.log(1);
// }, 2000);
// let id2 = setInterval(() => {
//   console.log(1);
// }, 2000);
// let id3 = setInterval(() => {
//   console.log(1);
// }, 2000);

// console.log(id, id2, id3);

// var Mobile = function (modelno, sprice) {
//   this.model = modelno;
//   this.price = 3000;
//   this.sp = sprice;
//   this.sellingprice = function () {
//     return "this.sprice" + " "+"this.price";
//   };
//   this.data = function () {
//     console.log("Model No:" + this.model + "price " + this.sellingprice());
//   };
// };
// var sumsung = new Mobile("S1234", 200);
// console.log(sumsung);
// sumsung.sellingprice();

// let intervalID;

// intervalID = window.setInterval(() => {
//   console.log(1);
// }, 2000);

// console.log(intervalID);
// window.setTimeout(() => {
//   clearInterval(intervalID);
// }, 6000);

//************** */

// const willCleanTheRoom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let cleanRoom = false;
//     if (cleanRoom) {
//       resolve("Room is clean");
//     } else {
//       reject("Room is not clean");
//     }
//   }, 3000);
// });
// willCleanTheRoom
//   .then((resolveStatus) => {
//     console.log("resolveStatus",resolveStatus);
//   })
//   .catch((rejectStatus) => {
//     console.log("rejectStatus",rejectStatus);
//   });

//Both are use to reduce the function call rates
function isEqual() {
  var a = [1, 2, 3, 5];
  var b = [1, 4, 3, 5];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      console.log("both same ");
    } else {
      console.log("not same");
    }
  }
}
var v = isEqual();
console.log(v); //True
