import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Creates a function that provides value to wrapper as its first argument. The wrapper function is given two arguments the value and the provided argument from the newly created function.
  *
  * @function wrap
  * @category function
  * @type {Function}
  * @param {*} value - The value to wrap.
  * @param {Function} wrapper - The wrapper function.
  * @returns {Function} The new function.
  *
  * @example
  * wrap('Lucy', (firstName, lastName) => {console.log(`My name is ${firstName} ${lastName}.`);})('Diamonds');
  * // => 'My name is Lucy Diamonds.'
*/
export const wrap = (value, wrapper) => {
  return (arg) => {
    return wrapper(value, arg);
  };
};
assign(acid, {
  wrap,
});
