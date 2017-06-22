import acid from '../namespace/index';
import { assign } from '../internal/object';
export const mapAsync = async (array, funct) => {
  const results = [];
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    const item = array[index];
    results[index] = await funct(item, index, arrayLength);
  }
};
assign(acid, {
  mapAsync,
});
