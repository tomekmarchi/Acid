import acid from '../namespace/index';
import { assign } from '../internal/object';
import { isArray } from '../internal/array';
import { hasValue, isPlainObject, isFunction } from '../internal/is';
import { mapObject, eachObject, filterObject } from '../object/each';
import { eachArray, mapArray, filterArray } from '../array/each';
const forEachWrap = (object, funct) => {
  return object.forEach(funct);
};
const generateCheckLoops = (first, second) => {
  return (object, funct) => {
    let returned;
    if (!hasValue(object)) {
      return;
    } else if (isArray(object)) {
      returned = first;
    } else if (isPlainObject(object) || isFunction(object)) {
      returned = second;
    } else if (object.forEach) {
      returned = forEachWrap;
    } else {
      returned = second;
    }
    return returned(object, funct);
  };
};
export const map = generateCheckLoops(mapArray, mapObject);
export const each = generateCheckLoops(eachArray, eachObject);
export const filter = generateCheckLoops(filterArray, filterObject);
assign(acid, {
  map,
  each,
  filter
});
