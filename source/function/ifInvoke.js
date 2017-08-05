import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isFunction } from '../internal/is';
/**
  * Checks if the given method is a function. If it is then it invokes it with the given arguments.
  *
  * @function ifInvoke
  * @category function
  * @type {Function}
  * @param {Function} callable - The function to be invoked if possible.
  * @param {...Array} args - Arguments to pass to the method.
  * @returns {*} Returns the method invoked or undefined.
  *
  * @example
  * ifInvoke((...args) => { return args;}, 1, 2);
  * // => [1, 2]
  * ifInvoke(undefined, 1, 2);
  * // => undefined
*/
export const ifInvoke = (callable, ...args) => {
  if (isFunction(callable)) {
    return callable(...args);
  }
};
assign(acid, {
  ifInvoke
});
