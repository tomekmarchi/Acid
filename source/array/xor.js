import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray } from './each';
import { unique } from './unique';
// Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
export const xor = (others) => {
  const xored = [];
  eachArray(others, (array) => {
    eachArray(unique(array), (item) => {
      if (xored.includes(item)) {
        xored.splice(xored.indexOf(item), 1);
      } else {
        xored.push(item);
      }
    });
  });
  return xored;
};
assign(acid, {
  xor
});
