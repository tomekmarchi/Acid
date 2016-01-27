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
    timerMethod = $.timer = setTimeout,
    intervalMethod = $.interval = setInterval;


//debounce function
$.debounce = (original, time) => {
    var timeout = false,
        fn = function() {
            if (timeout !== false) {
                clearTimer(timeout);
            }
            var args = toArray(arguments);
            timeout = timerMethod(function() {
                apply(original, fn, args);
                timeout = false;
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
            timeout = false;
        }
    };
	fn.og=original;
    return fn;
};

//throttle function
$.throttle = function(func, time) {
    var timeout = false,
        fn = function() {
            if (timeout !== false) {
                return false;
            }
            var args = toArray(arguments);
            timeout = timerMethod(function() {
                apply(func, fn, args);
                timeout = false;
            }, time);
        };
    fn.clear = () => {
        clearTimer(timeout);
        timeout = false;
    };
    fn.run = function() {
        clearTimer(timeout);
        timeout = false;
        apply(func, fn, toArray(arguments));
    };
	fn.og=original;
    return fn;
};

$.clearTimers = () => {
    //clear all timers
    eachNumber(0, timerMethod(() => {}, 1000), (index) => {
        clearTimer(index);
    });
};

$.clearIntervals = () => {
    eachNumber(0, intervalMethod(() => {}, 1000), (index) => {
        clearInterval(index);
    });
};


$.inAsync = function(fns) {
    if (isFunction(fns)) {
        asyncMethod(fns);
    } else if (isArray(fns)) {
        eachArray(fns, asyncMethod);
    } else {
        eachObject(fns, asyncMethod);
    }
};
