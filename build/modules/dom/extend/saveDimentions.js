function saveDimensions(){
	appState.windowHeight=_window.innerHeight;
	appState.windowWidth=_window.innerWidth;
	appState.bodyWidth=_body.offsetWidth;
	appState.bodyHeight=_body.offsetHeight;
};

_isDocumentReady(function(){
	_body=document.body;
	raf(saveDimensions);
});

$.updateDimensions=saveDimensions;

window.addEventListener('load', saveDimensions, true);
