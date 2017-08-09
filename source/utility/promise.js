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
  * @test
  * (async () => {
  *   const result = await promise((accept) => {
  *     accept(true);
  *   });
  *   return assert(result, true);
  * });
  *
  * @example
  * promise((a) => {});
  * // => Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
*/
export const promise = (callback) => {
  return new Promise(callback);
};
assign(acid, {
  promise
});
