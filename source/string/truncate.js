import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
truncate takes a string and shortens based on arguments given
@property {stringArg} - takes a string to be shortened
@property {amount} - takes an integer value which determines the degree to which the stringArg will be shortened
@example
const foo = 'bar';
const amount = 1;
truncate(foo, amount)
*/
const truncate = (stringArg, amount) => {
  let string = stringArg;
  if (string.length > amount) {
    string = string.slice(0, amount);
  }
  return string;
};
/**
truncate left returns a string based on arguments given
@property {stringArg} - takes a string to be truncateWor
@property {amount} - integer value determining the degree of truncation
const foo = 'bar';
const amount = 1;
truncateLeft(foo, amount)
*/

const truncateLeft = (stringArg, amount) => {
  let string = stringArg;
  const stringLength = string.length;
  if (stringLength > amount) {
    string = string.substr(amount, stringLength);
  }
  return string;
};
/**
truncateWord extracts the letters between the first character of a string and a given integer
@property {string} - takes a string to be truncated
@property {amount} - integer value determining the degree of truncation
const foo = 'bar';
const amount = 1;
truncateWord(foo, amount)
*/
*/
const truncateWord = (string, amount) => {
  return string.substring(0, amount);
};
assign(acid, {
  truncate,
  truncateLeft,
  truncateWord,
});
