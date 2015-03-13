(function(){
	function listen_on_all_events(){
		var event={
			window: {
				obj: _window,
				scroll: {
					capture: true
				},
				resize: {
					capture: true,
					fn:function(){
						if($debug){
							$.log('resize cache updated');
						}
						$.cache.wh={};
						$.cache.bodyWidth=_body.offsetWidth;
						$.cache.bodyHeight=_body.offsetHeight;
						$.cache.windowh=_window.innerHeight;
						$.cache.windoww=_window.innerWidth;
						return false;
					}
				},
				message: {
					capture: true
				},
				popstate: 1
			},
			document: {
				obj: document,
				load: {
					capture: true
				},
				error: {
					capture: true
				},
				change: {
					capture: true
				},
				loadeddata: {
					capture: true
				}
			},
			body: {
				obj: document.body,
				keydown: {
					capture: true,
				},
				keyup: {
					capture: true,
				},
				keypress: {
					capture: true,
				},
				input: {
					capture: true,
				},
				paste: {
					capture: true,
				},
				click: {
					capture: true
				},
				mouseover:{
					capture: true
				},
				mouseout:{
					capture: true
				},
				mousedown: {
					capture: true
				},
				mousemove: {
					capture: true
				},
				mouseup: {
					capture: true
				},
				mousewheel: {
					capture: true
				},
				contextmenu: {
					capture: true
				},
				touchstart: {
					capture: true
				},
				touchend: {
					capture: true
				},
				touchmove: {
					capture: true
				}
			}
		};
		_event(event);
	}
    _isDocumentReady(listen_on_all_events);
})();