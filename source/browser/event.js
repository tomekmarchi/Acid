import acid from '../namespace/index';
import { assign } from '../internal/object';
export const	eventAdd = (obj, eventName, func, capture) => {
  obj.addEventListener(eventName, func, capture);
  return obj;
};
export const eventRemove = (obj, eventName, func, capture) => {
  obj.removeEventListener(eventName, func, capture);
  return obj;
};
assign(acid, {
  eventAdd,
  eventRemove,
});
