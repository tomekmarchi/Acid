import acid from '../namespace/index';
import { assign } from '../internal/object';
import { each } from '../utility/each';
import { eachAsync } from '../array/eachAsync';
export const inSync = (fns, args) => {
  return each(fns, (item) => {
    item(args);
  });
};
export const inAsync = async (fns, args) => {
  await eachAsync(fns, async (item) => {
    await item(args);
  });
};
assign(acid, {
  inSync,
  inAsync
});
