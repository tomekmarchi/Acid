import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachWhile } from '../array/each';
import { hasValue } from '../internal/is';
import { toPath } from '../utility/toPath';
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
  * const api = {
  *  post: {
  *   like: ['a','b','c']
  *  }
  * }
  * get('post.like[2]', api);
  * //=> c
  *
*/
export const get = (propertyString, objectChain = acid) => {
  let link = objectChain;
  eachWhile(toPath(propertyString), (item) => {
    link = link[item];
    return hasValue(link);
  });
  return link;
};
assign(acid, {
  get
});
