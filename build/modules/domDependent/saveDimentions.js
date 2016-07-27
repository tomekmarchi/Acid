var saveDimensions = $.updateDimensions = () => {
	objectAssign(appState, {
		windowHeight: global.innerHeight,
		windowWidth: global.innerWidth,
		bodyWidth: bodyNode.offsetWidth,
		bodyHeight: bodyNode.offsetHeight
	});
};

isDocumentReady(() => {
	bodyNode = documentNode.body;
	raf(saveDimensions);
});

eventAdd(eventAdd(window, 'resize', saveDimensions, True), 'load', saveDimensions, True);
