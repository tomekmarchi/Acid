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
acid.updateDimensions = saveDimensions;
isDocumentReady(() => {
  requestAnimationFrame(saveDimensions);
});
eventAdd(window, 'load', saveDimensions, true);
eventAdd(window, 'resize', saveDimensions, true);
assign(acid, {
  saveDimensions
});
