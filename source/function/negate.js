import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that negates the result of the predicate callable.
  *
  * @function negate
  * @type {Function}
  * @param {Function} callable - The function to be invoked.
  * @returns {*} Returns the given methods result.
  *
  * @example
  * negate(() => { return false;})();
  * // => true
*/
export const negate = (callable) => {
  return (...args) => {
    return !callable(...args);
  };
};
assign(acid, {
  negate
});
