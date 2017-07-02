import acid from '../namespace/index';
import { assign } from '../internal/object';
const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
/**
upperCase takes a string and converts it entirely into uppercase.
*/
export const upperCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toUpperCase();
};
/**
camelCase takes a string and converts it to camel case format
@property {stringArg} - takes a string to be converted into camel case
@example
const foo = 'bar';
camelCase(foo);
*/
export const camelCase = (stringArg) => {
  const string = stringArg
    .toLowerCase()
    .replace(spaceFirstLetter, (match) => {
      return match.toUpperCase();
    });
  return string;
};
/**
kebabCase takes a string and converts it into kebab case format
@property {string} - takes a string to be converted into kebab case format
@example
const foo = 'bar';
kebabCase(foo)
*/
export const kebabCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(spaceFirstLetter, '-$1');
};
/**
snakeCase takes a string and converts it into snake case format
@property {string} - takes a string to be converted into snake case
@example
const foo = 'bar';
snakeCase(foo);
*/
export const snakeCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(spaceFirstLetter, '_$1');
};
assign(acid, {
  upperCase,
  camelCase,
  kebabCase,
  snakeCase,
});
