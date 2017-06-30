import acid from '../namespace/index';
import { assign } from '../internal/object';
const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
/**
tokenize takes a string and checks to see if it has anything but whitespace. If it does, it returns that string. If it does not, it returns an empty array.
@property {string} - takes a string
@example
const foo = 'bar';
tokenize(foo)
*/
export const tokenize = (string) => {
  return string.match(tokenizeRegEx) || [];
};
/**
words takes a string and checks to see if it has a single character or more. If it does, it returns that string. If it does not, it returns an empty array.
@property {string} - takes a string
@example
const foo = 'bar';
words(foo)
*/
export const words = (string) => {
  return string.match(wordsRegEx) || [];
};
assign(acid, {
  tokenize,
  words
});
