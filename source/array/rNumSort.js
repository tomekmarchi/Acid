import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
 * Sorts an array in place using a reverse numerical comparison algorithm
 * (sorts numbers from highest to lowest) and returns the array.
 *
 * @function rnumsort
 * @returns {Array} The array this method was called on.
 *
 * @example
 * var files = [10, 0, 2, 1];
 * rnumsort(files);
 * // -> [3, 2, 1, 0]
 */
export const numericalCompareReverse = (a, b) => {
  return b - a;
};
export const rNumSort = (array) => {
  return array.sort(numericalCompareReverse);
};
assign(acid, {
  rNumSort
});
