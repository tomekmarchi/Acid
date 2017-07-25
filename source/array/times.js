import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
/**
  * Iterates based on a start index and an end index. The loop ends when the start index is equal to the end index.
  *
  * @function times
  * @type {Function}
  * @param {number} startIndex - The number to start loop from.
  * @param {number} endIndex - The number to stop at the loop.
  * @param {Function} iteratee - Transformation function which is passed position, start, and end.
  * @returns {undefined} Nothing.
  *
  * @example
  * times(0, 3, (item) => {
  *   console.log(item);
  * });
  * //Will log
  * // 0
  * // 1
  * // 2
  * // => undefined
*/
export const times = (startIndex, endIndex, iteratee) => {
  const start = (iteratee) ? startIndex : 0;
  const end = (iteratee) ? endIndex : startIndex;
  const iterateeMethod = iteratee || endIndex;
  for (let position = start; position < end; position++) {
    iterateeMethod(position, start, end);
  }
};
/**
  * Iterates based on a start index and end index. Creates an array with the results of the iteratee on every element in the calling array. The loop ends when the start index is equal to the end index.
  *
  * @function timesMap
  * @category Utility
  * @type {Function}
  * @param {number} startIndex - The number to start loop from.
  * @param {number} endIndex - The number to stop at the loop.
  * @param {Function} iteratee - Transformation function which is passed position, start, and end.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} An array with iteratee's returned values.
  *
  * @example
  * timesMap(0, 3, (item) => {
  *   console.log(item);
  * });
  * // => [0, 1, 2]
*/
export const timesMap = (startIndex, endIndex, iteratee, results = []) => {
  const start = (iteratee) ? startIndex : 0;
  const end = (iteratee) ? endIndex : startIndex;
  const iterateeMethod = iteratee || endIndex;
  let result;
  times(start, end, (position) => {
    result = iterateeMethod(results, position, start, end);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
assign(acid, {
  times,
  timesMap,
});
