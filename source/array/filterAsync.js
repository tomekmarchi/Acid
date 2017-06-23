import acid from '../namespace/index';
import { assign } from '../internal/object';
import { hasValue } from '../internal/is';
export const filterAsync = async (array, funct) => {
  const results = [];
  const arrayLength = array.length;
  let result;
  for (let index = 0; index < arrayLength; index++) {
    const item = array[index];
    result = await funct(item, index, arrayLength);
    if (hasValue(result)) {
      results.push(await funct(item, index, arrayLength));
    }
  }
};
assign(acid, {
  filterAsync,
});
