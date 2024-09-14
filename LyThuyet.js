let arr = [45, 4, 9, 16, 25];

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

let callbackfn = (number) => {
  return number * 2;
};

let result = arr.myMap(callbackfn);
console.log(result);
