import acid from '../namespace/index';
import { assign } from '../internal/object';
const mathNativeMax = Math.max;
/**
   * Plucks the largest value from an array.
   *
   * @function largest
   * @type {Function}
   * @param {Array} array - Array from which largest number is taken.
   * @returns {number} Returns largerst number in array.
   *
   * @example
   * largest([1,2,3]);
   * // => 3
 */
export const largest = (array) => {
  return mathNativeMax(...array);
};
assign(acid, {
  largest
});
