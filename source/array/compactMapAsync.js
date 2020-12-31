import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachAsync } from './eachAsync';
import { hasValue } from '../internal/is';
/**
  * Asynchronously iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
  *
  * @function compactMapAsync
  * @type {Function}
  * @category array
  * @async
  * @param {Array} array - Array to be compacted.
  * @param {Function} iteratee - Iteratee to be performed on array.
  * @returns {Array} Array values after being put through an iterator.
  *
  * @example
  * compactMapAsync([1, 2, 3, null], async (item) => {return item;});
  * // => [1, 2, 3]
*/
export const compactMapAsync = async (array, iteratee) => {
  const results = [];
  let result;
  await eachAsync(array, async (item, index, arrayLength) => {
    result = await iteratee(item, index, results, arrayLength);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
assign(acid, {
  compactMapAsync,
});
