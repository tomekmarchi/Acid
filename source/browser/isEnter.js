import acid from '../namespace/index';
import { assign } from '../internal/object';
export const isEnter = (eventObject) => {
  const keyCode = eventObject.keyCode;
  if (keyCode === 13) {
    return true;
  }
  return false;
};
assign(acid, {
  isEnter
});
