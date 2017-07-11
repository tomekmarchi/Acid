import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from './each';
/**
  * Runs a method on each item in an collection.
  *
  * @function invoke
  * @type {Function}
  * @param {Array} array - Array from which method will be taken.
  * @param {String|Array} methodName - Value used to pluck method from array|object nest.
  * @param {*} args - Values to be run through method.
  * @returns {Array} - Returns the results of the invoked method.
  *
  * @example
  * invoke()
  * // =>
*/
const invoke = (array, methodName, args) => {
  return mapArray(array, (item) => {
    return item[methodName](...args);
  });
};
assign(acid, {
  invoke
});
