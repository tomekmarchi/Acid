import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isFunction } from '../internal/is';
import { map } from '../utility/each';
/**
  * Loops through an object or an array and binds the given object to all functions encountered.
  *
  * @function bindAll
  * @type {Function}
  * @param {Function} method - The function to be invoked if possible.
  * @param {...Array} args - Arguments to pass to the method.
  * @returns {*} Returns the method invoked or undefined.
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
export const bindAll = (bindThese, withThis) => {
  return map(bindThese, (item) => {
    return isFunction(item) ? item.bind(withThis) : item;
  });
};
assign(acid, {
  bindAll
});
