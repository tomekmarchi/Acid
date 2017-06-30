import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachAsync } from './eachAsync';
export const mapAsync = async (array, funct) => {
  const results = [];
  await eachAsync(array, async (item, index, arrayLength) => {
    results[index] = await funct(item, index, arrayLength);
  });
  return results;
};
assign(acid, {
  mapAsync,
});
