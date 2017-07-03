import acid from '../namespace/index';
import { assign } from '../internal/object';
const spaceFirstLetter = / (.)/g;
/**
  * Returns the first letter capitalized.
  *
  * @function upperFirstLetter
  * @type {Function}
  * @param {string} string - String to extract first letter from.
  * @returns {string} A single upper case letter.
  *
  * @example
  * const foo = 'upper';
  * upperFirstLetter(foo);
  * //-> U
*/
export const upperFirstLetter = (string) => {
  return string[0].toUpperCase();
};
/**
upperFirst takes a string returns it with its first character capitalized
@property {string} - takes a string
@example
foo = 'bar';
upperFirst(foo)
*/
export const upperFirst = (string) => {
  return upperFirstLetter(string) + restString(string);
};
/**
upperFirstAll returns a string wherein the first letter of every word in that string is capitalized
@property {string} - takes a string
@example
foo = 'bar';
upperFirstAll(foo)
*/
export const upperFirstAll = (string) => {
  return string.replace(spaceFirstLetter, (match) => {
    return match.toUpperCase();
  });
};
/**
upperFirstOnly returns a string wherein the first letter of the first word in that string is capitalized
@property {string} - takes a string
@example
foo = 'bar';
upperFirstOnly(foo)
*/
export const upperFirstOnly = (string) => {
  return upperFirstLetter(string) + restString(string).toLowerCase();
};
/**
upperFirstOnlyAll takes a string and first converts it to lower case. Then capitalizes all characters that follow a space
@property {string} - takes a string
@example
foo = 'bar';
upperFirstOnlyAll(foo)
*/
export const upperFirstOnlyAll = (string) => {
  return string.toLowerCase()
    .replace(spaceFirstLetter, (match) => {
      return match.toUpperCase();
    });
};
assign(acid, {
  upperFirst,
  upperFirstAll,
  upperFirstOnly,
  upperFirstOnlyAll,
});
