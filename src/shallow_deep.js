//shallow copy : copy one level of an elements
// To shallow copy, an object means to simply create a new object
// with the exact same set of properties.
//  We call the copy shallow because the properties in the target object
//  can still hold references to those in the source object.

// deep copy: copy nested elements
// 2. Deep copy
// When we make a deep copy we create a completely new object which
// holds no references to the original.
// top level elements example
// var array = ["sujeet", "sachin", "tanish"];

// var car = {
//   size: "100%",
//   owner: "sujeet",
//   isACarNonAC: true
// };

//Reference
//Object and arrays are assign by reference
//In array
// var arrayNew = array;
// arrayNew[0] = "sujeet1";
// console.log(arrayNew, arrayNew);
// // In object
// var otherCar=car;
// otherCar.model='0%'
// car.isACarNonAC=false
// console.log(otherCar, car);

//nested example
// var array = ["sujeet", "sachin", ["100", 200], { x: 100 }];
// var object = {
//   size: "100%",
//   owner: "sujeet",
//   ages: [22, 24, 25, 66]
// };

//Shallow copy
/* 1. Array.concate(Array1) */
var originalArray = ["100", "200", "300", { a: "notchanged" }];
var anotherArray = ["sid"];
var conArray = anotherArray.concat(originalArray);

conArray[0] = "Ram";
conArray[4].a = "change";
console.log(conArray, originalArray);

/* 2. Array.from(Array1)*/

// var originalArray = ["100", "200", "300", { a: "notchanged" }];
// var formArray = Array.from(originalArray);
// formArray[0] = "Ram";
// formArray[3].a = "change";
// console.log(formArray, originalArray);

/* 3. Array.slice(0)*/
// var originalArray = ["100", "200", "300", { a: "notchanged" }];
// var sliceArray = originalArray.slice(0);
// sliceArray[0] = "Ram";
// sliceArray[3].a = "change";
// console.log(sliceArray, originalArray);

/* 4. Spread Operator  [...Array1]*/
// var originalArray = ["100", "200", "300", { a: "notchanged" }];
// var spreadArray = [...originalArray];
// spreadArray[0] = "Ram";
// spreadArray[3].a = "change";
// console.log(spreadArray, originalArray);

// Shallow copy in Object
/* 1. Object.assign({},object) */
// var sourceObj = {
//   age: 1,
//   gender: "Male",
//   hobbies: ["cricket", "carrom", "cheess"]
// };

// var copyObject = Object.assign({}, sourceObj);
// copyObject.age = "100";
// copyObject.hobbies[0] = "coding";
// console.log(copyObject, sourceObj);

/* 2. Spread operator {...Obj}*/
// var sourceObj = {
//   age: 1,
//   gender: "Male",
//   hobbies: ["cricket", "carrom", "cheess"]
// };

// var spreadObject = { ...sourceObj };
// spreadObject.age = "100";
// spreadObject.hobbies[0] = "coding";
// console.log(spreadObject, sourceObj);

/* Deep copy*/
// var sourceObj = {
//   age: 1,
//   gender: "Male",
//   hobbies: ["cricket", "carrom", "cheess"],
//   getAge: function () {
//     console.log("Hello");
//   }
// };

// var parseObj = JSON.parse(JSON.stringify(sourceObj));
// parseObj.age = "100";
// parseObj.hobbies[0] = "coding";
// console.log(parseObj, sourceObj);
// console.log(sourceObj.getAge());
// console.log(parseObj);

/*Deep copy In array*/
// var originalArray = ["100", "200", "300", { a: "notchanged" }];

// var deepArray = JSON.parse(JSON.stringify(originalArray));
// deepArray[0] = "1";
// deepArray[3].a = "change";
// console.log(deepArray, originalArray);
