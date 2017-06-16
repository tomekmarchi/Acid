let batchCancelFrame = false;
const batchChanges = [];
const batchLoop = () => {
  eachArray(batchChanges, ifInvoke);
  clearArray(batchChanges);
  batchCancelFrame = false;
};
const batchAdd = (item) => {
  pushApply(batchChanges, ensureArray(item));
  if (!batchCancelFrame) {
    batchCancelFrame = raf(batchLoop);
  }
};
$.batch = batchAdd;
