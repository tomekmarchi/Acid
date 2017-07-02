import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
import { ensureArray } from './ensure';
/**
 * Removes all occurrences of the passed in items from the array and returns the array.
 *
 * @function remove
 * @param {Array} array - Mutated Array without with removed occurrences.
 * @param {Array} removeThese - Items to remove from the array.
 * @returns {Array} The array this method was called on.
 *
 * @example
 * const array = [1, 2, 3, 3, 4, 3, 5];
 *
 * remove(array,1);
 * // -> [2, 3, 3, 4, 3, 5]
 *
 * remove(array,3);
 * // -> [2, 4, 5]
 *
 * remove(array,[2, 5]);
 * // -> [4]
 */
export const remove = (array, removeThese) => {
  const removeTheseArray = ensureArray(removeThese);
  eachArray(array, (item) => {
    if (removeTheseArray.includes(item)) {
      array.splice(array, removeTheseArray.indexOf(item), 1);
    }
  });
  return array;
};
assign(acid, {
  remove
});
