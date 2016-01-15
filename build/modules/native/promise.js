//make a promise
var _promise = $.promise = function(arry, name, callback, calls) {
		var arrayLength=arry.length;
        _promises[name] = function() {
            var fn = _promises[name],
                go = 0;
            _each_array(arry, (item) => {
                if (fn[item] === 1) {
                    go = go + 1;
                }
            });
            //if amount of promises made were same as needed then launch callback
            if (go === arrayLength) {
                _async(callback);
                _promises[name] = null;
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
    _promised = function(self, fn) {
        var val = _promises[fn];
        _promises[fn][self] = 1;
        if (val) {
            if (val()) {
                _promises[fn] = null;
            }
        }
        return false;
    },
    _promoiseFN = function(array, name, fun) {
        return _promise(array, name, fun);
    },
    _promises = $.promises = {};
