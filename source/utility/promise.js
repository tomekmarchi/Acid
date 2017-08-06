import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * A wrapper around the promise constructor.
  *
  * @function promise
  * @type {Function}
  * @category utility
  * @param {Function} callback - Function to be called back.
  * @returns {Object} - A constructor with a callback function.
  *
  * @example
  * promise((a) => {});
  * // => promise((a) => {})
*/
export const promise = (callback) => {
  return new Promise(callback);
};
assign(acid, {
  promise
});
