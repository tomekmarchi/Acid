const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
const upperFirstLetter = (string) => {
  return toUpperCaseCall(string[0]);
};
const restString = (string, num) => {
  return substrCall(string, num || 1);
};
acid.restString = restString;
const upperFirst = (string) => {
  return upperFirstLetter(string) + restString(string);
};
acid.upperFirst = upperFirst;
const upperFirstAll = (string) => {
  return string.replace(spaceFirstLetter, (match) => {
    return toUpperCaseCall(match);
  });
};
acid.upperFirstAll = upperFirstAll;
// uppercase first letter lower case the rest
const upperFirstOnly = (string) => {
  return upperFirstLetter(string) + toLowerCaseCall(restString(string));
};
acid.upperFirstOnly = upperFirstOnly;
// uppercase first letter lower case the rest all
const upperFirstOnlyAll = (string) => {
  return string.toLowerCase()
    .replace(spaceFirstLetter, (match) => {
      return toUpperCaseCall(match);
    });
};
acid.upperFirstOnlyAll = upperFirstOnlyAll;
