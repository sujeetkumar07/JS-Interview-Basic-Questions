// FIzz divisible by 3
// Buzz divisible by 5
// FizzBuzz divisible by both 3 and 5

// var fizz = (n) => {
//   for (var i = 0; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//   }
// };
// fizz(5);

function fizz(n) {
  for (let i = 0; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("FizzBuzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log("Hi Bro");
    }
  }
}
fizz(5);
