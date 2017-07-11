import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray, eachArrayRight } from './each';
import { hasValue } from '../internal/is';
const returnFlow = (method) => {
  return (...funcs) => {
    return (arg) => {
      let value;
      method(funcs, (item) => {
        const temp = (hasValue(value)) ? value : arg;
        value = item(temp);
      });
      return value;
    };
  };
};
/**
  * Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
  *
  * @function flow
  * @type {Function}
  * @param {Array} eachArray - Array to flatten
  * @returns {*}
  *
  * @example
  * flow()
  *  // =>
*/
export const flow = returnFlow(eachArray);
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
export const flowRight = returnFlow(eachArrayRight);
assign(acid, {
  flow,
  flowRight,
});
