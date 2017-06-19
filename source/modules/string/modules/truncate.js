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
const truncateLeft = (stringArg, amount) => {
  let string = stringArg;
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
