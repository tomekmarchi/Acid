import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that invokes method with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
  *
  * @function over
  * @type {Function}
  * @param {Function} method - The function to be invoked.
  * @param {Array} indexes - The arranged argument indexes.
  * @returns {Function} Returns the new function.
  *
  * @example
  * const reArged = ((a, b, c) => {
  *   return [a, b, c];
  * }, [1,2,0]);
  * reArged(1,2,3);
  * // => [2, 3, 1]
*/
export const reArg = (method, indexes) => {
  return (...args) => {
    return method(...indexes.map((item) => {
      return args[item];
    }));
  };
};
assign(acid, {
  reArg
});
