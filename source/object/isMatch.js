import acid from '../namespace/index';
import { assign, keys } from '../internal/object';
import { isMatchArray } from '../array/match';
import { eachWhile } from '../array/each';
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
