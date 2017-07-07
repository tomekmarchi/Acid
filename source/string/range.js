import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * Inserts text into a string at a given position.
  *
  * @function insertInRange
  * @type {Function}
  * @param {string} string - String to insert the text into.
  * @param {number} index - Point of insertion.
  * @param {string} text - The string to be inserted.
  * @returns {string} - The string with the text inserted at the given point.
  *
  * @example
  * insertInRange('A from Lucy.', 1, ' tab');
  * // => A tab from Lucy.
*/
export const insertInRange = (string, index, text) => {
  return string.slice(0, index) + text + string.slice(index, string.length);
};
/**
  * Plucks a letter using the index starting from the right.
  *
  * @function rightString
  * @type {Function}
  * @param {string} string - String to extract the letter from.
  * @param {number} [index=1] - The starting position.
  * @returns {string} - A letter at the given index.
  *
  * @example
  * rightString('rightString');
  * // => g
  *
  * rightString('rightString', 2);
  * // => n
*/
export const rightString = (string, index = 1) => {
  return string[string.length - index];
};
/**
  * Splits up a string into chunks.
  *
  * @function chunkString
  * @type {Function}
  * @param {string} string - String to chunked.
  * @param {number} [size] - The max string length per chunk.
  * @returns {Array} - An array with strings that are <= size parameter.
  *
  * @example
  * chunkString('chunk', 2);
  * //-> ['ch', 'un', 'k']
*/
export const chunkString = (string, size) => {
  return string.match(new RegExp(`(.|[\r\n]){1, ${size}}`, 'g'));
};
/**
  * Truncates everything before the index starting from the right.
  *
  * @function initialString
  * @type {Function}
  * @param {string} string - String to extract the initial letters from.
  * @param {number} [index=1] - Starting point from the right.
  * @returns {string} A string with the characters before the index starting from the right.
  *
  * @example
  * initialString('initialString');
  * //-> initialStrin
  *
  * initialString('initialString', 2);
  * //-> initialStri
*/
export const initialString = (string, index = 1) => {
  return string.slice(0, index * -1);
};
/**
  * Truncates everything after a index.
  *
  * @function restString
  * @type {Function}
  * @param {string} string - String to extract the rest of the letters from.
  * @param {number} [index=1] - Starting point.
  * @returns {string} - A string without the characters up-to to the index.
  *
  * @example
  * restString('restString');
  * //-> estString
  *
  * restString('restString', 2);
  * //-> stString
*/
export const restString = (string, index = 1) => {
  return string.substr(index);
};
assign(acid, {
  chunkString,
  initialString,
  insertInRange,
  restString,
  rightString,
});
