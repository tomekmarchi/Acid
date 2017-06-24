import acid from '../namespace/index';
import { assign } from '../internal/object';
import { ensureArray } from '../array/ensure';
import { isArray } from '../internal/is';
// Flattens a nested array. Pass level to flatten up to a depth;
export const flatten = (arrayArg, level = 1) => {
  let array = arrayArg;
  for (let i = 0; i < level; i++) {
    array = array.reduce((previousValue, currentValue) => {
      return previousValue.concat(ensureArray(currentValue));
    }, []);
  }
  return array;
};
export const flattenDeep = (array) => {
  return array.reduce((previousValue, currentValue) => {
    return previousValue.concat((isArray(currentValue)) ? flatten(currentValue) : currentValue);
  }, []);
};
assign(acid, {
  flatten,
  flattenDeep,
});
