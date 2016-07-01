  /**
   * Returns a new array with all Falsey values removed. Falsey values
   * are `False`, `0`, `""`, `null`, `undefined`, and `NaN`.
   *
   * @function Array#compact
   * @returns {Array} The new array containing only the truthy values from the original array.
   *
   * @example
   * $.compact([0, 1, False, 2, emptyString, 3]);
   * // -> [1, 2, 3]
   */
$.compact = compact;
