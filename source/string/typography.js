import acid from '../namespace/index';
import { assign } from '../internal/object';
const spaceFirstLetter = / (.)/g;
export const upperFirstLetter = (string) => {
  return string[0].toUpperCase();
};
export const restString = (string, num = 1) => {
  return string.substr(num);
};
export const upperFirst = (string) => {
  return upperFirstLetter(string) + restString(string);
};
export const upperFirstAll = (string) => {
  return string.replace(spaceFirstLetter, (match) => {
    return match.toUpperCase();
  });
};
export const upperFirstOnly = (string) => {
  return upperFirstLetter(string) + restString(string).toLowerCase();
};
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
