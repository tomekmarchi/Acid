import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachObject } from '../object/each';
/**
  * Extracts all key values from an object.
  *
  * @function compactKeys
  * @type {Function}
  * @param {Object} object - Object from which keys are extracted.
  * @returns {Array} - Returns an array of key values.
  *
  * @example
  * compactKeys({Lucy: 'Ringo', John: 'Malkovich', Thor: undefined, other: false, that: null});
  * // => ['Lucy', 'John', 'other']
  *
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
