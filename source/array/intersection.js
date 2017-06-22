import acid from '../namespace/index';
import { assign } from '../internal/object';
import { filterArray, eachArray } from './each';
/**
 * Returns an new array that is the [set intersection](http://en.wikipedia.org/wiki/Intersection_(set_theory))
 * of the array and the input array(s).
 *
 * @function Array#intersect
 * @param {...Array} *arrays - A variable number of arrays.
 * @returns {Array} The new array of unique values shared by all of the arrays.
 *
 * @example
 * $.intersect([1, 2, 3], [2, 3, 4]);
 * // -> [2, 3]
 *
 * $.intersect([1, 2, 3], [101, 2, 50, 1], [2, 1]);
 * // -> [1, 2]
 */
export const intersection = (array, ...args) => {
  let yes;
  return filterArray(array, (item) => {
    yes = true;
    eachArray(args, (otherItem) => {
      if (!otherItem.includes(item)) {
        yes = false;
      }
    });
    if (yes) {
      return item;
    }
  });
};
assign(acid, {
  intersection
});
