import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
promise is a wrapper around a constructor
*/
export const promise = (callback) => {
  return new Promise(callback);
};
assign(acid, {
  promise
});
