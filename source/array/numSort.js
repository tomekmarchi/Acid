 /**
   * Sorts an array in place using a numerical comparison algorithm
   * (sorts numbers from lowest to highest) and returns the array.
   *
   * @function Array#numsort
   * @returns {Array} The array this method was called on.
   *
   * @example
   * var files = [10, 0, 2, 1];
   * files.numsort();
   * console.log(files);
   * // -> [0, 1, 2, 3]
   */
const numSort = function (array) {
  return array.sort(numericalCompare);
};
acid.numSort = numSort;
