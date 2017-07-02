import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachAsync } from './eachAsync';
import { hasValue } from '../internal/is';
export const filterAsync = async (array, funct) => {
  const results = [];
  let result;
  await eachAsync(array, async (item, index, arrayLength) => {
    result = await funct(item, index, arrayLength);
    if (hasValue(result)) {
      results.push(result);
    }
  });
  return results;
};
assign(acid, {
  filterAsync,
});
