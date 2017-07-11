import acid from '../namespace/index';
import { assign } from '../internal/object';
import { filterObject } from './each';
/**
  * Returns a clone of the given object without the given properties.
  *
  * @function omit
  * @type {Function}
  * @param {Object} originalObject - Object from which keys are extracted.
  * @param {Array} array - Array of object keys.
  * @returns {Object} - A new object with the removed.
  *
  * @example
  * omit({a:1, b:2, ['a']});
  * //=> {b:2}
  *
*/
export const omit = (originalObject, array) => {
  return filterObject(originalObject, (item, key) => {
    return !array.includes(key);
  });
};
assign(acid, {
  omit
});
