import acid from '../namespace/index';
import { whileArray } from '../array/each';
import { isMatchArray } from '../array/isMatch';
import { assign, keys } from '../internal/object';
/**
   * Performs a shallow strict comparison between two objects.
   *
   * @function isMatchObject
   * @type {Function}
   * @category object
   * @param {Object} source - Source object.
   * @param {Object} compareObject - Object to compare to source.
   * @returns {boolean} Returns the true or false.
   *
   * @example
   * isMatchObject({a: 1}, {a: 1});
   * // => true
 */
export const isMatchObject = (source, compareObject) => {
  const sourceProperties = keys(source);
  if (isMatchArray(sourceProperties, keys(compareObject))) {
    return whileArray(sourceProperties, (key) => {
      return source[key] === compareObject[key];
    });
  }
  return false;
};
assign(acid, {
  isMatchObject,
});
