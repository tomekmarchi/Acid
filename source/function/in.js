import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
import { eachAsync } from '../array/eachAsync';
export const inSync = (fns, arg) => {
  return each(fns, (item) => {
    item(arg);
  });
};
export const inAsync = async (fns, arg) => {
  await eachAsync(fns, async (item) => {
    await item(arg);
  });
};
assign(acid, {
  inAsync,
  inSync,
});
