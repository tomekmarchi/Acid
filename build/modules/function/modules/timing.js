//debounce function
function_extend.debounce = function (time) {
    var timeout = false,
        original = this;

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
function_extend.throttle = function (time) {
    var timeout = false,
        func = this;

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
function_extend.timer= function (time) {
	return setTimeout(this, time);
};

//timer wrapper
function_extend.interval= function (time) {
    return setInterval(this, time);
};

//async function call
function_extend.async=(haspromise)?
	function (fnc) {
		_promise_async.then(this);
		return false;
	}:function (fnc) {
		setTimeout(fnc, 0);
		return false;
	};