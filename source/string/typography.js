import acid from '../namespace/index';
import { assign } from '../internal/object';
const spaceFirstLetter = / (.)/g;
/**
upperFirstLetter takes a string and extracts a capitalized version of its first character.
@property {string} - takes a string
@example
foo = 'bar';
upperFirstLetter(foo)
*/
export const upperFirstLetter = (string) => {
  return string[0].toUpperCase();
};
/**
restString returns the characters of a string based on the arguments given. If num = 0, it will return all characters in the string. If it = 1, it will return all characters after the first character etc.
@property {string} - takes a string
@property {num} - takes an integer
@example
foo = 'bar';
restString(foo)
*/
export const restString = (string, num = 1) => {
  return string.substr(num);
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
  restString,
  upperFirst,
  upperFirstAll,
  upperFirstOnly,
  upperFirstOnlyAll,
});
