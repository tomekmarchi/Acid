import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
const whileGenerator = (optBool) => {
  return (array, fnc) => {
    const arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      if (fnc(array[index], index, array, arrayLength) !== optBool) {
        break;
      }
    }
  };
};
// loop through based on number
export const times = (startArg, endArg, fnArg) => {
  const start = (fnArg) ? startArg : 0;
  const end = (fnArg) ? endArg : startArg;
  const fn = fnArg || endArg;
  for (let position = start; position < end; position++) {
    fn(position, start, end);
  }
};
export const timesMap = (startArg, endArg, fnArg) => {
  const start = (fnArg) ? startArg : 0;
  const end = (fnArg) ? endArg : startArg;
  const fn = fnArg || endArg;
  const results = [];
  let result;
  times(start, end, (position) => {
    result = fn(position, results, start, end);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
export const eachArrayRight = (array, fn) => {
  const arrayLength = array.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    fn(array[index], index, array, arrayLength);
  }
};
export const eachArray = (array, fn) => {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    fn(array[index], index, array, arrayLength);
  }
};
const generateMap = (method) => {
  return (array, fn) => {
    const results = [];
    method(array, (item, index, arrayOriginal, arrayLength) => {
      results[index] = fn(item, index, arrayOriginal, arrayLength, results);
    });
    return results;
  };
};
export const filterArray = (array, fn) => {
  const results = [];
  let returned;
  eachArray(array, (item, index, arrayOriginal, arrayLength) => {
    returned = fn(item, index, arrayOriginal, arrayLength, results);
    if (hasValue(returned)) {
      results.push(returned);
    }
  });
  return results;
};
export const mapWhile = (array, fn) => {
  const arrayLength = array.length;
  const results = [];
  let returned;
  for (let index = 0; index < arrayLength; index++) {
    returned = fn(array[index], index, array, arrayLength);
    if (!returned) {
      break;
    }
    results[index] = returned;
  }
  return results;
};
export const mapArray = generateMap(eachArray);
export const mapArrayRight = generateMap(eachArrayRight);
export const eachWhile = whileGenerator(true);
assign(acid, {
  eachArray,
  eachArrayRight,
  eachWhile,
  filterArray,
  mapArray,
  mapArrayRight,
  mapWhile,
  times,
  timesMap,
});
