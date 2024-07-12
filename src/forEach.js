Array.prototype.customForEach = function (callback) {
  var self = this;

  for (let i = 0; i < self.length; i++) {
    callback(arr[i], i, this);
  }
};

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.customForEach((item) => {
  console.log("Item", item);
});
