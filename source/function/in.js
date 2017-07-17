import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
import { eachAsync } from '../array/eachAsync';
/**
  * Invoke an array of functions.
  *
  * @function curry
  * @type {Function}
  * @param {Function} methods - The functions to be invoked.
  * @param {*} arg - The object passed to each method.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * inSync([() => {console.log(1);}, () => {console.log(2);}]);
  * // 1
  * // 2
  * // => undefined
*/
export const inSync = (methods, arg) => {
  return each(methods, (item) => {
    item(arg);
  });
};
/**
  * Invoke an array of functions asynchronously. Each function is awaited to ensure execution order.
  *
  * @function curry
  * @type {Function}
  * @param {Function} methods - The functions to be invoked.
  * @param {*} arg - The object passed to each method.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * inAsync([async () => {console.log(1);}, async () => {console.log(2);}]);
  * // 1
  * // 2
  * // => undefined
*/
export const inAsync = async (methods, arg) => {
  return eachAsync(methods, async (item) => {
    await item(arg);
  });
};
assign(acid, {
  inAsync,
  inSync,
});
