// get smallest number from array
const smallest = function (item) {
  return apply(mathNative.min, mathNative, item);
};
$.smallest = smallest;
