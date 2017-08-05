import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachAsync, eachAsyncRight } from '../array/eachAsync';
const returnFlow = (callable) => {
  return (...methods) => {
    return async (arg) => {
      let value = arg;
      await callable(methods, async (item) => {
        value = await item(value);
      });
      return value;
    };
  };
};
/**
  * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
  *
  * @function flowAsync
  * @category utility
  * @type {Function}
  * @async
  * @param {Array} collection - Methods to invoke.
  * @returns {Function} Returns the new composite function.
  *
  * @example
  * flowAsync(increment, increment, deduct)(0);
  * // => 2
*/
export const flowAsync = returnFlow(eachAsync);
/**
  * This method is like flow except that it creates a function that invokes the given functions from right to left.
  *
  * @function flowRightAsync
  * @category utility
  * @type {Function}
  * @async
  * @param {Array} collection - Methods to invoke.
  * @returns {Function} Returns the new composite function.
  *
  * @example
  * flowRightAsync(increment, increment, deduct)(0);
  * // => 2
*/
export const flowAsyncRight = returnFlow(eachAsyncRight);
assign(acid, {
  flowAsync,
  flowAsyncRight,
});
