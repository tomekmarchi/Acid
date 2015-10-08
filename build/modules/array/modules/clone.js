  /**
   * Creates a shallow copy of the array.
   *
   * @function Array#clone
   * @returns {Array} A clone of the array.
   *
   * @example
   * var a = [1, 2, 3];
   * var b = a.clone();
   * console.log(b, b === a);
   * // -> [1, 2, 3] false
   */
$.clone = function (item) {
	return item.slice(0);
};