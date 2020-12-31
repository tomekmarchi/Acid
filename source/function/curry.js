import acid from '../namespace/index';
import { assign } from '../internal/object';
import { clear } from '../array/clear';
/**
  * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method length is not sufficient.
  *
  * @function curry
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to curry.
  * @param {number} arity - The arity of method.
  * @returns {*} Returns the new curried function.
  *
  * @example
  * curry((a, b, c) => {
  *   return [a, b, c];
  * })(1)(2)(3);
  * // => [1, 2, 3]
*/
export const curry = (callable, arity = callable.length) => {
  const curries = [];
  const curried = (...curryArgs) => {
    curries.push(...curryArgs);
    if (curries.length === arity) {
      const result = callable(...curries);
      clear(curries);
      return result;
    }
    return curried;
  };
  return curried;
};
/**
  * Creates a function that accepts arguments of method and either invokes method returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining method arguments, and so on. The arity of method may be specified if method.length is not sufficient. The arguments are given in reverse order.
  *
  * @function curryRight
  * @type {Function}
  * @param {Function} callable - The function to curry.
  * @param {number} arity - The arity of method.
  * @returns {*} Returns the new curried function.
  *
  * @example
  * curryRight((a, b, c) => {
  *   return [a, b, c];
  * })(1)(2)(3);
  * // => [3, 2, 1]
*/
export const curryRight = (callable, arity = callable.length) => {
  const curries = [];
  const curried = (...curryArgs) => {
    curries.unshift(...curryArgs);
    if (curries.length === arity) {
      const result = callable(...curries);
      clear(curries);
      return result;
    }
    return curried;
  };
  return curried;
};
assign(acid, {
  curry,
  curryRight
});
