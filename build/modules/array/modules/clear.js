  /**
   * Removes all elements from the array.
   *
   * @function Array#clear
   *
   * @example
   * var array = [1, 2, 3];
   * array.clear();
   * console.log(array);
   * // -> []
   */
  array_extend.clear = function() {
      var array = this;
      array.length = 0;
      return array;
  };