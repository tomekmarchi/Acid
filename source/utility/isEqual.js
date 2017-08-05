import acid from '../namespace/index';
import { whileArray } from '../array/each';
import { isMatchArray } from '../array/isMatch';
import { assign, keys } from '../internal/object';
import { isArray, isPlainObject } from '../internal/is';
/**
   * Performs a deep comparison between two objects.
   *
   * @function isEqual
   * @type {Function}
   * @category Utility
   * @param {Object} source - Source object.
   * @param {Object} compareObject - Object to compare to source.
   * @returns {boolean} Returns the true or false.
   *
   * @example
   * isEqual({a: [1,2,3]}, {a: [1,2,3]});
   * // => true
 */
export const isEqual = (object, compareObject) => {
  if (object === compareObject) {
    return true;
  } else if (object.toString() === compareObject.toString()) {
    if (isPlainObject(object)) {
      const sourceProperties = keys(object);
      if (isMatchArray(sourceProperties, keys(compareObject))) {
        return whileArray(sourceProperties, (key) => {
          return isEqual(object[key], compareObject[key]);
        });
      }
    } else if (isArray(object)) {
      if (object.length === compareObject.length) {
        return whileArray(object, (item, index) => {
          return isEqual(item, compareObject[index]);
        });
      }
    }
  }
  return false;
};
assign(acid, {
  isEqual,
});
