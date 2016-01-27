var saveDimensions = () => {
    appState.windowHeight = global.innerHeight;
    appState.windowWidth = global.innerWidth;
    appState.bodyWidth = bodyNode.offsetWidth;
    appState.bodyHeight = bodyNode.offsetHeight;
};

isDocumentReady(() => {
    bodyNode = documentNode.body;
    raf(saveDimensions);
});

$.updateDimensions = saveDimensions;

eventAdd(window, 'load', saveDimensions, true);
