import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { importjs } from './import';
/**
  * Runs a function if the document has finished loading. If not, add an eventlistener.
  *
  * @function isDocumentReady
  * @type {Function}
  * @param {Function} callable - Function to be run.
  * @returns {Boolean|Function} - If the document is ready, returns a function. If not, return false.
  *
  * @example
  * isDocumentReady(() => {return 1});
  * // => 1
*/
export const isDocumentReady = (callable) => {
  const state = document.readyState;
  const checkStatus = state === 'interactive' || state === 'completed' || state === 'complete';
  if (checkStatus) {
    return (callable) ? callable() : true;
  }
  if (callable) {
    eventAdd(document, 'DOMContentLoaded', callable);
  }
  return false;
};
assign(acid, {
  isDocumentReady
});
isDocumentReady(() => {
  importjs('index');
});
