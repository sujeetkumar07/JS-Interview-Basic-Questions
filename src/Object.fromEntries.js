/* transform a list of key-value pairs into an object. */
// const profileArray = [
//   ["name", "peter"],
//   ["age", 30]
// ];
// /* array looks like an obj and then converted into an again obj  */
// const profileObject = Object.fromEntries(profileArray);
// console.log(profileObject);

/* lets suppose koi obj hai item={tomato:2,potato:5,eggs:6} agar iska 
price double karna hai to kya karoge
Object ko array mai convert karo "Object.entries" method se fir usme 
map se iterate kar ke array mai multiply*2
fir wapas se array to object conversion "Object.fromEntries" */
/*The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

*/
// const items = { tomato: 2, potato: 5, eggs: 6 };

// const doublePriceItems = Object.fromEntries(
//   Object.entries(items).map(([item, price]) => {
//     return [item, price * 2];
//   })
// );
// console.log(doublePriceItems);
// console.log(Object.entries(items));
/*********** Flat and FlatMap************/

// const arr = [1, [2, [[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]];
// const flatten = arr.flat(Infinity).reduce((acc, e) => {
//   return acc + e;
// }, 0);
// console.log(flatten);

// const arr = ["I Love You", "You Love me"];

// // const arr1 = arr.map((val) => {
// //   return val.split(" ");
// // });
// const arr1 = arr.flatMap((val) => {
//   return val.split(" ");
// });
// console.log(arr1);
/* function callMe(delay) {
  setTimeout(() => {
    console.log("Called");
  }, delay);
}

const delays = [500, 1000, 1500];

for (let delay of delays) {
  callMe(delay);
}

console.log("Completed"); */

// var arr = [5, 8, 2, 4, 8, 2, 4, 5, 8, 3];

// // var arr1 = arr.filter((v, i, item) => item.indexOf(v) === i);

// // console.log(arr1);
// var count = {};
// arr.forEach(function (i) {
//   count[i] = (count[i] || 0) + 1;
// });
// console.log(count);

// var emp1 = {
//   add: {
//     pin: 111
//   }
// };
// if (emp1?.add?.pin) {
//   console.log(`if`);
// } else {
//   console.log(`else`);
// }
