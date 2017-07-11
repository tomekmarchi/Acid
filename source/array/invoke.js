import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from './each';
/**
  * Invokes a function on the provided property name in each object in the collection
  *
  * @function invoke
  * @type {Function}
  * @param {Array} collection - Collection from which method will be taken.
  * @param {String|Array} methodName - Value used to pluck method from array|object nest.
  * @param {*} args - Values to be run through method.
  * @returns {Array} - Returns the results of the invoked method.
  *
  * @example
  * invoke()
  * // =>
*/
const invoke = (collection, property, args) => {
  return mapArray(array, (item) => {
    return item[property](...args);
  });
};
assign(acid, {
  invoke
});
