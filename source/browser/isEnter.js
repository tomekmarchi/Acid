import acid from '../namespace/index';
import { assign } from '../internal/object';
export const isEnter = (eventObject) => {
  return eventObject.keyCode === 13;
};
assign(acid, {
  isEnter
});
