import acid from '../namespace/index';
import { assign } from '../internal/object';
import { whileArray } from './each';
/**
   * Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
   *
   * @function sortedIndex
   * @category array
   * @type {Function}
   * @param {Array} array - Array to be sorted.
   * @param {number} insertThis - Number to be inserted.
   * @returns {number} The index at which to insert.
   *
   * @example
   * sortedIndex([30, 50], 40);
   * // => 1
 */
const sortedIndex = (array, insertThis) => {
  let min = 0;
  whileArray(array, (item, index) => {
    min = index;
    if (insertThis > item) {
      return true;
    } else {
      return false;
    }
  });
  return min;
};
assign(acid, {
  sortedIndex
});
