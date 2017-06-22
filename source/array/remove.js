import acid from '../namespace/index';
import { assign } from '../internal/object';
import { ensureArray } from './ensure';
import { eachArray } from './each';
/**
 * Removes all occurrences of the passed in items from the array and returns the array.
 *
 * __Note:__ Unlike {@link Array#without|`.without()`}, this method mutates the array.
 *
 * @function Array#remove
 * @param {...*} *items - Items to remove from the array.
 * @returns {Array} The array this method was called on.
 *
 * @example
 * var array = [1, 2, 3, 3, 4, 3, 5];
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
export const remove = (array, removeTheseArg) => {
  const removeThese = ensureArray(removeTheseArg);
  eachArray(array, (item, index) => {
    if (removeThese.includes(item)) {
      array.splice(array, index, 1);
    }
  });
  return array;
};
assign(acid, {
  remove
});
