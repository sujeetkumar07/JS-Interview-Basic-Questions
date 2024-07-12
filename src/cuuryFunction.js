// let sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// console.log(sum(1)(2));

function mul(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          if (e === "SR") {
            return a;
          } else {
            return a * b * c * d;
          }
        };
      };
    };
  };
}

console.log(mul(1)(2)(3)(4)("SR"));
