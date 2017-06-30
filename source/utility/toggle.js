import { assign } from '../internal/object';
import acid from '../namespace/index';
 /**
 toggle does a strict comparison between the value and an argument. If it returns true, then it returns the b argument. Else it returns the a argument.
 @property  {value} - Can be any data type
 @property {on} -  Can be any data type. Is compared against value.
 @example
 const value = 1;
 const on = 1;
 toggle(value, on)
 */
export const toggle = (value, on, off) => {
 return (value === on) ? off : on;
  };
 assign(acid, {
   toggle
