import acid from '../namespace/index';
import { assign } from '../internal/object';
export const numericalCompareReverse = (a, b) => {
  return b - a;
};
/**
  * Sorts an array in place using a reverse numerical comparison algorithm from highest to lowest.
  *
  * @function rNumSort
  * @param {Array} numberList - Array of numbers.
  * @returns {Array} The array this method was called on.
  *
  * @example
  * rNumSort([10, 0, 2, 1]);
  * // -> [10, 2, 1, 0]
*/
export const rNumSort = (numberList) => {
  return numberList.sort(numericalCompareReverse);
};
assign(acid, {
  rNumSort
});
