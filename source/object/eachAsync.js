import acid from '../namespace/index';
import { eachAsync } from '../array/eachAsync';
import { assign, keys } from '../internal/object';
/**
  * Asynchronously iterates through the given object.
  *
  * @function eachObjectAsync
  * @category object
  * @type {Function}
  * @param {Object|Function} callingObject - Object that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, calling object, key count, and array of keys.
  * @returns {Object|Function} Returns the calling object.
  *
  * @test
  * (async () => {
  *   const tempList = {};
  *   await eachObjectAsync({a: 1, b: 2, c: 3}, async (item, key) => {
  *     tempList[key] = item;
  *   });
  *   return assert(tempList, {a: 1, b: 2, c: 3});
  * });
  *
  * @example
  * eachObjectAsync({a: 1, b: 2, c: 3}, (item) => {
  *   console.log(item);
  * });
  * // => {a: 1, b: 2, c: 3}
*/
export const eachObjectAsync = async (thisObject, iteratee) => {
  const objectKeys = keys(thisObject);
  await eachAsync(objectKeys, (key, index, array, propertyCount) => {
    return iteratee(thisObject[key], key, thisObject, propertyCount, objectKeys);
  });
  return thisObject;
};
assign(acid, {
  eachObjectAsync,
});
