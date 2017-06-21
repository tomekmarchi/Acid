/**
 * Removes all occurrences of the passed in items from the array and returns the array.
 *
 * __Note:__ Unlike {@link Array#without|`.without()`}, this method mutates the array.
 *
 * @function Array#remove
 * @param {...*} *items - Items to remove from the array.
 * @returns {Array} The array this method was called on.
 *
 * @example
 * var array = [1, 2, 3, 3, 4, 3, 5];
 *
 * remove(array,1);
 * // -> [2, 3, 3, 4, 3, 5]
 *
 * remove(array,3);
 * // -> [2, 4, 5]
 *
 * remove(array,[2, 5]);
 * // -> [4]
 */
const remove = function (array, functArgs) {
  const isFN = isFunction(args);
  const args = ensureArray(functArgs);
  eachArray(array, (item, index) => {
    if ((isFN) ? args(item) : has(args, item)) {
      spliceArray(array, index, 1);
    }
  });
  return array;
};
acid.remove = remove;
