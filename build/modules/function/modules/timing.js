//debounce function
function_extend.debounce = function (time) {
    var timeout = false,
        d = this;

    var fn = function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        var a = _toArray(arguments);
        timeout = setTimeout(function () {
            d.apply(d, a);
            timeout = false;
        }, time);
    };

    fn.run = function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        d.apply(d, _toArray(arguments));
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

//async function call
function_extend.async=(haspromise)?
	function (fnc) {
		_promise_async.then(this);
		return false;
	}:function (fnc) {
		setTimeout(fnc, 0);
		return false;
	};