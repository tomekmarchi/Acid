/*
	This is for async promises & timer functions
*/
//haspromises
var promiseAsync = Promise.resolve(),
    //async function call
    _async = function(fnc) {
        return promiseAsync.then(fnc);
    },
    //timeing
    _timer = setTimeout;

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

$.timerClear = function (number) {
	return clearTimeout(number);
};

$.intervalClear = function (number) {
	return clearInterval(number);
};

$.clearTimers = function(){
	//clear all timers
	var maxId = setTimeout(function() {}, 0);
	for (var i = 0; i < maxId; i++) {
	    clearTimeout(i);
	}
};

$.clearIntervals = function(){
	//clear all timers
	var maxId = setInterval(function() {}, 1000);
	for (var i = 0; i <= maxId; i++) {
	    clearInterval(i);
	}
};

//timer wrapper
$.timer = _timer;

//timer wrapper
$.interval = setInterval;

$.async = function(fns) {
	if (_isFunction(fns)) {
		_async(fns);
	} else if (_isArray(fns)) {
		_each_array(fns, asyncLaunch);
	} else {
		_each_object(fns,asyncLaunch);
	}
};
