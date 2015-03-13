var socket_extend = (function () {
	//generate socket event handlers
	var gen_ws_ev = function (n) {
			return function (e) {
				var data = e.data,
					ws = e.target,
					call = ws[n];
				if (call) {
					if (_isString(call)) {
						_ensure(call,function () {
								_async(function () {
									_find(call, _model)(data, e);
									call = null;
									data = null;
									e = null;
								});
								return false;
							});
					} else {
						_async(function () {
							call(data, e);
							call = null;
							data = null;
							e = null;
						});
					}
				}
				return false;
			};
		},
		socket_error = gen_ws_ev('error'),
		socket_open = gen_ws_ev('open'),
		socket_msg = gen_ws_ev('msg'),
		gen_ws_ev = null;

	$.socket = function (c) {
		var ws = new WebSocket($protocol_socket + '://' + $ext.ws.host + c.url),
			e = c.error,
			o = c.open,
			m = c.msg;
		if (e) {
			ws.error = e;
		}
		if (o) {
			ws.open = o;
		}
		if (m) {
			ws.msg = m;
		}
		$eventadd(ws, 'error', socket_error);
		$eventadd(ws, 'open', socket_open);
		$eventadd(ws, 'message', socket_msg);
		return ws;
	};
	var returned={
		kill:function(){
			var w=this;
			w.close();
			$eventremove(w,'message',socket_msg);
			$eventremove(w,'message',socket_msg);
			$eventremove(w,'message',socket_msg);
		}
	};
	return returned;
})();