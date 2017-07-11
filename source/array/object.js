import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
/**
  * Takes all but the last item in the array.
  *
  * @function arrayToObject
  * @type {Function}
  * @param {Array} array - Array to have items extracted from.
  * @param {*} properties - Array to have items extracted from.
  * @returns {Array} - Returns a completely flattened array.
  *
  * @example
  * initial( [1, 2, 3, 4, 5]);
  * // => [1, 2, 3, 4]
*/
export const arrayToObject = (values, properties) => {
  const sortedObject = {};
  eachArray(values, (item, key) => {
    sortedObject[properties[key]] = item;
  });
  return sortedObject;
};
assign(acid, {
  arrayToObject
});
