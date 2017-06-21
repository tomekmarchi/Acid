const saveDimensions = () => {
  objectAssign(appState, {
    windowHeight: global.innerHeight,
    windowWidth: global.innerWidth,
    bodyWidth: bodyNode.offsetWidth,
    bodyHeight: bodyNode.offsetHeight
  });
};
acid.updateDimensions = saveDimensions;
isDocumentReady(() => {
  bodyNode = documentNode.body;
  raf(saveDimensions);
});
eventAdd(eventAdd(window, 'resize', saveDimensions, true), 'load', saveDimensions, true);
