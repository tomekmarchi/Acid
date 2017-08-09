import acid from '../namespace/index';
import { assign } from '../internal/object';
import { compactMapArray } from './each';
import { flattenDeep } from './flatten';
/**
  * Checks for differences between arrays, then creates an array based on those differences.
  *
  * @function difference
  * @category array
  * @type {Function}
  * @param {Array} array - Source array.
  * @param {Array} compare - Array source array is compared against.
  * @returns {Array} An array which contains the differences between the source and compare array.
  *
  * @example
  * difference([1, 2, 3], [1, 2]);
  * // => [3]
*/
export const difference = (array, ...compares) => {
  const compare = flattenDeep(compares);
  return compactMapArray(array, (item) => {
    if (!compare.includes(item)) {
      return item;
    }
  });
};
assign(acid, {
  difference
});
