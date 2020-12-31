import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that invokes method with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
  *
  * @function reArg
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @param {Array} indexes - The arranged argument indexes.
  * @returns {Function} Returns the new function.
  *
  * @example
  * reArg((a, b, c) => {
  *   return [a, b, c];
  * }, [1,2,0])(1,2,3);
  * // => [2, 3, 1]
*/
export const reArg = (callable, indexes) => {
  return (...args) => {
    return callable(...indexes.map((item) => {
      return args[item];
    }));
  };
};
assign(acid, {
  reArg
});
