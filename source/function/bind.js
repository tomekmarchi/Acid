import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isFunction } from '../internal/is';
import { map } from '../utility/each';
/**
  * Loops through an object or an array and binds the given object to all functions encountered.
  *
  * @function bindAll
  * @category function
  * @type {Function}
  * @param {Object|Function|Array} collection - The functions to bind.
  * @param {*} bindThis - Object to be bound to functions.
  * @returns {Object|Function|Array} Returns the method invoked or undefined.
  *
  * @example
  * const collection = bindAll([() => { return this;}], 'Lucy');
  * collection[0]();
  * // => 'Lucy'
  *
  * const collection = bindAll({a() { return this;}}, 'Lucy');
  * collection.a();
  * // => 'Lucy'
*/
export const bindAll = (collection, bindThis) => {
  return map(collection, (item) => {
    return isFunction(item) ? item.bind(bindThis) : item;
  });
};
assign(acid, {
  bindAll
});
