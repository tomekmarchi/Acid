import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Iterates through the given array of async function(s). Each async function is awaited as to ensure synchronous order and is given the supplied object.
  *
  * @function asyncEach
  * @type {Function}
  * @category array
  * @async
  * @param {Array} callingArray - Array of async functions that will be looped through.
  * Functions are given the supplied object, index, the calling array, and the array length.
  * @param {*} object - The first argument given to each function.
  * @returns {Object} The originally given array.
  *
  * @example
  * asyncEach([async (item, index) =>{
  *  console.log(item, index);
  * }, async (item) =>{
  *  console.log(item, index);
  * }], {a:1});
  * // {a:1} 0
  * // {a:1} 1
*/
export const asyncEach = async (callingArray, object) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    const item = callingArray[index];
    await item(object, index, callingArray, arrayLength);
  }
  return callingArray;
};
assign(acid, {
  asyncEach,
});
