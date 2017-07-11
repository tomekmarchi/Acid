import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Merges together the values of each of the arrays with the values at the corresponding position.
  *
  * @function zip
  * @type {Function}
  * @param {Array} properties - The arrays to process.
  * @returns {Array} - Returns the new array of regrouped elements.
  *
  * @example
  * zip(['a', 'b'], [1, 2], [true, false]);
  * // => [['a', 1, true], ['b', 2, false]]
*/
export const zip = (...args) => {
  return args[0].map((item, index) => {
    return args.map((array) => {
      return array[index];
    });
  });
};
/**
  * Takes an array of grouped elements and creates an array regrouping the elements to their pre-zip array configuration.
  *
  * @function unZip
  * @type {Function}
  * @param {Array} properties - The array of grouped elements to process.
  * @returns {Array} - Returns the new array of regrouped elements.
  *
  * @example
  * unZip([['a', 1, true], ['b', 2, false]]);
  * // => [['a', 'b'], [1, 2], [true, false]]
*/
export const unZip = (array) => {
  return array[0].map((item, index) => {
    return array.map((arraySet) => {
      return arraySet[index];
    });
  });
};
assign(acid, {
  unZip,
  zip,
});
