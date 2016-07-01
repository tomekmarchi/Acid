/*
	This is for async promises & timer functions
*/
//haspromises
var promiseAsync = Promise.resolve(),
    //async function call
    asyncMethod = promiseAsync.then.bind(promiseAsync),
    //timeing
    clearTimer = $.timerClear = clearTimeout,
    intervalClear = clearInterval,
    timerMethod = $.timer = function(fn,time){
		return setTimeout(fn,time);
	},
    intervalMethod = $.interval = function(fn,time){
		return setInterval(fn,time);
	};


//debounce function
$.debounce = (original, time) => {
    var timeout = False,
        fn = function() {
            if (timeout !== False) {
                clearTimer(timeout);
            }
            var args = toArray(arguments);
            timeout = timerMethod(function() {
                apply(original, fn, args);
                timeout = False;
            }, time);
        };
    fn.run = function() {
        if (timeout) {
            clearTimeout(timeout);
        }
        apply(original, fn, toArray(arguments));
    };
    fn.clear = function() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = False;
        }
    };
	fn.og=original;
    return fn;
};

//throttle function
$.throttle = function(func, time) {
    var timeout = False,
        fn = function() {
            if (timeout !== False) {
                return False;
            }
            var args = toArray(arguments);
            timeout = timerMethod(function() {
                apply(func, fn, args);
                timeout = False;
            }, time);
        };
    fn.clear = () => {
        clearTimer(timeout);
        timeout = False;
    };
    fn.run = function() {
        clearTimer(timeout);
        timeout = False;
        apply(func, fn, toArray(arguments));
    };
	fn.og=original;
    return fn;
};

$.clearTimers = () => {
    //clear all timers
    mapNumber(0, timerMethod(() => {}, 1000), (index) => {
        clearTimer(index);
    });
};

$.clearIntervals = () => {
    mapNumber(0, intervalMethod(() => {}, 1000), (index) => {
        clearInterval(index);
    });
};


$.inAsync = function(fns) {
    if (isFunction(fns)) {
        asyncMethod(fns);
    } else if (isArray(fns)) {
        eachArray(fns, asyncMethod);
    } else {
        eachArray(fns, asyncMethod);
    }
};
