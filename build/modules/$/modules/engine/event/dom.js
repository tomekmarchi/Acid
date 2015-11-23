var _eventNames = $.eventNames = [];
(function() {
	function getEventsWindow(object) {
		return ["readystatechange", "wheel", "copy", "cut", "paste", "beforescriptexecute", "afterscriptexecute", "abort", "canplay", "canplaythrough", "change",  "ctextmenu", "duratichange", "emptied", "ended", "input", "invalid", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "fullscreenerror", "pointerlockchange", "pointerlockerror", "blur", "error", "focus", "load", "scroll"];
	}
	function getEventsBody(object) {
		return ["mouseenter", "mouseleave", "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "blur", "focus"];
	}

	function listenOnAllEvents() {
		var event = {window:{},body:{}};
		_each_array(getEventsWindow(),function(item,key){
			event.window[item]={};
		});
		_each_array(getEventsBody(),function(item,key){
			event.body[item]={};
		});

		event.window.resize = {
			fn: function() {
				saveDimensions();
			}
		};

		_event(event);
	}
	_isDocumentReady(listenOnAllEvents);
})();
