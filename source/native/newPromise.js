import acid from '../namespace/index';
import { assign } from '../internal/object';
const promise = (callback) => {
  return new Promise(callback);
};
assign(acid, {
  promise
});
