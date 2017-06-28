import acid from '../namespace/index';
import { assign } from '../internal/object';
export const asyncEach = async (array, arg) => {
  const arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    const item = array[index];
    await item(arg, index, arrayLength);
  }
};
assign(acid, {
  asyncEach,
});
