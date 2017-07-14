import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that negates the result of the predicate method.
  *
  * @function negate
  * @type {Function}
  * @param {Function} method - The function to be invoked.
  * @returns {*} Returns the given methods result.
  *
  * @example
  * negate(() => { return false;})();
  * // => true
*/
export const negate = (method) => {
  return (...args) => {
    return !method(...args);
  };
};
assign(acid, {
  negate
});
