import acid from '../namespace/index';
import { assign } from '../internal/object';
const tokenizeRegEx = /\S+/g;
const wordsRegEx = /\w+/g;
export const tokenize = (string) => {
  return string.match(tokenizeRegEx) || [];
};
export const words = (string) => {
  return string.match(wordsRegEx) || [];
};
assign(acid, {
  tokenize,
  words
});
