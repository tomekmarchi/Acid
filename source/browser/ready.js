import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { importjs } from './import';
/**
  * Runs a function if the document has finished loading.
  *
  * @function  isDocumentReady
  * @type {Function}
  * @param {Function} callable - Object to be checked.
  * @returns {boolean} Returns true if the keycode property of the object equals thirteen and vice versa.
  *
  * @example
  * isEnter('click')
  * // => false
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
