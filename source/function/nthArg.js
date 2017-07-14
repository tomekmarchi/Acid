import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
  *
  * @function nthArg
  * @type {Function}
  * @param {number} [index = 0] - The index of the argument to return.
  * @returns {Function} Returns the new pass-thru function.
  *
  * @example
  * nthArg(1)('a', 'b');
  * // => 'b'
*/
export const nthArg = (index = 0) => {
  return (...args) => {
    return args[index];
  };
};
assign(acid, {
  nthArg
});
