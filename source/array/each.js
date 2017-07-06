import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
const whileGenerator = (optBool) => {
  return (array, iteratee) => {
    const arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
      if (iteratee(array[index], index, array, arrayLength) !== optBool) {
        break;
      }
    }
  };
};
// loop through based on number
export const times = (startArg, endArg, iterateeArg) => {
  const start = (iterateeArg) ? startArg : 0;
  const end = (iterateeArg) ? endArg : startArg;
  const iteratee = iterateeArg || endArg;
  for (let position = start; position < end; position++) {
    iteratee(position, start, end);
  }
};
export const timesMap = (startArg, endArg, iterateeArg) => {
  const start = (iterateeArg) ? startArg : 0;
  const end = (iterateeArg) ? endArg : startArg;
  const iteratee = iterateeArg || endArg;
  const results = [];
  let result;
  times(start, end, (position) => {
    result = iteratee(position, results, start, end);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
export const eachArrayRight = (array, iteratee) => {
  const arrayLength = array.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    iteratee(array[index], index, array, arrayLength);
  }
};
export const eachArray = (array, iteratee) => {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    iteratee(array[index], index, array, arrayLength);
  }
};
const generateMap = (method) => {
  return (array, iteratee) => {
    const results = [];
    method(array, (item, index, arrayOriginal, arrayLength) => {
      results[index] = iteratee(item, index, results, arrayOriginal, arrayLength);
    });
    return results;
  };
};
export const compactMapArray = (array, iteratee) => {
  const results = [];
  let returned;
  eachArray(array, (item, index, arrayOriginal, arrayLength) => {
    returned = iteratee(item, index, results, arrayOriginal, arrayLength);
    if (hasValue(returned)) {
      results.push(returned);
    }
  });
  return results;
};
export const mapWhile = (array, iteratee) => {
  const arrayLength = array.length;
  const results = [];
  let returned;
  for (let index = 0; index < arrayLength; index++) {
    returned = iteratee(array[index], index, results, array, arrayLength);
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
  compactMapArray,
  eachArray,
  eachArrayRight,
  eachWhile,
  mapArray,
  mapArrayRight,
  mapWhile,
  times,
  timesMap,
});
