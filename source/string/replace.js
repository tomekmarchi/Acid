import acid from '../namespace/index';
import { assign } from '../internal/object';

export const replaceWithList = (string, array, toReplace) => {
  return string.replace(new RegExp(`\\b${array.join('|')}\\b`, 'gi'), toReplace);
};
assign(acid, {
  replaceWithList
});
