/*
	This is for async promises & timer functions
*/
//haspromises
//haspromises
var haspromise = Promise,
	//make async function calling faster than timeout 0
	_promise_async = (haspromise) ? haspromise.resolve() : null,
	//async function call
	_async = (haspromise) ?
function (fnc, a) {
	_promise_async.then(fnc);
	return false;
} : function (fnc, a) {
	_timer(fnc, 0);
	return false;
},
//timeing
_timer = function (fun, time, callback) {
	return setTimeout(function () {
		fun();
		if (callback) {
			callback();
		}
		fun = null;
		callback = null;
		return false;
	}, time);
},
//make promise array
_promise = function (arry, name, callback, calls) {
	_promises[name] = function () {
		var len = arry.length,
			fn = _promises[name],
			go = 0;
		for (var i = 0; i < len; i++) {
			if (fn[arry[i]] == 1) {
				var go = go + 1;
			}
		}
		//if amount of promises made were same as needed then launch callback
		if (go == len) {
			_async(callback);
			$.promises[name] = null;
			return true;
		}
		return false;
	};
	_promises[name].call = {};
	if (calls) {
		_promises[name].call = calls;
	}
},
//promised
_promised = function (self, fn) {
	var val = _promises[fn];
	_promises[fn][self] = 1;
	if (val) {
		var funn = val();
		if (funn) {
			_promises[fn] = null;
		}
	}
	var item = null,
		fun = null,
		funn = null;
	return false;
};