import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Replaces all occurrences of strings in an array with a value.
  *
  * @function replaceList
  * @category string
  * @type {Function}
  * @param {string} string - String to be replaced.
  * @param {Array} words - Strings to replace.
  * @param {string} value - The match replacement.
  * @returns {string} - The string with the replacement.
  *
  * @example
  * replaceList('Her name was user.', ['user'], 'Lucy');
  * // => 'Her name was Lucy.'
*/
export const replaceList = (string, words, value) => {
  return string.replace(new RegExp('\\b' + words.join('|') + '\\b', 'gi'), value);
};
assign(acid, {
  replaceList
});
