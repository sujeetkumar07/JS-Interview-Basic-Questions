const car = function (color) {
  if (!new.target) throw "car must be called with new keyboard";
  this._color = color;
};
const blueCar = new car("blue");
console.log(blueCar);
const redcar = car("red");
