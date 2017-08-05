import acid from '../namespace/index';
import { assign } from './object';
/**
 * Calls a target function with arguments as specified.
 *
 * @function apply
 * @category function
 * @param {Function} target - The target function to call.
 * @param {*} thisArgument - Array like object.
 * @param {Array} argumentsList - An array-like object specifying the arguments with which target should be called.
 * @returns {*} The result of calling the given target function with the specified this value and arguments.
 *
 * @example
 * apply((a) => {return [this, a];}, 1, 2);
 * // => [1, 2]
*/
export const apply = Reflect.apply;
assign(acid, {
  apply
});
