import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachAsync } from './eachAsync';
/**
  * Asynchronously iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
  *
  * @function mapAsync
  * @category array
  * @type {Function}
  * @async
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Array} An array of the same calling array's type.
  *
  * @example
  * mapAsync([1, 2, 3], (item) => {
  *   return item * 2;
  * });
  * // => [2, 4, 6]
*/
export const mapAsync = async (array, iteratee) => {
  const results = [];
  await eachAsync(array, async (item, index, arrayLength) => {
    results[index] = await iteratee(item, index, arrayLength);
  });
  return results;
};
assign(acid, {
  mapAsync,
});
