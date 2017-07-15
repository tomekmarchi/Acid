import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
  *
  * @function ary
  * @type {Function}
  * @param {Function} func - The function to cap arguments for.
  * @param {number} amount - The arity cap.
  * @returns {Object} Returns the new capped function.
  *
  * @example
  * ary((...args) => { return args }, 2)(1, 2, 3);
  * // => [1, 2]
*/
export const ary = (func, amount) => {
  return (...args) => {
    return func(...args.splice(0, amount));
  };
};
assign(acid, {
  ary
});
