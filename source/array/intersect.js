import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile, compactMapArray } from './each';
/**
 * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
 * of the array and the input array(s).
 *
 * @function intersect
 * @param {Array} array - Array to compare other arrays to.
 * @param {...Array} arrays - A variable number of arrays.
 * @returns {Array} The new array of unique values shared by all of the arrays.
 *
 * @example
 * intersect([1, 2, 3], [2, 3, 4]);
 * // -> [2, 3]
 *
 * intersect([1, 2, 3], [101, 2, 50, 1], [2, 1]);
 * // -> [1, 2]
 */
export const intersect = (array, ...arrays) => {
  let yes;
  return compactMapArray(array, (item) => {
    yes = true;
    eachWhile(arrays, (otherItem) => {
      if (!otherItem.includes(item)) {
        yes = false;
      }
      return yes;
    });
    if (yes) {
      return item;
    }
  });
};
assign(acid, {
  intersect
});
