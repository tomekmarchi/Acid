import acid from '../../../namespace/index';
import get from '../native/get';
acid.matchesProperty = (path, srcValue) => {
  return (item) => {
    return get(path, item) === srcValue;
  };
};
