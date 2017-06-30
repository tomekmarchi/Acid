import acid from '../namespace/index';
import { assign } from '../internal/object';
export const toggle = (value, on, off) => {
  return (value === on) ? off : on;
};
assign(acid, {
  toggle
});
