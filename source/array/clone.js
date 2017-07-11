import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Clears the values out of an array.
  *
  * @function cloneArray
  * @type {Function}
  * @param {Array} array - Takes an array to be cloned.
  * @returns {Array} The originally given array.
  *
  * @example
  * cloneArray([1,'B', Cat]);
  * //=> [1, 'B', Cat]
*/
export const cloneArray = (array) => {
  return array.slice();
};
assign(acid, {
  cloneArray
});
