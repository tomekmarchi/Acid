import acid from '../namespace/index';
import { assign, keys } from '../internal/object';
import { isPlainObject } from '../internal/is';
import { isArray } from '../internal/array';
import { isMatchArray } from '../array/match';
import { eachWhile } from '../array/each';
/*
	Performs a deep comparison between object and source to determine if object contains equivalent property values.
*/
export const isEqual = (object, compareObject) => {
  let result = false;
  if (object === compareObject) {
    result = true;
  } else if (object.toString() === compareObject.toString()) {
    if (isPlainObject(object)) {
      const sourceProperties = keys(object);
      if (isMatchArray(sourceProperties, keys(compareObject))) {
        eachWhile(sourceProperties, (key) => {
          result = isEqual(object[key], compareObject[key]);
          return result;
        });
      }
    } else if (isArray(object)) {
      if (object.length === compareObject.length) {
        eachWhile(object, (item, index) => {
          result = isEqual(item, compareObject[index]);
          return result;
        });
      }
    }
  }
  return result;
};
assign(acid, {
  isEqual,
});
