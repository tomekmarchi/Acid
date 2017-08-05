import acid from '../namespace/index';
import { assign } from '../internal/object';
const onlyUnique = (value, index, array) => {
  return array.indexOf(value) === index;
};
const sortUnique = (item, index, array) => {
  return item !== array[index - 1];
};
/**
  * Filters the array down to unique elements.
  *
  * @function unique
  * @category Array
  * @type {Function}
  * @param {Array} array - The array to be filtered.
  * @returns {Array} The filtered array.
  *
  * @example
  * unique([1, 2, 2, 4]);
  * // => [1, 2, 4]
*/
export const unique = (array, isSorted) => {
  if (isSorted) {
    return array.filter(sortUnique);
  }
  return array.filter(onlyUnique);
};
assign(acid, {
  unique
});
