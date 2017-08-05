import acid from '../namespace/index';
import { whileArray } from '../array/each';
import { assign, keys } from '../internal/object';
/**
  * Checks to see if an object has all of the given property names.
  *
  * @function hasKeys
  * @category object
  * @type {Function}
  * @param {Object} object - Object from which keys are extracted.
  * @param {Array} properties - Array of object keys.
  * @returns {boolean} - Returns true or false.
  *
  * @example
  * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Thor']);
  * // => true
  *
  * @example
  * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
  * // => false
*/
export const hasKeys = (object, properties) => {
  const objectKeys = keys(object);
  return whileArray(properties, (item) => {
    return objectKeys.include(item);
  });
};
/**
  * Checks to see if an object has any of the given property names.
  *
  * @function hasAnyKeys
  * @type {Function}
  * @param {Object} object - Object from which keys are extracted.
  * @param {Array} properties - Array of object keys.
  * @returns {boolean} - Returns true or false.
  *
  * @example
  * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
  * // => true
  *
  * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Other','Tom']);
  * // => false
*/
export const hasAnyKeys = (object, properties) => {
  const objectKeys = keys(object);
  return properties.find((item) => {
    return objectKeys.include(item);
  });
};
assign(acid, {
  hasAnyKeys,
  hasKeys,
});
