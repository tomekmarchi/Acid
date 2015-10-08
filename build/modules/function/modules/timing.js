//debounce function
$.debounce = function (original,time) {
    var timeout = false;

    var fn = function () {
        var boundTo = this;
        if (timeout) {
            clearTimeout(timeout);
        }
        var args = _toArray(arguments);
        timeout = setTimeout(function () {
            original.apply(boundTo, args);
            timeout = false;
            args = null;
            boundTo = null;
        }, time);
    };

    fn.run = function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        original.apply(this, _toArray(arguments));
    };
    fn.clear = function () {
        if (timeout) {
        	clearTimeout(timeout);
            timeout = false;
            return false;
        }
    };
    return fn;
};

//throttle function
$.throttle = function (func,time) {
    var timeout = false;

    var fn = function () {
        if (timeout) {
            return false;
        }
        var a = _toArray(arguments);
        timeout = setTimeout(function () {
            func.apply(fn, a);
            timeout = false;
        }, time);
    };
    fn.clear = function () {
        if (timeout) {
        	clearTimeout(timeout);
            timeout = false;
            return false;
        }
    };
    fn.run = function () {
        if (timeout) {
            clearTimeout(timeout);
            timeout = false;
        }
        func.apply(fn, _toArray(arguments));
    };

    return fn;
};

//timer wrapper
$.timer= function (fn,time) {
	return setTimeout(fn, time);
};

//timer wrapper
$.interval= function (fn,time) {
    return setInterval(fn, time);
};

//async function call
$.asyncFN=(haspromise)?
	function (fnc) {
		_promise_async.then(fnc);
		return false;
	}:function (fnc) {
		setTimeout(fnc, 0);
		return false;
	};