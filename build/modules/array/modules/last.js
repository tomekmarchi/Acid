// Returns the last element of an array. Passing n will return the last n elements of the array.
const lastItem = function (array, indexFrom) {
  const length = getLength(array);
  return (indexFrom) ? arraySliceCall(array, length - indexFrom, length) : array[length - 1];
};
$.last = lastItem;
