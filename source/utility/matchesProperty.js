import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from '../array/each';
/**
*   matchesProperty compares the properties of two objects.
*   @property {object} - takes an object
*   @property {compareObject} - takes an object
*   @property {properties} - takes in an array of properties
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
* //-> True, false
*   @returns
*   Boolean
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
