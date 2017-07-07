import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from '../array/each';
/**
  *   Compares the properties of two objects.
  *
  *   @function propertyMatch
  *   @type {Function}
  *   @param {Object} object - Takes an object to be compared against compareObject.
  *   @param {Object} compareObject - Takes an object to be compared against object..
  *   @param {Array} properties - Takes in an array of properties.
  *   @returns {boolean} - Returns boolean value based on result of strict comparison between object properties.
  *
  *   @example
  *    const objOne = {
  *      a:1,
  *      b:2
  *    };
  *    const objTwo = {
  *       a:1,
  *       b:3
  *    };
  *     const propertiesToCompare = [a, b];
  *     matchesProperty(objOne, objTwo, propertiesToCompare );
  * //=> True, false
*/
export const propertyMatch = (object, compareObject, properties) => {
  let result = false;
  eachWhile(properties, (property) => {
    result = object[property] === compareObject[property];
    return result;
  });
  return result;
};
assign(acid, {
  propertyMatch,
});
