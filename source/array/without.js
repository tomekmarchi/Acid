import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Returns a copy of the array with all instances of the values removed.
  *
  * @function without
  * @type {Function}
  * @category array
  * @param {Array} array - The array to be filtered.
  * @param {Array} removeThese - Items to be removed.
  * @returns {Array} The filtered array.
  *
  * @example
  * without([1, 2, 2, 4], [4]);
  * // => [1, 2, 2]
*/
const without = (array, removeThese) => {
  return array.filter((item) => {
    return !removeThese.includes(item);
  });
};
assign(acid, {
  without
});
