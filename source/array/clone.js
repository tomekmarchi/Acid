import acid from '../namespace/index';
import { assign } from '../internal/object';
export const cloneArray = (array) => {
  return [...array];
};
assign(acid, {
  cloneArray
});
