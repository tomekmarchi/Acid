import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
/**
  * Takes all but the last item in the array.
  *
  * @function arrayToObject
  * @type {Function}
  * @param {Array} array - Array to have items extracted from.
  * @param {Array} properties - Array to have items extracted from.
  * @returns {Array} - Returns a completely flattened array.
  *
  * @example
  * arrayToObject([1, 2, 3], ['i', 'love', 'lucy']);
  * // => {i:1, love:2, lucy: 3}
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
