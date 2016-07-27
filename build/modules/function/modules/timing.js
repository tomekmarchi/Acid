/*
	This is for async promises & timer functions
*/
//haspromises
var promiseAsync = Promise.resolve(),
	//async function call
	asyncMethod = promiseAsync.then.bind(promiseAsync),
	//timeing
	clearTimer = clearTimeout,
	timerMethod = $.timer = function (fn, time) {
		return setTimeout(fn, time);
	},
	intervalMethod = $.interval = function (fn, time) {
		return setInterval(fn, time);
	};


//debounce function
$.debounce = (original, time) => {
	var timeout = False;

	function fn() {
		if (timeout !== False) {
			clearTimer(timeout);
		}
		var args = toArray(arguments);
		timeout = timerMethod(function () {
			apply(original, fn, args);
			timeout = False;
		}, time);
	}

	fn.clear = function () {
		if (timeout) {
			clearTimeout(timeout);
			timeout = False;
		}
	};
	return fn;
};

//throttle function
$.throttle = function (func, time) {
	var timeout = False,shouldThrottle;

	function fn() {
		if(timeout){
			shouldThrottle=True;
			return;
		}
		var args = toArray(arguments);
		apply(func, fn, args);
		timeout = timerMethod(function () {
			if(shouldThrottle){
				apply(func, fn, args);
			}
			timeout = False;
		}, time);
	}
	fn.clear = () => {
		clearTimer(timeout);
		timeout = False;
	};
	return fn;
};

function generateClear(method, clearMethod) {
	return () => {
		mapNumber(0, method(() => {}, 1000), (index) => {
			clearMethod(index);
		});
	};
}

$.clearTimers = generateClear(timerMethod, clearTimer);
$.clearIntervals = generateClear(intervalMethod, clearInterval);


$.inAsync = function (fns) {
	eachArray(isFunction(fns) ? [fns] : fns, asyncMethod);
};
