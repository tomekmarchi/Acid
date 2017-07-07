import acid from '../namespace/index';
import { assign } from '../internal/object';
const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
/**
  * Converts a string and converts it entirely into uppercase.
  *
  * @function upperCase
  * @type {Function}
  * @param {string} string - String to be converted into upper case.
  * @returns {string} - Converted string in upper case.
  *
  * @example
  * upperCase('upper case');
  * // => UPPER CASE
*/
export const upperCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toUpperCase();
};
/**
  * Converts a string into Camel case format.
  *
  * @function camelCase
  * @type {Function}
  * @param {string} string - String to be converted into Camel case.
  * @returns {string} - Converted string in Camel case.
  *
  * @example
  * camelCase('camel case');
  * // => camelCase
*/
export const camelCase = (string) => {
  return string.toLowerCase()
    .replace(spaceFirstLetter, (match) => {
      return match.toUpperCase();
    });
};
/**
  * Converts a string into Kebab case format.
  *
  * @function kebabCase
  * @type {Function}
  * @param {string} string - String to be converted into Kebab case.
  * @returns {string} - Converted string in Kebab case.
  *
  * @example
  * kebabCase('kebab case');
  * // => kebab-case
*/
export const kebabCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(spaceFirstLetter, '-$1');
};
/**
  * Converts a string into snake case format.
  *
  * @function snakeCase
  * @type {Function}
  * @param {string} string - String to be converted into snake case.
  * @returns {string} - Converted string in Snake case.
  *
  * @example
  * snakeCase('snake case');
  * // => snake_case
*/
export const snakeCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(spaceFirstLetter, '_$1');
};
assign(acid, {
  camelCase,
  kebabCase,
  snakeCase,
  upperCase,
});
