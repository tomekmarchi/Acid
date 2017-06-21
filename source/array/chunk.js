import acid from '../namespace/index';
import { assign } from '../internal/object';
export const chunk = (array, size = 1) => {
  const chunked = [];
  let index = 0;
  array.forEach((item, key) => {
    if (!(key % size)) {
      chunked.push([]);
      if (key) {
        index++;
      }
    }
    chunked[index].push(item);
  });
  return chunked;
};
assign(acid, {
  chunk,
});
