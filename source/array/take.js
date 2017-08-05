import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Returns a shallow copy of the array up to an amount.
  *
  * @function take
  * @category Array
  * @type {Function}
  * @param {Array} array - The array to be evaluated.
  * @returns {Array} The aggregated array.
  *
  * @example
  * take([1,2,3], 2);
  * // => [1, 2]
*/
export const take = (array, amount = 1) => {
  return array.slice(0, amount);
};
/**
  * Returns a shallow copy of the array up to an amount starting from the right.
  *
  * @function takeRight
  * @type {Function}
  * @param {Array} array - The array to be evaluated.
  * @returns {Array} The aggregated array.
  *
  * @example
  * takeRight([1,2,3], 2);
  * // => [3, 2]
*/
export const takeRight = (array, amount = 1) => {
  return array.slice(array.length - amount, amount);
};
assign(acid, {
  take,
  takeRight
});
