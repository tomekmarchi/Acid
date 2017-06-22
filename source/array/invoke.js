import acid from '../namespace/index';
import { assign } from '../internal/object';
import { mapArray } from './each';
// Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
const invoke = (array, methodName, args) => {
  return mapArray(array, (item) => {
    return item[methodName](...args);
  });
};
assign(acid, {
  invoke
});
