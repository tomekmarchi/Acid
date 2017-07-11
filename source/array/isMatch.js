import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from './each';
/**
   * Performs a shallow strict comparison between two objects.
   *
   * @function isMatchArray
   * @type {Function}
   * @param {Array} source - Source object.
   * @param {Array} compareArray - Object to compare to source.
   * @returns {boolean} Returns the true or false.
   *
   * @example
   * isMatchArray([1, 2, 3], [1, 2, 3]);
   * // => true
 */
export const isMatchArray = (source, compareArray) => {
  if (compareArray.length === source.length) {
    return eachWhile(source, (item, index) => {
      return compareArray[index] !== item;
    });
  }
  return false;
};
assign(acid, {
  isMatchArray,
});
