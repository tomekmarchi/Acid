import acid from '../namespace/index';
import { assign } from '../internal/object';
// Returns a copy of the array with all instances of the values removed.
const without = (array, ...args) => {
  return array.filter((item) => {
    return !args.includes(item);
  });
};
assign(acid, {
  without
});
