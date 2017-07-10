import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Iterates through the given array using an async function. Each async function is awaited as to ensure synchronous order.
  *
  * @function eachAsync
  * @type {Function}
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
assign(acid, {
  eachAsync,
});
