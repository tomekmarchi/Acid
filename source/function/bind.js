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
  * bindAll([function () { return this;}], 'Lucy')[0]().toString();
  * // => 'Lucy'
  * @example
  * bindAll({a() { return this;}}, 'Lucy').a().toString();
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
