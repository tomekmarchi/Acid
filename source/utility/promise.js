import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * A wrapper around the promise constructor.
  *
  * @function promise
  * @type {Function}
  * @param {Function} callback - Function to be called back.
  *
  * @example
  * promise((a) => {});
  * //=> promise((a) => {})
  * @returns {Object} - A constructor with a callback function
  *
*/
export const promise = (callback) => {
  return new Promise(callback);
};
assign(acid, {
  promise
});
