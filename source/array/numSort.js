import acid from '../namespace/index';
import { assign } from '../internal/object';
export const numericalCompare = (a, b) => {
  return a - b;
};
/**
  * Sorts an array in place using a numerical comparison algorithm from lowest to highest.
  *
  * @function numSort
  * @category array
  * @type {Function}
  * @param {Array} numberList - Array of numbers.
  * @returns {Array} The array this method was called on.
  *
  * @example
  * numSort([10, 0, 2, 1]);
  * // => [0, 1, 2, 10]
*/
export const numSort = (numberList) => {
  return numberList.sort(numericalCompare);
};
assign(acid, {
  numSort
});
