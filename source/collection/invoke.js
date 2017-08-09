import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from '../array/each';
/**
  * Invokes a function on the provided property name in each object in the collection.
  *
  * @function invoke
  * @category collection
  * @type {Function}
  * @param {Array} collection - Collection from which method will be taken.
  * @param {string} property - Value used to pluck method from object.
  * @param {*} value - Value to be passed to callable property.
  * @returns {Array} - Returns the results of the invoked method.
  *
  * @example
  * invoke([{lucy(item, index) { return [item, index];}}, {lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
  * // => [['Arity LLC', 0], ['Arity LLC', 1]]
*/
const invoke = (collection, property, value) => {
  return mapArray(collection, (item, index) => {
    return item[property](value, index);
  });
};
assign(acid, {
  invoke
});
