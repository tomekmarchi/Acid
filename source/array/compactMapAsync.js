import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachAsync } from './eachAsync';
import { hasValue } from '../internal/is';
/**
  * Asynchronously performs a function on the items within an array.
  *
  * @function compactMapAsync
  * @type {Function}
  * @param {Array} array - Array to be compacted.
  * @param {Function} funct - Iteratee to be performed on array.
  * @returns {Array} Array values after being put through an iterator.
  *
  * @example
  * compactMapAsync([1,2,3], async () => {return item});
  * //=> [1, 2, 3]
*/
export const compactMapAsync = async (array, funct) => {
  const results = [];
  let result;
  await eachAsync(array, async (item, index, arrayLength) => {
    result = await funct(item, index, arrayLength);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
assign(acid, {
  compactMapAsync,
});
