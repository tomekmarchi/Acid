const normalizeCase = /[-_]/g;
const spaceFirstLetter = / (.)/g;
const ucFirstChar = (string) => {
  return toUpperCaseCall(string[0]);
};
const addRest = (string, num) => {
  return substrCall(string, num || 1);
};
$.restString = addRest;
const ucFirst = (string) => {
  return ucFirstChar(string) + addRest(string);
};
$.ucFirst = ucFirst;
const ucFirstAll = (string) => {
  return joinArray(mapArray(splitCall(string, spaceCharacter), (item) => {
    return ucFirst(item);
  }), ' ');
};
$.ucFirstAll = ucFirstAll;
// uppercase first letter lower case the rest
const ucFirstOnly = (string) => {
  return ucFirstChar(string) + toLowerCaseCall(addRest(string));
};
$.ucFirstOnly = ucFirstOnly;
const ucFirstOnlyAll = (string) => {
  return string.toLowerCase()
  .replace(spaceFirstLetter, (match) => {
    return match.toUpperCase();
  });
};
$.ucFirstOnlyAll = ucFirstOnlyAll;
const camelCase = (stringArg) => {
  const string = stringArg
    .replace(normalizeCase, ' ')
    .trim()
    .toLowerCase()
    .replace(spaceFirstLetter, (match, letter) => {
      return letter.toUpperCase();
    });
  return string;
};
$.camel = camelCase;
const setStringCase = (string, caseLetter) => {
  return stringReplaceCall(stringReplaceCall(toLowerCaseCall(string), regexUnderscore, spaceCharacter), regexSpaceglobal, caseLetter);
};
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
// returns the trunced version of the string
const truncate = (stringArg, amount) => {
  let string = stringArg;
  if (getLength(string) > amount) {
    string = stringSliceCall(string, 0, amount);
  }
  return string;
};
$.truncate = truncate;
// returns the trunced version of the string starting from the right
const truncateLeft = (string, amount) => {
  const stringLength = getLength(string);
  if (stringLength > amount) {
    string = substrCall(string, amount, stringLength);
  }
  return string;
};
$.truncateLeft = truncateLeft;
// returns the trunced version of the string
const truncateWord = (string, amount) => {
  return substringCall(string, 0, amount);
};
$.truncateWord = truncateWord;
