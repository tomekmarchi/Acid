import acid from '../namespace/index';
import { assign } from '../internal/object';
import { clear } from '../array/clear';
import { eachArray } from '../array/each';
import { ifInvoke } from '../function/ifInvoke';
let batchCancelFrame;
const batchChanges = [];
const batchLoop = () => {
  eachArray(batchChanges, ifInvoke);
  clear(batchChanges);
  batchCancelFrame = false;
};
export const batch = (...items) => {
  batchChanges.push(...items);
  if (!batchCancelFrame) {
    batchCancelFrame = requestAnimationFrame(batchLoop);
  }
};
assign(acid, {
  batch
});
