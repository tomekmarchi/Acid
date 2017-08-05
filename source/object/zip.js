import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
import { eachObject } from './each';
/**
  * Creates an object from two arrays, one of property identifiers and one of corresponding values.
  *
  * @function zipObject
  * @type {Function}
  * @category Object
  * @param {Array} properties - The property identifiers.
  * @param {Array} values - The property values.
  * @returns {Object} - Returns the new object.
  *
  * @example
  * zipObject(['a', 'b'], [1, 2]);
  * // => { 'a': 1, 'b': 2 }
*/
export const zipObject = (properties, values) => {
  const zipedObject = {};
  eachArray(properties, (item, key) => {
    zipedObject[item] = values[key];
  });
  return zipedObject;
};
/**
  * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip object configuration.
  *
  * @function unZipObject
  * @type {Function}
  * @param {Object} object - The object to process.
  * @returns {Array} - Returns two arrays one of keys and the other of values inside a single array.
  *
  * @example
  * unZipObject({ 'a': 1, 'b': 2 });
  * // => [['a', 'b'], [1, 2]]
*/
export const unZipObject = (object) => {
  const keys = [];
  const values = [];
  eachObject(object, (item, key) => {
    keys.push(key);
    values.push(item);
  });
  return [keys, values];
};
assign(acid, {
  unZipObject,
  zipObject,
});
