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
  * @param {string} methodName - Value used to pluck method from object.
  * @param {*} args - Values to be run through method.
  * @returns {Array} - Returns the results of the invoked method.
  *
  * @example
  * invoke([{lucy(item, index) { return [item, index];}}, {lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
  * // => [['lucy', 'Arity LLC'], ['lucy', 'Arity LLC']]
*/
const invoke = (collection, property, args) => {
  return mapArray(collection, (item, index) => {
    return item[property](args, index);
  });
};
assign(acid, {
  invoke
});
