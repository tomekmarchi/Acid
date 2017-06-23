import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eachArray, clearArray } from '../array/each';
import { ensureArray } from '../array/ensure';
import { ifInvoke } from '../array/function';
let batchCancelFrame = false;
const batchChanges = [];
const batchLoop = () => {
  eachArray(batchChanges, ifInvoke);
  clearArray(batchChanges);
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
