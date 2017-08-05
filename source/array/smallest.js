import acid from '../namespace/index';
import { assign } from '../internal/object';
const mathNativeMin = Math.min;
/**
   * Plucks the smallest value from an array.
   *
   * @function smallest
   * @category Array
   * @type {Function}
   * @param {Array} array - Array from which smallest number is taken.
   * @returns {number} The smallest number.
   *
   * @example
   * smallest([1,2,3]);
   * // => 1
 */
export const smallest = (array) => {
  return mathNativeMin(...array);
};
assign(acid, {
  smallest
});
