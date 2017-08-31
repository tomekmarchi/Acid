import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from '../object/each';
/**
  * Extracts all keys from an object whose values are not falsey. The values false, null, 0, "", undefined, and NaN are falsey.
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
  *   return assert(results.includes('Lucy') && results.includes('John'), true);
  * });
  *
  * @example
  * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
  * // => ['Lucy', 'John']
*/
export const compactKeys = (object) => {
  const keys = [];
  eachObject(object, (item, key) => {
    if (item) {
      keys.push(key);
    }
  });
  return keys;
};
assign(acid, {
  compactKeys
});
