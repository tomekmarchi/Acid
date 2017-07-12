import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Asynchronously Iterates through the given array. Each async function is awaited as to ensure synchronous order.
  *
  * @function eachAsync
  * @type {Function}
  * @async
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} The originally given array.
  *
  * @example
  * eachAsync([3,4], async (item, index) =>{
  *  console.log(item, index);
  * });
  * // 3 0
  * // 4 1
*/
export const eachAsync = async (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    await iteratee(callingArray[index], index, callingArray, arrayLength);
  }
  return callingArray;
};
/**
  * Asynchronously Iterates through the given array in reverse. Each async function is awaited as to ensure synchronous order.
  *
  * @function eachAsyncRight
  * @type {Function}
  * @async
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} The originally given array.
  *
  * @example
  * eachAsyncRight([3,4], async (item, index) =>{
  *  console.log(item, index);
  * });
  * // 4 1
  * // 3 0
*/
export const eachAsyncRight = async (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    await iteratee(callingArray[index], index, callingArray, arrayLength);
  }
  return callingArray;
};
assign(acid, {
  eachAsync,
  eachAsyncRight,
});
