import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
import { eachAsync } from '../array/eachAsync';
/**
  * Invoke an array of functions.
  *
  * @function curry
  * @type {Function}
  * @param {Array|Object|Function} collection - The functions to be invoked.
  * @param {*} arg - The object passed as an argument to each method.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * inSync([() => {console.log(1);}, () => {console.log(2);}]);
  * // 1
  * // 2
  * // => undefined
*/
export const inSync = (collection, arg) => {
  return each(collection, (item) => {
    item(arg);
  });
};
/**
  * Invoke an array of functions asynchronously. Each function is awaited to ensure execution order.
  *
  * @function curry
  * @type {Function}
  * @async
  * @param {Array|Object|Function} collection - The functions to be invoked.
  * @param {*} arg - The object passed as an argument to each method.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * inAsync([async () => {console.log(1);}, async () => {console.log(2);}]);
  * // 1
  * // 2
  * // => undefined
*/
export const inAsync = async (collection, arg) => {
  return eachAsync(collection, async (item) => {
    await item(arg);
  });
};
assign(acid, {
  inAsync,
  inSync,
});
