import acid from '../namespace/index';
import { assign } from '../internal/object';
import { arraySortToObject } from './sortToObject';
export const groupBy = (array, funct) => {
  return arraySortToObject((item, index, objectArg) => {
    const results = funct(item);
    if (!objectArg[results]) {
      objectArg[results] = [];
    }
    objectArg[results].push(item);
  }, array);
};
assign(acid, {
  groupBy
});
