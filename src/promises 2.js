/* 3 stage 
app mujhe Promise karo kal call karunga
1 : Pending
Event hoga gya hai 


1. what is promise
2. why we need it
2. Example of simple promise
4. what is finally keyword
5. Excaption HAndling with promises
6.promises chaning 
7. Error Handling with promises
8. promises all
9. promises.allSettled
10. Promises.race 
*/

// By default syncronus in nature, single threaded
// asynchrouns cdde ko handle karta hai

// promise------------->

//   1. Pending
//   2. resolve
//   3. reject

// let data = 1;
// console.log("First", data); //1

// data = 2;
// setTimeout(() => {
//   console.log("second", data);//3
// }, 0);

// data = 3;
// console.log("Three", data); //3

// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("The code is executed");
//     // resolve({name:"preety",age:26})
//     reject("This is rejected ");
//   });
// });
// data
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// let data1 = fetch("https://jsonplaceholder.typicode.com/posts");
// // console.log(data1);
// data1
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res[0].title);
//   })
//   .catch((err) => {
//     debugger;
//     console.log(err);
//   });

// Finally

let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("The code is executed");
    // resolve({name:"preety",age:26})
    resolve("someThing ");
  });
});
data.finally(() => {
  console.log("Hey finally");
});
