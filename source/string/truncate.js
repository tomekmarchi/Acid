import acid from '../namespace/index';
import { assign } from '../internal/object';
const truncate = (stringArg, amount) => {
  let string = stringArg;
  if (string.length > amount) {
    string = string.slice(0, amount);
  }
  return string;
};
const truncateLeft = (stringArg, amount) => {
  let string = stringArg;
  const stringLength = string.length;
  if (stringLength > amount) {
    string = string.substr(amount, stringLength);
  }
  return string;
};
const truncateWord = (string, amount) => {
  return string.substring(0, amount);
};
assign(acid, {
  truncate,
  truncateLeft,
  truncateWord,
});
