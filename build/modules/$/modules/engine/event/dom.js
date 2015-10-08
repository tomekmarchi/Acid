var _eventNames = $.eventNames = [];
(function() {
	function getEvents(object, dublicateCheck) {
		return ["readystatechange", "mouseenter", "mouseleave", "wheel", "copy", "cut", "paste", "beforescriptexecute", "afterscriptexecute", "abort", "canplay", "canplaythrough", "change", "click", "ctextmenu", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "duratichange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pause", "play", "playing", "progress", "ratechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange", "fullscreenerror", "pointerlockchange", "pointerlockerror", "blur", "error", "focus", "load", "scroll"];
	}

	function listenOnAllEvents() {
		var event = {},
			documentEvents = getEvents();
		_each_array(documentEvents,function(item,key){
			event[item]={};
		});

		event.resize = {
			fn: function() {
				saveDimensions();
			}
		};

		_event(event);
	}
	_isDocumentReady(listenOnAllEvents);
})();
