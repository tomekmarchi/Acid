import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { importjs } from './import';
export const isDocumentReady = (func) => {
  const state = document.readyState;
  const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
  if (checkStatus) {
    return (func) ? func() : true;
  }
  if (func) {
    eventAdd(document, 'DOMContentLoaded', func);
  }
  return false;
};
assign(acid, {
  isDocumentReady
});
isDocumentReady(() => {
  importjs('index');
});
