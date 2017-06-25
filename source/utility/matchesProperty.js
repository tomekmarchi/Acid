import acid from '../namespace/index';
import { assign } from '../internal/object';
import { get } from './get';
export const matchesProperty = (path, srcValue) => {
  return (item) => {
    return get(path, item) === srcValue;
  };
};
assign(acid, {
  matchesProperty
});
