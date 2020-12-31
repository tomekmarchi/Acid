import acid from '../namespace/index';
import { assign } from '../internal/object';
const functionPrototype = Function.prototype;
/**
  * Caches a prototype method.
  *
  * @function cacheNativeMethod
  * @category utility
  * @type {Function}
  * @param {Function} method - Prototype method.
  * @returns {Function} - Cached method.
  *
  * @example
  * cacheNativeMethod(Array.prototype.push)([], 1);
  * // => 1
*/
export function cacheNativeMethod(method) {
  return functionPrototype.call.bind(method);
}
assign(acid, {
  cacheNativeMethod
});
