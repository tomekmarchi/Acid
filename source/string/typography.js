import acid from '../namespace/index';
import { assign } from '../internal/object';
import { restString } from './range';
const spaceFirstLetter = / (.)/g;
/**
  * Returns the first letter capitalized.
  *
  * @function upperFirstLetter
  * @type {Function}
  * @category string
  * @param {string} string - String to extract first letter from.
  * @returns {string} - An upper case letter.
  *
  * @example
  * upperFirstLetter('upper');
  * // => "U"
*/
export const upperFirstLetter = (string) => {
  return string[0].toUpperCase();
};
/**
  * Capitalizes the first letter.
  *
  * @function upperFirst
  * @type {Function}
  * @category string
  * @param {string} string - String to be mutated.
  * @returns {string} - String with first letter capitalized.
  *
  * @example
  * upperFirst('upper');
  * // => 'Upper'
*/
export const upperFirst = (string) => {
  return upperFirstLetter(string) + restString(string);
};
/**
  * Capitalize all first letters.
  *
  * @function upperFirstAll
  * @type {Function}
  * @category string
  * @param {string} string - String to be mutated.
  * @returns {string} - String with all first letters capitalized.
  *
  * @example
  * upperFirstAll('Lucy is next up.');
  * // => 'Lucy Is Next Up.'
*/
export const upperFirstAll = (string) => {
  return string.replace(spaceFirstLetter, (match) => {
    return match.toUpperCase();
  });
};
/**
  * Capitalize first letter and lower case the rest.
  *
  * @function upperFirstOnly
  * @type {Function}
  * @category string
  * @param {string} string - String to be mutated.
  * @returns {string} - String with first letter capitalized.
  *
  * @example
  * upperFirstOnly('LYSERGIC ACID DIETHYLAMIDE');
  * // => 'Lysergic acid diethylamide'
*/
export const upperFirstOnly = (string) => {
  return upperFirstLetter(string) + restString(string).toLowerCase();
};
/**
  * Capitalize all first letters and lower case the rest.
  *
  * @function upperFirstOnlyAll
  * @type {Function}
  * @category string
  * @param {string} string - String to be mutated.
  * @returns {string} - String with all first letters capitalized.
  *
  * @example
  * upperFirstOnlyAll('LYSERGIC ACID DIETHYLAMIDE');
  * // => 'Lysergic Acid Diethylamide'
*/
export const upperFirstOnlyAll = (string) => {
  return upperFirstOnly(string.toLowerCase()).replace(spaceFirstLetter, (match) => {
    return match.toUpperCase();
  });
};
assign(acid, {
  upperFirst,
  upperFirstAll,
  upperFirstLetter,
  upperFirstOnly,
  upperFirstOnlyAll,
});
