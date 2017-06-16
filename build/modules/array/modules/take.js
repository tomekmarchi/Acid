// Creates a slice of array with n elements taken from the beginning.
const take = function (array, amount) {
  return arraySliceCall(array, 0, amount);
};
$.take = take;
// Creates a slice of array with n elements taken from the end.
const takeRight = function (array, amount) {
  return spliceArray(array, getLength(array) - amount, amount);
};
$.takeRight = takeRight;
