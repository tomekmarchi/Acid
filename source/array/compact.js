import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isString } from '../internal/is';
/**
  * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  *
  * @function compact
  * @type {Function}
  * @param {Array} array - Array to be compacted.
  * @returns {Array} The new array of filtered values.
  *
  * @example
  * compact([1,'B', Cat, false, null, 0 , '', undefined, NaN]);
  * // => [1, 'B', Cat]
*/
export const compact = (array) => {
  return array.filter((item) => {
    return isString(item) && !item.length ? false : item;
  });
};
assign(acid, {
  compact,
});
