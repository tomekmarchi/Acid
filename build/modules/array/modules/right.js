// start from end array using a as index
const right = function (array, amount) {
  return array[getLength(array) - 1 - amount];
};
$.right = right;
