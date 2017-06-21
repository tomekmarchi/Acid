import acid from '../namespace/index';
import { assign } from '../internal/object';
export const first = (array, upTo) => {
  return (upTo) ? array.slice(0, upTo) : array[0];
};
assign(acid, {
  first
});
