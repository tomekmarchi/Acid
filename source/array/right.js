import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Get the item at the supplied index starting at the end of the array.
  *
  * @function right
  * @type {Function}
  * @category array
  * @param {Array} array - Array to be sliced.
  * @returns {*} - Returns the object at the evaluated position.
  *
  * @example
  * right([1, 2, 3, 4, 5] , 1);
  * // => 4
*/
export const right = (array, amount) => {
  return array[array.length - 1 - amount];
};
assign(acid, {
  right
});
