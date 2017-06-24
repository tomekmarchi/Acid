import acid from '../namespace/index';
import { eachWhile } from '../array/each';
import { isMatchArray } from '../array/isMatch';
import { assign, keys } from '../internal/object';
export const isMatchObject = (source, compare) => {
  let result = false;
  const sourceProperties = keys(source);
  if (isMatchArray(sourceProperties, keys(compare))) {
    eachWhile(sourceProperties, (key) => {
      result = source[key] === compare[key];
      return result;
    });
  }
  return result;
};
assign(acid, {
  isMatchObject,
});
