import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
export const isDocumentReady = (func) => {
  const state = document.readyState;
  if (state === 'interactive' || state === 'completed' || state === 'complete') {
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
