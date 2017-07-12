import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray, eachArrayRight } from '../array/each';
const returnFlow = (method) => {
  return (...methods) => {
    return (arg) => {
      let value = arg;
      method(methods, (item) => {
        value = item(value);
      });
      return value;
    };
  };
};
/**
  * Creates a function that returns the result of invoking the given functions, where each successive invocation is supplied the return value of the previous.
  *
  * @function flow
  * @type {Function}
  * @param {Array} eachArray - Array to flatten
  * @returns {*}
  *
  * @example
  * flow(increment, increment, deduct)(0);
  * // => 2
*/
export const flow = returnFlow(eachArray);
/**
  * This method is like flow except that it creates a function that invokes the given functions from right to left.
  *
  * @function flowRight
  * @type {Function}
  * @param {Array} eachArray - Array to flatten
  * @returns {*}
  *
  * @example
  * flowRight(increment, increment, deduct)(0);
  * // => 2
*/
export const flowRight = returnFlow(eachArrayRight);
assign(acid, {
  flow,
  flowRight,
});
