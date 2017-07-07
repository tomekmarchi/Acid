import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Replaces all occurrences of strings in an array with a value.
  *
  * @function replaceList
  * @type {Function}
  * @param {string} string - String to be replaced.
  * @param {Array} array - Strings to replace.
  * @param {string} value - The match replacement.
  * @returns {string} - The string with the replacement.
  *
  * @example
  * replaceList('Her name was @user.', ['@user'], 'Lucy');
  * // => Her name was Lucy.
*/
export const replaceList = (string, array, value) => {
  return string.replace(new RegExp(`\\b${array.join('|')}\\b`, 'gi'), value);
};
assign(acid, {
  replaceList
});
