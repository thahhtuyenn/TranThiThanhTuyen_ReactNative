let arr = [45, 4, 9, 16, 25, 36, 49, 64, 81, 100];
let result = null;

//map
let callbackMap = (number) => {
  return number * 2;
};

Array.prototype.myMap = function (callbackMap) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackMap(this[i]));
  }
  return newArr;
};

result = arr.myMap(callbackMap);
console.log("1)");
console.log("Array: ", arr);
console.log("Result of myMap (arr[i] = arr[i] * 2): ");
console.log(result);

//filter
let callbackFilter = (number) => {
  return number % 2 === 0;
};

Array.prototype.myFilter = function (callbackFilter) {};
