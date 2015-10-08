//debounce function
$.debounce = function(original, time) {
	var timeout = false,
		fn = function() {
			if (timeout !== false) {
				clearTimeout(timeout);
			}
			var args = _toArray(arguments),
				boundTo = this;
			timeout = setTimeout(function() {
				original.apply(boundTo, args);
				timeout = false;
				args = null;
				boundTo = null;
			}, time);
		};
	fn.run = function() {
		if (timeout) {
			clearTimeout(timeout);
		}
		original.apply(this, _toArray(arguments));
	};
	fn.clear = function() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = false;
		}
	};
	return fn;
};

//throttle function
$.throttle = function(func, time) {
	var timeout = false,
		fn = function() {
			if (timeout !== false) {
				return false;
			}
			var args = _toArray(arguments);
			timeout = setTimeout(function() {
				func.apply(fn, args);
				args = null;
				timeout = false;
			}, time);
		};
	fn.clear = () => {
		clearTimeout(timeout);
		timeout = false;
	};
	fn.run = function() {
		clearTimeout(timeout);
		timeout = false;
		func.apply(fn, _toArray(arguments));
	};

	return fn;
};

//timer wrapper
$.timer = function(fn, time) {
	return setTimeout(fn, time);
};

//timer wrapper
$.interval = function(fn, time) {
	return setInterval(fn, time);
};

//async function call
$.asyncFN = (haspromise) ?
	function(fnc) {
		_promise_async.then(fnc);
	} : function(fnc) {
		setTimeout(fnc, 0);
	};
