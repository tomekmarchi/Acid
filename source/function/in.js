import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
import { eachAsync } from '../array/eachAsync';
/**
  * Invoke an array of functions.
  *
  * @function inSync
  * @category function
  * @type {Function}
  * @param {Array|Object|Function} collection - The functions to be invoked.
  * @param {*} arg - The object passed as an argument to each method.
  * @returns {undefined} Returns undefined.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   inSync([() => {tempList.push(1);}, () => {tempList.push(2);}]);
  *   return assert(tempList, [1, 2]);
  * });
  *
  * @example
  * inSync([() => {console.log(1);}, () => {console.log(2);}]);
  * // 1
  * // 2
  * // => undefined
*/
export const inSync = (collection, value) => {
  return each(collection, (item) => {
    item(value);
  });
};
/**
  * Invoke an array of functions asynchronously. Each function is awaited to ensure execution order.
  *
  * @function inAsync
  * @category function
  * @type {Function}
  * @async
  * @param {Array|Object|Function} collection - The functions to be invoked.
  * @param {*} arg - The object passed as an argument to each method.
  * @returns {undefined} Returns undefined.
  *
  * @test
  * (async () => {
  *   const tempList = [];
  *   await inAsync([async () => {tempList.push(1);}, async () => {tempList.push(2);}]);
  *   return assert(tempList, [1, 2]);
  * });
  *
  * @example
  * inAsync([async () => {console.log(1);}, async () => {console.log(2);}]);
  * // 1
  * // 2
  * // => undefined
*/
export const inAsync = async (collection, value) => {
  return eachAsync(collection, async (item) => {
    await item(value);
  });
};
assign(acid, {
  inAsync,
  inSync,
});
