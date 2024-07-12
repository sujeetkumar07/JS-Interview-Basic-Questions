/*
Generator is a func which is stop in a midway and continue from where
it stop

run time pe generate a value 

*/
// function* add() {}

// function normalFun() {
//   console.log("I");
//   console.log("CAN NOT");
//   return;
//   console.log("BE");
//   console.log("STOPPED");
// }

// normalFun();
// normalFun();

//

// function* numberGen() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }
// let gen = numberGen();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* genFun() {
//   console.log("Hi");
//   yield "Hello";
//   console.log("Mr");
//   yield "Ajeet";
//   console.log("How are you ?");
// }

// let result = genFun();

// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// function* genFun() {
//     yield 'ajeet';
//     return 'chandan';
//     yield 'Pawan';
// }

// let result = genFun();

// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// function* numberGen() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let gen = numberGen();

// for (let val of gen) {
//     console.log(val);
// }

// function* genFun() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let gen =[...genFun()];
// let gen =[0,...genFun()];
// console.log(gen);

// function* genFun() {
//   let question1 = yield "2+2 = ?";
//   console.log(question1);

//   let question2 = yield "2*3 = ?";
//   console.log(question2);
// }

// let gen = genFun();
// console.log(JSON.stringify(gen.next()));
// console.log(gen.next().value);
//  console.log(gen.next(4).value);
// // console.log(gen.next(6).value);
// console.log(JSON.stringify(gen.next(6)));
function Outerfun() {
  var outervar = "outervar";
  function Innerfun() {
    console.log(outervar);
  }
  return Innerfun;
}

const xyz = Outerfun();
console.log(xyz());
