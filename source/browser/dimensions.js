import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { isDocumentReady } from './ready';
export const saveDimensions = () => {
  assign(acid.appState, {
    bodyHeight: document.body.offsetHeight,
    bodyWidth: document.body.offsetWidth,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  });
};
export const updateDimensions = () => {
  requestAnimationFrame(saveDimensions);
};
isDocumentReady(updateDimensions);
eventAdd(window, 'load', updateDimensions, true);
eventAdd(window, 'resize', updateDimensions, true);
assign(acid, {
  saveDimensions,
  updateDimensions
});
