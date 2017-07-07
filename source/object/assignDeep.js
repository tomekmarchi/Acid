import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from './each';
import { isArray, isPlainObject } from '../internal/is';
/**
  * Creates new object with deeply assigned values from another object/array.
  *
  * @function assignDeep
  * @type {Function}
  * @param {Object} object - Object to be assigned new properties.
  * @param {Object} otherObject - Object from which properties are extracted.
  * @param {Array} mergeArrays - Array from which items are assigned to the new object.
  * @returns {Object} - Returns object with new properties.
  *
  * @example
  * assignDeep({a:1}, {b:2})
  * //=> {a:1, b:2}
  *
*/
export const assignDeep = (object, otherObject, mergeArrays) => {
  eachObject(otherObject, (item, key) => {
    if (isPlainObject(item) && isPlainObject(object[key])) {
      assignDeep(object[key], item, mergeArrays);
    } else if (mergeArrays && isArray(item) && isArray(object[key])) {
      object[key].push(...item);
    } else {
      object[key] = item;
    }
  });
  return object;
};
assign(acid, {
  assignDeep
});
