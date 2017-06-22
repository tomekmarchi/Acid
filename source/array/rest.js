import acid from '../namespace/index';
import { assign } from '../internal/object';
export const rest = (array) => {
  return array.slice(1, array.length - 1);
};
assign(acid, {
  rest
});
