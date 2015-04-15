function saveDimensions(){
	_cache.windowHeight=_window.innerHeight;
	_cache.windowWidth=_window.innerWidth;
	_cache.bodyWidth=_body.offsetWidth;
	_cache.bodyHeight=_body.offsetHeight;
};


_isDocumentReady(function(){
	_body=document.body;
	saveDimensions();
});

$eventadd(window,'load',saveDimensions);

