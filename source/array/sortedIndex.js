import acid from '../namespace/index';
import { assign } from '../internal/object';
import { whileArray } from './each';
/**
   * Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
   *
   * @function sortedIndex
   * @category Array
   * @type {Function}
   * @param {Array} array - Array to be sorted.
   * @returns {Array} The sorted array.
   *
   * @example
   * sortedIndex([1,2,3]);
   * // => 1
 */
const sortedIndex = (array, n) => {
  let min = 0;
  whileArray(array, (item, index) => {
    if (n > item) {
      min = index;
    } else {
      return false;
    }
    return true;
  });
  if (min > 0) {
    min = min + 1;
  }
  return min;
};
assign(acid, {
  sortedIndex
});
