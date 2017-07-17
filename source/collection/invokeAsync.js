import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapAsync } from '../array/mapAsync';
/**
  * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
  *
  * @function invokeAsync
  * @type {Function}
  * @param {Array} collection - Collection from which method will be taken.
  * @param {string} methodName - Value used to pluck method from object.
  * @param {*} args - Values to be run through method.
  * @returns {Array} - Returns the results of the invoked method.
  *
  * @example
  * invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
  * // => [['lucy', 'Arity LLC'], ['lucy', 'Arity LLC']]
*/
const invokeAsync = (collection, property, args) => {
  return mapAsync(collection, async (item, index) => {
    return item[property](args, index);
  });
};
assign(acid, {
  invokeAsync
});
