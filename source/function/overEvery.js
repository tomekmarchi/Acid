import acid from '../namespace/index';
import { assign } from '../internal/object';
export const overEvery = (array) => {
  return (...args) => {
    let result;
    array.find(array, (item) => {
      result = Boolean(item(...args));
      return result;
    });
    return result;
  };
};
export const over = (array) => {
  return (...args) => {
    return array.map((item) => {
      return item(...args);
    });
  };
};
assign(acid, {
  over,
  overEvery,
});
