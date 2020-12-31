import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapAsync } from '../array/mapAsync';
/**
  * Asynchronously awaits & invokes a function on the provided property name in each object in the collection.
  *
  * @function invokeAsync
  * @category collection
  * @type {Function}
  * @async
  * @param {Array} collection - Collection from which method will be taken.
  * @param {string} property - Value used to pluck method from object.
  * @param {*} value - Value to be passed to callable property.
  * @returns {Array} - Returns the results of the invoked method.
  *
  * @test
  * (async () => {
  *   const result = await invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
  *   return assert(result, [['Arity LLC', 0], ['Arity LLC', 1]]);
  * });
  *
  * @example
  * invokeAsync([{async lucy(item, index) { return [item, index];}}, {async lucy(item, index) { return [item, index];}}], 'lucy', 'Arity LLC');
  * // => [['Arity LLC', 0], ['Arity LLC', 1]]
*/
const invokeAsync = (collection, property, value) => {
  return mapAsync(collection, async (item, index) => {
    return item[property](value, index);
  });
};
assign(acid, {
  invokeAsync
});
