import acid from '../namespace/index';
import { assign } from '../internal/object';
import { clear } from '../array/clear';
import { eachArray } from '../array/each';
import { ensureArray } from '../array/ensure';
import { ifInvoke } from '../function/ifInvoke';
let batchCancelFrame = false;
const batchChanges = [];
const batchLoop = () => {
  eachArray(batchChanges, ifInvoke);
  clear(batchChanges);
  batchCancelFrame = false;
};
export const batch = (item) => {
  batchChanges.push(...ensureArray(item));
  if (!batchCancelFrame) {
    batchCancelFrame = requestAnimationFrame(batchLoop);
  }
};
assign(acid, {
  batch
});
