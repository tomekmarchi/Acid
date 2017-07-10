import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from './each';
/**
  * Creates an inverted version of a given object.
  *
  * @function invert
  * @type {Function}
  * @param {Object} thisObject - Object which is inverted.
  * @param {Array} invertedObject - Empty object to be populated with inverted values from thisObject.
  * @returns {Object} - Returns inverted thisObject
  *
  * @example
  * invert({a:1});
  * //=> {1:a}
*/
export const invert = (thisObject, invertedObject = {}) => {
  eachObject(thisObject, (item, key) => {
    invertedObject[item] = key;
  });
  return invertedObject;
};
assign(acid, {
  invert,
});
