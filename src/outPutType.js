function doSomething() {
  return new Promise((res, rej) => {
    res("doSomething");
  });
}
function doSomethingElse() {
  return 10;
}
// doSomething()
//   .then(function () {
//     return doSomethingElse();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// doSomething().then(function(res) {
//     console.log(res)
//     doSomethingElse();
// }).then((res)=>{
//     console.log(res)
// }
// )

// doSomething().then(doSomethingElse());
// doSomething().then(doSomethingElse);

/*------------------------------------------*/
// function callMe(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("Called");
//       res(true);
//     }, delay);
//   });
// }

// (async () => {
//   // make this as IIFE const delays = [500, 1000, 1500]; for (let delay of delays) {
//   const delays = [500, 1000, 1500];
//   for (let delay of delays) {
//     await callMe(delay); // await will accept asynchronous function will make call Dealy using promise
//   }
//   console.log("Completed");
// })();
