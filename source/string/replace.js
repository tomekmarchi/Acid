import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
replaceWithList takes an array of strings and replaces them with the assigned value of the toReplace argument
@property {string} - takes a string
@property {array} - takes an array of strings
@property {toReplace} - takes a string which is used to replace the array of strings
@example
const foo = 'bar';
const bar = [foo];
const toReplace ='value which will replace';
replaceWithList(foo, bar, toReplace)
*/
export const replaceWithList = (string, array, toReplace) => {
  return string.replace(new RegExp(`\\b${array.join('|')}\\b`, 'gi'), toReplace);
};
assign(acid, {
  replaceWithList
});
