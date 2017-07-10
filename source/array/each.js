import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
/**
  * Iterates based on a start index and an end index. The loop ends when the start index is equal to the end index.
  *
  * @function times
  * @type {Function}
  * @param {number} startIndex - The number to start loop from.
  * @param {number} endIndex - The number to stop at the loop.
  * @param {Function} iteratee - Transformation function which is passed position, start, and end.
  * @returns {undefined} Nothing.
  *
  * @example
  * times(0, 3, (item) => {
  *   console.log(item);
  * });
  * //Will log
  * // 0
  * // 1
  * // 2
  * // => undefined
*/
export const times = (startIndex, endIndex, iteratee) => {
  const start = (startIndex) ? startIndex : 0;
  const end = (startIndex) ? endIndex : startIndex;
  const iterateeMethod = iteratee || endIndex;
  for (let position = start; position < end; position++) {
    iterateeMethod(position, start, end);
  }
};
/**
  * IIterates based on a start index and end index. Creates an array with the results of the iteratee on every element in the calling array. The loop ends when the start index is equal to the end index.
  *
  * @function timesMap
  * @category Utility
  * @type {Function}
  * @param {number} startIndex - The number to start loop from.
  * @param {number} endIndex - The number to stop at the loop.
  * @param {Function} iteratee - Transformation function which is passed position, start, and end.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} An array with iteratee's returned values.
  *
  * @example
  * timesMap(0, 3, (item) => {
  *   console.log(item);
  * });
  * // => [0, 1, 2]
*/
export const timesMap = (startIndex, endIndex, iteratee, results = []) => {
  const start = (iteratee) ? startIndex : 0;
  const end = (iteratee) ? endIndex : startIndex;
  const iterateeMethod = iteratee || endIndex;
  let result;
  times(start, end, (position) => {
    result = iterateeMethod(results, position, start, end);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
/**
  * Iterates through the given array.
  *
  * @function eachArray
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} The originally given array.
  *
  * @example
  * eachArray([1, 2, 3], (item) => {
  *   console.log(item);
  * });
  * // => [1, 2, 3]
*/
export const eachArray = (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    iteratee(callingArray[index], index, callingArray, arrayLength);
  }
};
/**
  * Iterates through the given array in reverse.
  *
  * @function eachArrayRight
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, calling array, and array length.
  * @returns {Object} The originally given array.
  *
  * @example
  * eachArrayRight([1, 2, 3], (item) => {
  *   console.log(item);
  * });
  * // => [3, 2, 1]
*/
export const eachArrayRight = (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    iteratee(callingArray[index], index, callingArray, arrayLength);
  }
};
/**
  * Iterates through the given array while the iteratee returns true.
  *
  * @function eachWhile
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, key, calling array, and array length.
  * @returns {boolean} Returns the true if all values returned are true or false if one value returns false.
  *
  * @example
  * eachWhile([true, true, false], (item) => {
  *   console.log(item);
  *   return item;
  * });
  * //true
  * //true
  * // => false
*/
export const eachWhile = (callingArray, iteratee) => {
  const arrayLength = callingArray.length;
  for (let index = 0; index < arrayLength; index++) {
    if (iteratee(callingArray[index], index, callingArray, arrayLength) === false) {
      return false;
    }
  }
  return true;
};
/**
  * Iterates through the calling array and creates an array with all elements that pass the test implemented by the iteratee.
  *
  * @function filterArray
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created object, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} An array with properties that passed the test.
  *
  * @example
  * filterArray([false, true, true], (item) => {
  *   return item;
  * });
  * // => [true, true]
*/
export const filterArray = (callingArray, iteratee, results = []) => {
  eachArray(callingArray, (item, index, arrayOriginal, arrayLength) => {
    if (iteratee(item, index, results, arrayOriginal, arrayLength) === true) {
      results.push(item);
    }
  });
  return results;
};
const generateMap = (method) => {
  return (callingArray, iteratee, results = []) => {
    method(callingArray, (item, index, arrayOriginal, arrayLength) => {
      results[index] = iteratee(item, index, results, arrayOriginal, arrayLength);
    });
    return results;
  };
};
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array.
  *
  * @function mapArray
  * @category Utility
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} An array of the same calling array's type.
  *
  * @example
  * mapArray({a: 1, b: 2, c: 3}, (item) => {
  *   return item * 2;
  * });
  * // => {a: 2, b: 4, c: 6}
*/
export const mapArray = generateMap(eachArray);
/**
  * Iterates through the calling array and creates an object with the results of the iteratee on every element in the calling array in reverse.
  *
  * @function mapArrayRight
  * @category Utility
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} An array of the same calling array's type.
  *
  * @example
  * mapArrayRight({a: 1, b: 2, c: 3}, (item) => {
  *   return item * 2;
  * });
  * // => {a: 2, b: 4, c: 6}
*/
export const mapArrayRight = generateMap(eachArrayRight);
/**
  * Iterates through the calling array and creates an array with the results, (excludes results which are null or undefined), of the iteratee on every element in the calling array.
  *
  * @function compactMapArray
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Object} An array with mapped properties that are not null or undefined.
  *
  * @example
  * compactMapArray([0, 2, 3], (item) => {
  *   return item * 2;
  * });
  * // => [4, 6]
*/
export const compactMapArray = (callingArray, iteratee, results = []) => {
  let returned;
  eachArray(callingArray, (item, index, arrayOriginal, arrayLength) => {
    returned = iteratee(item, index, results, arrayOriginal, arrayLength);
    if (hasValue(returned)) {
      results.push(returned);
    }
  });
  return results;
};
/**
  * Iterates through the given and creates an object with all elements that pass the test implemented by the iteratee.
  *
  * @function mapWhile
  * @type {Function}
  * @param {Array} callingArray - Array that will be looped through.
  * @param {Function} iteratee - Transformation function which is passed item, index, the newly created array, calling array, and array length.
  * @param {Array} [results = []] - Array that will be used to assign results.
  * @returns {Array} An array with properties that passed the test.
  *
  * @example
  * mapWhile({a: false, b: true, c: true}, (item) => {
  *   return true;
  * });
  * // => {b: true, c: true}
*/
export const mapWhile = (callingArray, iteratee, results = []) => {
  const arrayLength = callingArray.length;
  let returned;
  for (let index = 0; index < arrayLength; index++) {
    returned = iteratee(callingArray[index], index, results, callingArray, arrayLength);
    if (!returned) {
      break;
    }
    results[index] = returned;
  }
  return results;
};
assign(acid, {
  compactMapArray,
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
