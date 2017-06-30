import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
toggle does a strict comparison between the value and a argument. If it returns true, then it returns the b argument. Else it returns the a argument.
*/
export const toggle = (value, a, b) => {
  return (value === a) ? b : a;
};
assign(acid, {
  toggle
});
