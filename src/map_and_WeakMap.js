/* Map object holds key-value pairs and 
remembers the original insertion order of the keys


Map is an object jo another object ko as a key hold karta hai 



Map is a collection of elements where each element is stored 
as a Key, value pair. 


Map object can hold both objects and 
primitive values as either key or value.
 When we iterate over the map object it returns the key,value pair in
  the same order as inserted.
*/
let Person = {
  name: "sujeet",
  age: 28
};
/* ab isme object daalna hai to*/
/* 1st way */
// Person.collegeDetails = {
//   collage_name: "ABC",
//   class: "B.tech 1st year"
// };
// console.log(Person);

/* 2nd way is  */

// const StudentData = new Map();
// console.log(StudentData);
// StudentData.set(Person, { collage_name: "ABC", class: "B.tech 1st year" });
// console.log(StudentData);
// console.log(StudentData.get(Person));

// /* disadvantage ye hai ki garbage collector mai nahi jaata hai
// iska reference still rehta hai
// but wahi weakMap kya karta hai ki ye garbage collector se reference
// hata deta hai if obj is deleted

// */

// let aMap = new Map([
//   [1, "test"],
//   ["a", "Apple"]
// ]);
// console.log(aMap.get(1));
// console.log(aMap.get("a"));

// // console.log(aMap.entries());
// console.log(Object.fromEntries(aMap));

// /*WeakMap*/
let Wmap = new WeakMap();
// Wmap.set("a","Apple")
// weak map doesn't allow any string value ye hamesha object hi leta hai

let obj = {};
Wmap.set(obj, "Apple");
console.log(Wmap.get(obj));
// // so Weak map ko delete karte hai to ye garbage collector se bhi remove ho jata hai
// // lakin Map allow nahi karta hai ki garbage colletor se property remove ho

// // console.log(obj instanceof Object);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i++);
//   }, 1000);
// }
