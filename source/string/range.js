import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
  * insertInRange inserts a text into a user defined range
*/
export const insertInRange = (text, start, end, insert) => {
  return text.slice(0, start) + insert + text.slice(end, text.length);
};
/**
  * rightString returns the letter on the right side of the string
*/
export const rightString = (text, a) => {
  return text[text.length - 1 - a];
};
/**
  * chunkString chunks a string contingent on what integer is placed in the size argument
  * @property {string} - string to be chunked
  * @property {size} - integer which will define how often the string is chunked
  * @example
  const foo = 'bar';
  size = 2;
  chunkString(foo, size)
*/
export const chunkString = (string, size) => {
  return string.match(new RegExp(`(.|[\r\n]){1, ${size}}`, 'g'));
};
/**
  * Returns the string without the last letter.
  *
  * @function initialString
  * @property {string} - takes a string
  * @returns {string} The string without the last letter.
  *
  * @example
  * const foo = 'bar';
  * initialString(foo);
  * //-> 'ba'
*/
export const initialString = (string) => {
  return string.slice(0, -1);
};
/**
  * Returns the string without the first letter.
  *
  * @function restString
  * @property {string} - takes a string
  * @returns {string} The string without the first letter.
  *
  * @example
  * const const foo = 'bar';
  * restString(foo);
  * //-> 'ar'
*/
export const restString = (string) => {
  return string.slice(1, string.length);
};
assign(acid, {
  chunkString,
  initialString,
  insertInRange,
  restString,
  rightString,
});
