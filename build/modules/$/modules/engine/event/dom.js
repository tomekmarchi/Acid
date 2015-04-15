var _eventNames = $.eventNames = [];
(function () {
	function getEvents(object,dublicateCheck){
		var ev = '',
		    out = {};
		for (ev in window) {
		    if (/^on/.test(ev)) {
			    var item=ev.replace('on','');
			    if(!dublicateCheck[item]){
					out[ev.replace('on','')] = {
						capture: true,
					};
			    }
		    }
		}
		return out;
	}

	function listenOnAllEvents() {

		var event = {};
		var dublicateCheck= {};

		var windowEvents=getEvents(_window,dublicateCheck);
		windowEvents.obj=_window;
		windowEvents.resize.fn=function () {
			if ($debug) {
				$.log('resize cache updated');
			}
			saveDimensions();
			return false;
		};

		event.window=windowEvents;

		var documentEvents=getEvents(document,dublicateCheck);
		documentEvents.obj=document;

		event.document=documentEvents;


		_each_object(event, function (item) {
			_each_object(item, function (subItem, key) {
				if(key!='obj'){
					_eventNames.push(key);
				}
			});
		});
		_event(event);
	}
	_isDocumentReady(listenOnAllEvents);
})();