import acid from '../namespace/index';
import { isEqual } from './isEqual';
import { whileArray } from '../array/each';
import { assign, keys } from '../internal/object';
/**
  * Using a deep comparison it checks if properties of two objects using an array are equal.
  *
  * @function propertyMatch
  * @type {Function}
  * @category utility
  * @property {Object} - takes an object.
  * @property {Object} - takes an object.
  * @property {Array} - takes in an array of properties.
  *
  * @example
  * propertyMatch({
  *   a: 1,
  *   b: 2
  * }, {
  *   a: 1,
  *   b: 2
  * }, ['a', 'b']);
  * // => true
*/
export const propertyMatch = (object, compareObject, properties = keys(object)) => {
  return whileArray(properties, (property) => {
    return isEqual(object[property], compareObject[property]);
  });
};
assign(acid, {
  propertyMatch,
});
