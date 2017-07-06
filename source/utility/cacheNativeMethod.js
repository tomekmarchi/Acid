import acid from '../namespace/index';
import { assign } from '../internal/object';
const functionPrototype = Function.prototype;
/**
  * Caches a prototype method.
  *
  * @function cacheNativeMethod
  * @type {Function}
  * @param {Function} method - Prototype method.
  * @returns {Function} Cached method.
  *
  * @example
  * cacheNativeMethod(Array.prototype.push);
  * // => function call() { [native code] }
*/
export function cacheNativeMethod(method) {
  return functionPrototype.call.bind(method);
}
assign(acid, {
  cacheNativeMethod
});
