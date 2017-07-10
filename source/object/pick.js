import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
/**
  * Returns a clone of the original object with the plucked values.
  *
  * @function pick
  * @type {Function}
  * @param {Array} array - Array used to determine what values to be plucked.
  * @param {Object} originalObject - Object to be cloned.
  * @param {Object} [newObject = {}] - Object to be populated with plucked values.
  * @returns {Object} - A new object with plucked values.
  *
  * @example
  * pick({a:1, b:2, c:3}, ['a','b']);
  * //=> {a:1, b:2}
*/
const pick = (originalObject, array, newObject = {}) => {
  eachArray(array, (item) => {
    newObject[item] = originalObject[item];
  });
  return newObject;
};
assign(acid, {
  pick
});
