import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from '../array/each';
export const groupBy = (array, funct) => {
  const sortedObject = {};
  eachArray(array, (item) => {
    const results = funct(item);
    if (!sortedObject[results]) {
      sortedObject[results] = [];
    }
    sortedObject[results].push(item);
  });
  return sortedObject;
};
assign(acid, {
  groupBy
});
