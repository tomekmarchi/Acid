import $ from '../../../namespace/index';
import get from '../native/get';
$.matchesProperty = (path, srcValue) => {
  return (item) => {
    return get(path, item) === srcValue;
  };
};
