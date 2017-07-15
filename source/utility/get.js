import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
import { toPath } from '../utility/toPath';
import { whileArray } from '../array/each';
/**
  * Returns property on an object.
  *
  * @function get
  * @type {Function}
  * @param  {string} propertyString - String used to retrieve properties.
  * @param {Object} objectChain - Object which has a property retrieved from it.
  * @returns {Object} - Returns property from the given object.
  *
  * @example
  * get('post.like[2]', {
  *   post: {
  *     like: ['a','b','c']
  *   }
  * });
  * //=> c
*/
export const get = (propertyString, objectChain = acid) => {
  let link = objectChain;
  whileArray(toPath(propertyString), (item) => {
    link = link[item];
    return hasValue(link);
  });
  return link;
};
assign(acid, {
  get
});
