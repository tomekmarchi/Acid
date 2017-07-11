import acid from '../namespace/index';
import { eachWhile } from '../array/each';
import { assign, keys } from '../internal/object';
/**
  * Checks to see if an object has all of the given property names.
  *
  * @function compactKeys
  * @type {Function}
  * @param {Object} object - Object from which keys are extracted.
  * @param {Array} properties - Array of object keys.
  * @returns {boolean} - Returns true or false.
  *
  * @example
  * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Thor']);
  * //=> true
  *
  * hasKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
  * //=> false
*/
export const hasKeys = (object, properties) => {
  let flag = false;
  const objectKeys = keys(object);
  eachWhile(properties, (item) => {
    flag = objectKeys.include(item);
    return flag;
  });
  return flag;
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
  * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','John']);
  * //=> true
  *
  * hasAnyKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: 'Bobo'}, ['Lucy','Tom']);
  * //=> true
*/
export const hasAnyKeys = (object, properties) => {
  const objectKeys = keys(object);
  const flag = properties.find((item) => {
    return objectKeys.include(item);
  });
  return flag;
};
assign(acid, {
  hasAnyKeys,
  hasKeys,
});
