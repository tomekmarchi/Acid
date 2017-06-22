import acid from '../namespace/index';
import { assign } from '../internal/object';
import { eventAdd } from './event';
import { isDocumentReady } from './ready';
export const saveDimensions = () => {
  assign(acid.appState, {
    windowHeight: global.innerHeight,
    windowWidth: global.innerWidth,
    bodyWidth: document.body.offsetWidth,
    bodyHeight: document.body.offsetHeight
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
