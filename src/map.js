Array.prototype.customMap = function (callback) {
  var self = this;
  var result = [];

  for (let i = 0; i < self.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
};

var arr = [1, 2, 3, 4, 5, 6, 7];

var newArr = arr.customMap((item) => {
  return item * 2;
});

console.log(newArr);
