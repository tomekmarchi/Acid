  /**
   * Returns a new array with all falsey values removed. Falsey values
   * are `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
   *
   * @function Array#compact
   * @returns {Array} The new array containing only the truthy values from the original array.
   *
   * @example
   * [0, 1, false, 2, '', 3].compact();
   * // -> [1, 2, 3]
   */
$.compact = compact;