const upperCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toUpperCase();
};
$.upperCase = upperCase;
const camelCase = (stringArg) => {
  const string = stringArg
    .toLowerCase()
    .replace(spaceFirstLetter, (match) => {
      return toUpperCaseCall(match);
    });
  return string;
};
$.camel = camelCase;
const kebabCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(/ (.)/g, '-$1');
};
$.kebab = kebabCase;
const snakeCase = (string) => {
  return string.replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(/ (.)/g, '_$1');
};
$.snake = snakeCase;
