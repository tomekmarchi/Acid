import acid from '../namespace/index';
import { assign } from '../internal/object';
import { ensureArray } from '../array/ensure';
import { isArray } from '../internal/is';
/**
  * Flattens an array up to the provided level.
  *
  * @function flatten
  * @type {Function}
  * @category array
  * @param {Array} array - Array to flatten.
  * @param {number} [level = 1] - Number which determines how deep the array nest can be.
  * @returns {Array} - Returns an array.
  *
  * @example
  * flatten([1, [2, [3, [4]], 5]]);
  *  // => [1, 2, [3, [4]], 5]
*/
export const flatten = (arrayArg, level = 1) => {
  let array = arrayArg;
  for (let i = 0; i < level; i++) {
    array = array.reduce((previousValue, currentValue) => {
      return previousValue.concat(ensureArray(currentValue));
    }, []);
  }
  return array;
};
/**
  * Flattens an array to a single level.
  *
  * @function flattenDeep
  * @type {Function}
  * @category array
  * @param {Array} array - Array to flatten.
  * @returns {Array} - Returns a completely flattened array.
  *
  * @example
  * flattenDeep([1, [2, [3, [4]], 5]]);
  * // => [1, 2, 3, 4, 5]
*/
export const flattenDeep = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return previousValue.concat((isArray(currentValue)) ? flattenDeep(currentValue) : currentValue);
  }, []);
};
assign(acid, {
  flatten,
  flattenDeep,
});
