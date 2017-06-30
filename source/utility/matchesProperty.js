import acid from '../namespace/index';
import { assign } from '../internal/object';
import { get } from './get';
/**
   * matchesProperty checks if the value of a path is equivalent to the srcValue argument. Returns a boolean.
   @property {path} - takes a string
   @property {srcValue} - takes anything which can be run through a strict comparison
   @example
   const obj = {
   a:1,
   b:2
 };
 const comparison = 1
 matchesProperty(obj.a, comparison);
 
*/
export const matchesProperty = (path, srcValue) => {
  return (item) => {
    return get(path, item) === srcValue;
  };
};
assign(acid, {
  matchesProperty
});
