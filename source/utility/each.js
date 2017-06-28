import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray, filterArray, mapArray } from '../array/each';
import { eachObject, filterObject, mapObject } from '../object/each';
import { hasValue, isArray, isFunction, isPlainObject } from '../internal/is';
const forEachWrap = (object, funct) => {
  return object.forEach(funct);
};
const generateCheckLoops = (arrayLoop, objectLoop) => {
  return (object, funct) => {
    let returned;
    if (!hasValue(object)) {
      return;
    } else if (isArray(object)) {
      returned = arrayLoop;
    } else if (isPlainObject(object) || isFunction(object)) {
      returned = objectLoop;
    } else if (object.forEach) {
      returned = forEachWrap;
    } else {
      returned = objectLoop;
    }
    return returned(object, funct);
  };
};
export const map = generateCheckLoops(mapArray, mapObject);
export const each = generateCheckLoops(eachArray, eachObject);
export const filter = generateCheckLoops(filterArray, filterObject);
assign(acid, {
  each,
  filter,
  map
});
