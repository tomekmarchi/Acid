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
/**
  * Batch processing using requestAnimationFrame.
  *
  * @function batch
  * @category browser
  * @ignoreTest
  * @type {Function}
  * @param {...Function} items - The functions to add to the current batch.
  * @returns {undefined} Returns undefined.
  *
  * @example
  * batch(() => {});
  * // => undefined
*/
export const batch = (...items) => {
  batchChanges.push(...items);
  if (!batchCancelFrame) {
    batchCancelFrame = requestAnimationFrame(batchLoop);
  }
};
assign(acid, {
  batch
});
