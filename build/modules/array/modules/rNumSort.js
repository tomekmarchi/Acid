  /**
   * Sorts an array in place using a reverse numerical comparison algorithm
   * (sorts numbers from highest to lowest) and returns the array.
   *
   * @function Array#rnumsort
   * @returns {Array} The array this method was called on.
   *
   * @example
   * var files = [10, 0, 2, 1];
   * files.rnumsort();
   * console.log(files);
   * // -> [3, 2, 1, 0]
   */
  $.rNumSort = function(array) {
      return array.sort(numericalCompareReverse);
  };