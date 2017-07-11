import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Extracts all items in array except the first and last item.
  *
  * @function rest
  * @type {Function}
  * @param {Array} array - Array to be sliced.
  * @returns {Array} -
  *
  * @example
  * rest([1, 2, 3, 4, 5]);
  * // => [2, 3, 4, 5]
*/
export const rest = (array) => {
  return array.slice(1, array.length - 1);
};
assign(acid, {
  rest
});
