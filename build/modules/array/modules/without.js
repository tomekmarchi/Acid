// Returns a copy of the array with all instances of the values removed.
const without = function (array, functArgs) {
  const isFN = isFunction(functArgs);
  const args = ensureArray(functArgs);
  return mapArray(array, (item, index) => {
    if ((isFN) ? args(item) : has(args, item)) {
      return item;
    }
  });
};
$.without = without;
