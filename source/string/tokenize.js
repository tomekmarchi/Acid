import acid from '../namespace/index';
import { assign } from '../internal/object';
const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
/**
  * Break string by non-white space characters matches.
  *
  * @function tokenize
  * @type {Function}
  * @param {string} string - String to be broken up.
  * @returns {Array} Array of words without white space characters.
  *
  * @example
  * tokenize('I am Lucy!');
  * // => ["I", "am", "Lucy!"]
*/
export const tokenize = (string) => {
  return string.match(tokenizeRegEx) || [];
};
/**
  * Break string into word matches.
  *
  * @function words
  * @type {Function}
  * @param {string} string - String to be broken up.
  * @returns {Array} Array of words with word characters only.
  *
  * @example
  * words('I am Lucy!');
  * // => ["I", "am", "Lucy"]
*/
export const words = (string) => {
  return string.match(wordsRegEx) || [];
};
assign(acid, {
  tokenize,
  words
});
