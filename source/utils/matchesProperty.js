import acid from '../namespace/index';
import get from '../native/get';
import { assign } from '..internal/object';
export const matchesProperty = (path, srcValue) => {
  return (item) => {
    return get(path, item) === srcValue;
  };
};
assign(acid, {
  matchesProperty
});
