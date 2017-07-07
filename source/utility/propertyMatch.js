import acid from '../namespace/index';
import { eachWhile } from '../array/each';
import { isEqual } from './isEqual';
import { assign, keys } from '../internal/object';
/**
  * Using a deep comparison it checks if properties of two objects using an array are equal.
  *
  * @function propertyMatch
  * @type {Function}
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
  * //-> true
*/
export const propertyMatch = (object, compareObject, properties = keys(object)) => {
  let result = false;
  eachWhile(properties, (property) => {
    result = isEqual(object[property], compareObject[property]);
    return result;
  });
  return result;
};
assign(acid, {
  propertyMatch,
});
