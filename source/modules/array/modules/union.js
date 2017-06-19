// Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
const union = function () {
  const result = [];
  eachArray(arguments, (array) => {
    eachArray(array, (item) => {
      if (has(result, item)) {
        pushArray(result, item);
      }
    });
  });
  return result;
};
$.union = union;
