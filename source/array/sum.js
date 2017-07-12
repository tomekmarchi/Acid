import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Reduces the values in an array into a single number.
  *
  * @function sum
  * @type {Function}
  * @param {Array} array - Array to be reduced.
  * @returns {number} - Returns a single value.
  *
  * @example
  * sum([1, 2, 3, 4]);
  * // => 10
*/
const sum = (array) => {
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};
assign(acid, {
  sum
});
