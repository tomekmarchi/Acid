var saveDimensions = $.updateDimensions = () => {
    appState.windowHeight = global.innerHeight;
    appState.windowWidth = global.innerWidth;
    appState.bodyWidth = bodyNode.offsetWidth;
    appState.bodyHeight = bodyNode.offsetHeight;
};

isDocumentReady(() => {
    bodyNode = documentNode.body;
    raf(saveDimensions);
});

eventAdd(window, 'load', saveDimensions, True);
