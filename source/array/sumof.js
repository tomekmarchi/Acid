/**
 * Adds all values in an array
 * @param      {Array}   Array of numbers or numbers as string.
 * @param      {Number}   Starting number
 * @return     {Number} returns the sum of the array
 */
const sumOf = function (array, result = 0) {
  each(array, (item, key) => {
    result = (item) ? result + (isString(item) ? numberNative(item) : item) : result;
  });
  return result;
};
acid.sumOf = sumOf;
