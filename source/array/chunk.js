import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Chunks an array according to a user defined number.
  *
  * @function chunk
  * @type {Function}
  * @param {Array} array - Array to be chunked.
  * @param {number} size - Number which determines the size of each chunk.
  * @returns {Array} - A chunked version of the source array.
  *
  * @example
  *  chunk([1,2,3], 1);
  * // => [[1],[2],[3]]
*/
export const chunk = (array, size = 1) => {
  const chunked = [];
  let index = 0;
  array.forEach((item, key) => {
    if (!(key % size)) {
      chunked.push([]);
      if (key) {
        index++;
      }
    }
    chunked[index].push(item);
  });
  return chunked;
};
assign(acid, {
  chunk,
});
