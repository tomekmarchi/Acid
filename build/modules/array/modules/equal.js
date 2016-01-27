  /**
   * Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
   *
   * __Note:__ The order of elements in the arrays __does__ matter. The elements must be found in the same order
   * for the arrays to be considered equal.
   *
   * @function Array#equals
   * @param {Array} array - An array to compare for equality.
   * @returns {boolean} `true` if the arrays are equal, `false` otherwise.
   *
   * @example
   * var array = [1, 2, 3];
   *
   * array.equals(array);
   * // -> true
   *
   * array.equals([1, 2, 3]);
   * // -> true
   *
   * array.equals([3, 2, 1]);
   * // -> false
   */
  $.isEqualArray = function(item,array) {
      if (array === item) {
          return true;
      }

      if (!array || getLength(array) !== getLength(item)) {
          return false;
      }

      for (var i = 0; i < getLength(array); i++) {
          if (array[i] !== item[i]) {
              return false;
          }
      }

      return true;
  };
