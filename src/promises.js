//callback
// function myfunc() {
//   console.log("Inside Function");
// }
// console.log("start");
// myfunc();
// console.log("End");

/*Callback problem */

// console.log("start");
// function getName(param, cb) {
//   setTimeout(() => {
//     console.log("Inside func");
//     cb(param);
//   }, 2000);
// }
// const nm = getName("sujeet ");
// console.log(nm);
// const nm = getName("sujeet ", (nm) => {
//   console.log(nm);
// });
// console.log("End");
/*------------------------Promise.all():----------------- */
// Promise.all():
// const promise1 = Promise.resolve("one");
// const promise2 = Promise.reject("two");
// const promise3 = Promise.resolve("three");

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values)) // ['one', 'two', 'three']
//   .catch((error) => console.log(error));

// cond: If all promise get resolve then only it return the value
//cond2 : if ek reject ho jaye to "const promise2 = Promise.reject("two");" to uss case mai error throw karega
//ki q error aaya
//cond3: yani Promise.all[resolve,resolve,resolve] hi promise except karta hai agar reject aay ato throw an error

/*------------------------Promise.all():----------------- */
// const promise1 = Promise.resolve("one");
// const promise2 = Promise.reject("two");
// const promise3 = Promise.resolve("three");

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => console.log(results))
//   .catch((error) => console.log(error));

//cond: ye [resolve,resolve,reject] or[resolve,resolve,resolve] ye kuch bhi leta hai either ye resolve ho ya reject ho
//basically ye arry of obj return karta hai like this ) [Object, Object, Object] ismi mai resolve reject hota hai

/*------------------------Promise.any():----------------- */
// const promise1 = Promise.reject("one");
// const promise2 = Promise.resolve("two");
// const promise3 = Promise.resolve("three");

// Promise.any([promise1, promise2, promise3])
//   .then((results) => console.log(results))
//   .catch((error) => console.log(error));

//cond: isme koi ek resolve wala jo pahele mil jaye de deta hai

/*------------------------Promise.race():----------------- */
// const promise1 = Promise.reject("one");
// const promise2 = Promise.resolve("two");
// const promise3 = Promise.resolve("three");

// Promise.race([promise1, promise2, promise3])
//   .then((results) => console.log(results))
//   .catch((error) => console.log(error));

//cond: isme koi ek resolve or reject wala jo pahele mil jaye de deta hai
/*---------------------All--------------------- */
/*promise All and race*/
// const willCleanTheRoom = new Promise((resolve, reject) => {
//   let roomIsClean = true;
//   if (roomIsClean) {
//     resolve("room is clean");
//   } else {
//     reject("room is still dirty");
//   }
// });
// const removeGarbage = new Promise((resolve, reject) => {
//   let removeGarbage = true;
//   if (removeGarbage) {
//     resolve("garbage removed");
//   } else {
//     reject("garbage not removed");
//   }
// });
// const getReward = new Promise((resolve, reject) => {
//   let gotReward = true;
//   if (gotReward) {
//     resolve("received reward");
//   } else {
//     reject(":( no rewards");
//   }
// });

// willCleanTheRoom
//   .then((resolveMessage) => {
//     console.log(resolveMessage);
//     return removeGarbage;
//   })
//   .then((resolveMessage) => {
//     console.log(resolveMessage);
//     return getReward;
//   })

//   .then((resolveMessage) => {
//     console.log(resolveMessage);
//     console.log("all done");
//   })
//   .catch((rejectMessage) => {
//     console.log(rejectMessage);
//   });
/*---------------------Promise.All u also use--------------------- */
// Promise.race([willCleanTheRoom, removeGarbage, getReward])
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

/*---------------------async & await--------------------- */
/*
Promise.all(iterable)
Wait for all promises to be resolved, or for any to be rejected.

Promise.allSettled(iterable)
Wait until all promises have settled (each may resolve or reject).

Promise.race(iterable)
Wait until any of the promises is resolved or rejected.
*/
//“async” before a function means one simple thing: a function always returns a promise.

/* async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}
f(); */

// const doChores = async () => {
//   const willCleanTheRoom = new Promise((resolve, reject) => {
//     let roomIsClean = true;
//     if (roomIsClean) {
//       resolve("room is clean");
//     } else {
//       reject("room is still dirty");
//     }
//   });
//   const removeGarbage = new Promise((resolve, reject) => {
//     let removeGarbage = true;
//     if (removeGarbage) {
//       resolve("garbage removed");
//     } else {
//       reject("garbage not removed");
//     }
//   });
//   const getReward = new Promise((resolve, reject) => {
//     let gotReward = true;
//     if (gotReward) {
//       resolve("received reward");
//     } else {
//       reject(":( no rewards");
//     }
//   });

//   try {
//     let isRoomClean = await willCleanTheRoom;
//     console.log(isRoomClean);
//   } catch (err) {
//     console.log(err);
//     return;
//   } finally {
//     console.log("called no matter what");
//   }
//   try {
//     let isGarbageRemoved = await removeGarbage;
//     console.log(isGarbageRemoved);
//   } catch (err) {
//     console.log(err);
//     return;
//   }

//   try {
//     let haveGottenReward = await getReward;
//     console.log(haveGottenReward);
//   } catch (err) {
//     console.log(err);
//     return;
//   }

//   console.log("All chores done!");
// };
// doChores();
