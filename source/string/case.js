import acid from '../namespace/index';
import { assign } from '../internal/object';
const caseRegEx = / (.)/g;
const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
export const upperCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toUpperCase();
};
export const camelCase = (stringArg) => {
  const string = stringArg
    .toLowerCase()
    .replace(spaceFirstLetter, (match) => {
      return match.toUpperCase();
    });
  return string;
};
export const kebabCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(/ (.)/g, '-$1');
};
export const snakeCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(/ (.)/g, '_$1');
};
assign(acid, {
  upperCase,
  camelCase,
  kebabCase,
  snakeCase,
});
