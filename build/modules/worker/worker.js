var worker_extend = (function () {
	var $active_workers = 0,
		_worker_list = [],
		$_ww_msg = function (e) {
			var worker = e.target,
				id = worker.prototype,
				event = e.data.event,
				data = e.data;
			e.data.event = null;
			if (event != 'terminate') {
				if (event == 'message') {
					var fn = worker.message || data.call;
					if (fn) {
						if (_isString(fn)) {
							_ensure(fn,function () {
									_async(function () {
										_find(fn, _model)(data, e);
										fn = null;
										e = null;
										data = null;
									});
									return false;
								});
						} else {
							if (isNumber(fn)) {
								_async(function () {
									$anons[fn](data, e);
									$anons[fn] = null;
									fn = null;
									data = null;
									e = null;
								});
							} else {
								_async(function () {
									fn(data, e);
									fn = null;
									data = null;
									e = null;
								});
							}
						}
					}
				} else {
					if (ww = $ext.ww) {
						if (ww = ww.actions) {
							var fn = ww[event];
							if (fn) {
								_async(function () {
									fn(data, e);
									fn = null;
									data = null;
									e = null;
								});
							}
						}
						var ww = null;
					}
				}
			}
			if (e.data.terminate || event == 'terminate') {
				$terminate(worker, id);
			}
			return false;
		},
		$_ww_error = function (e) {
			e.target.terminate();
			var error = e.target.error;
			if (error) {
				error();
			}
			console.log('WW ERROR');
			e.log();
			var id = null,
				e = null;
			return false;
		},
		$terminate = function (worker, id) {
			//remove events
			$eventremove(worker, "message", $_ww_msg);
			$eventremove(worker, "error", $_ww_error);
			//terminate
			worker.terminate();
			if ($debug) {
				//log terminated
				console.log('TERMINATED WW-' + $active_workers);
			}
			//keep count of workers
			$active_workers = $active_workers - 1;
			_async(function () {
				var queue = _worker_list.shift();
				if (queue) {
					_async(function () {
						$thread(data);
					});
				}
			});
			var worker = null;
			return false;
		},
		$thread = function (i) {
			var url = i.url,
				worker = new Worker(url),
				start = i.start;
			if ($debug) {
				console.log('WW Start-' + $active_workers);
			}
			$active_workers = $active_workers + 1;
			var call = i.call,
				error = i.error;
			if (call) {
				worker.message = call;
			}
			if (error) {
				worker.error = error;
			}
			$eventadd(worker, "message", $_ww_msg);
			$eventadd(worker, "error", $_ww_error);
			_async(function () {
				$post(worker, i.data)
			});
			if (start) {
				start(worker);
			}
			return worker;
		},
		$anons = [0],
		$post = function (worker, data) {
			var send = {};
			if (data) {
				var call = data.call;
				if (call) {
					if (_isFunction(call)) {
						var len = $anons.length;
						if (len > 1) {
							var m = len - 1;
							if ($anons[m] === null) {
								$anons[m] = call;
								send.call = m;
							} else {
								send.call = $anons.push(call) - 1;
							}
						} else {
							$anons.push(call);
							send.call = 1;
						}
						data.call = null;
					} else if (_isString(call)) {
						send.call = call;
					}
				}
			}
			send.msg = data;
			var c = $ext.credits.full;
			if (c) {
				send.credits = c();
			}
			var extend = $ext.ww;
			if (extend) {
				if (extend.const) {
					send.const = extend.const;
				}
			}
			if (worker) {
				worker.postMessage(send);
			}
			var worker = null;
			return false;
		};
	//worker starts if some are active already they get added to queue with option to force and avoid queue
	$.worker = function (data, force) {
		if (ww = $ext.ww) {
			if (ww = ww.analytics) {
				ww(data);
			}
			var ww = null;
		}
		if (!force) {
			if ($active_workers < $cores) {
				return $thread(data);
			} else {
				return _worker_list.push({
					data: data
				});
			}
		}
		var w = new Worker(data.url);
		$eventadd(w, "message", $_ww_msg);
		$eventadd(w, "error", $_ww_error);
		return w;
	};
	//get queue list
	$.worker.queue= function () {
		return _worker_list;
	};
	//get active count
	$.worker.count= function () {
		return $active_workers;
	};
	//add action to workers for returned data
	$.worker.add= function (data) {
		return $ext.ww.actions = $merge($ext.ww.actions, data);
	};
	$.worker.actions= function () {
		return $ext.ww.actions;
	};
	$.anons = function () {
		return $anons;
	};
	var returned ={
		post: function (i) {
			return $post(this, i);
		}
	};
	return returned;
})();