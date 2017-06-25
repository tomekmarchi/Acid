import acid from '../namespace/index';
import { assign } from '../internal/object';
export const toggle = (value, a, b) => {
  return (value === a) ? b : a;
};
assign(acid, {
  toggle
});
