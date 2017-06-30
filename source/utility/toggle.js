import { assign } from '../internal/object';
import acid from '../namespace/index';
 /**
 toggle does a strict comparison between the value and a argument. If it returns true, then it returns the b argument. Else it returns the a argument.
 */
export const toggle = (value, on, off) => {
 return (value === on) ? off : on;
  };
 assign(acid, {
   toggle
