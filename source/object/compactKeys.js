import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from '../object/each';
import { hasValue } from '../internal/is';
/**
  * Extracts all key values from an object.
  *
  * @function compactKeys
  * @category object
  * @type {Function}
  * @param {Object} object - Object from which keys are extracted.
  * @returns {Array} - Returns an array of key values.
  *
  * @test
  * (async () => {
  *   const results = compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
  *   return assert(results.includes('Lucy') && results.includes('John') && results.includes('other'), true);
  * });
  *
  * @example
  * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
  * // => ['Lucy', 'John', 'other']
*/
export const compactKeys = (object) => {
  const keys = [];
  eachObject(object, (item, key) => {
    if (hasValue(item)) {
      keys.push(key);
    }
  });
  return keys;
};
assign(acid, {
  compactKeys
});
