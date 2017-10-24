import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Removes all occurrences of the passed in items from the array and returns the array. This mutates the given array. Clone the array if you desire to avoid mutation.
  *
  * @function remove
  * @category array
  * @param {Array} array - Array to be mutated.
  * @param {...(string|Array)} removeThese - Items to remove from the array.
  * @returns {Array} The array this method was called on.
  *
  * @example
  * remove([1, 2, 3, 3, 4, 3, 5], 1);
  * // => [2, 3, 3, 4, 3, 5]
  * @example
  * remove([3, 3, 4, 5], 3, 4);
  * // => [5]
*/
export const remove = (array, ...removeThese) => {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    const item = array[index];
    if (removeThese.includes(item)) {
      array.splice(index, 1);
      index--;
      arrayLength--;
    }
  }
  return array;
};
/**
  * Removes items that pass the method's test. This mutates the given array. Clone the array if you desire to avoid mutation.
  *
  * @function removeBy
  * @category array
  * @param {Array} array - Array to be mutated.
  * @param {Function} method - Function used to check object. Return true to remove the value.
  * @returns {Array} The array this method was called on.
  *
  * @example
  * removeBy([1, 2, 3, 3, 4, 3, 5], (item) => { return Boolean(item % 2);});
  * // => [2, 4]
*/
export const removeBy = (array, iteratee) => {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    const item = array[index];
    if (iteratee(item, index)) {
      array.splice(index, 1);
      index--;
      arrayLength--;
    }
  }
  return array;
};
assign(acid, {
  remove,
  removeBy
});
