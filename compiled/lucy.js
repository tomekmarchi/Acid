/**
 * ACID JS BETA.
 * @version 5.7
 * @author Thomas Marchi
 * @copyright 2014 Thomas Marchi
 * @acidjs.com
 * @email tom@lnkit.com
 */
(function (_global) {
    "use strict";
    //avoid
    var avoid = false,
        //global object
        $ = {};
    //debug option
    var $debug = false,
        //extend options
        $ext = {
            credits: {}
        };
/*

	Native objects

*/
    //String Object
    var _array = Array,
        //Object Object
        _object = Object,
        //Function Object
        _function = Function,
        //String Object
        _string = String,
        //JSON Object
        json = JSON,
        //Math Object
        _math = Math,
        //boolean object
        _boolean = Boolean,
        //weakmap
        weak_map = WeakMap,
        new_weak_map = function () {
            return new weak_map();
        },
        //map
        _map = Map,
        //number
        number_object = Number,
        //worker object
        _worker = Worker,
        //web socket
        _socket = WebSocket,
        _RAF = requestAnimationFrame,
        //storage
        //local
        _localstorage = localStorage,
        //session
        _sessionStorage = sessionStorage,
        //console.log wrapper
        _console = function (obj) {
            console.log(obj);
        };

/*

	Prototypes

*/
    //cache in string for compression
    var $prototype = 'prototype',
        //prototypes
        object_prototype = _object[$prototype],
        //array prototype
        array_prototype = _array[$prototype],
        //string
        string_prototype = _string[$prototype],
        //websocket
        websocket_prototype = WebSocket[$prototype],
        //webworker
        worker_prototype = Worker[$prototype];

/*
	Array.prototype Functions cached
*/

    //array push
    var _array_push = array_prototype.push,
        _array_unobserve = _array.unobserve,
        _array_observe = _array.observe;

/*

	Object. Functions cached

*/
    //object keys cached
    var _object_keys = _object.keys,
        _getNotifier = _object.getNotifier,
        //object assign cached
        _object_assign = _object.assign,
        //getOwnPropertyDescriptor
        _object_getOwnPropertyDescriptor = _object.getOwnPropertyDescriptor,
        _observe = _object.observe,
        _deliverChangeRecords = _object.deliverChangeRecords,
        _defineProperty = _object.defineProperty,
        _unobserve = _object.unobserve;
/*
	Function methods cache
*/
    var _bind = Function.bind,
        _bind_call = function (object, data) {
            return _bind.call(object, data);
        };
    var $class_test = /^.[\w_-]+$/,
        $tag_test = /^[A-Za-z]+$/,
        regex_space = /\s/,
        regex_space_global = /\s/g,
        regex_dot = /\./g,
        regex_dash = /-/g,
        regex_fowardslash = /\//g,
        $replace_template_string = /\{(.*?)\}/g,
        regex_ext = /\.[0-9a-z]+$/i,
        regex_underscore = /_/g;
    var $protocol = location.protocol,
        //websocket protocol type
        $protocol_socket = ('$protocol' == 'http:') ? 'ws' : 'wss',
        $hostname = location.hostname;
/*
	This is for object checking is or isnot
	*/
    //checking
    var obj_strng_gen = function (name) {
        return '[object ' + name + ']';
    },
        regexptype = obj_strng_gen('RegExp'),

        argsTag = obj_strng_gen('Arguments'),

        arrayTag = obj_strng_gen('Array'),

        boolTag = obj_strng_gen('Boolean'),

        dateTag = obj_strng_gen('Date'),

        errorTag = obj_strng_gen('Error'),

        funcTag = obj_strng_gen('Function'),

        mapTag = obj_strng_gen('Map'),

        numberTag = obj_strng_gen('Number'),

        objectTag = obj_strng_gen('Object'),

        setTag = obj_strng_gen('Set'),

        stringTag = obj_strng_gen('String'),

        weakMapTag = obj_strng_gen('WeakMap'),

        arrayBufferTag = obj_strng_gen('ArrayBuffer'),

        float32Tag = obj_strng_gen('Float32Array'),

        float64Tag = obj_strng_gen('Float64Array'),

        int8Tag = obj_strng_gen('Int8Array'),

        int16Tag = obj_strng_gen('Int16Array'),

        int32Tag = obj_strng_gen('Int32Array'),

        unit8Tag = obj_strng_gen('unit8Array'),

        unit8ClampedTag = obj_strng_gen('unit8ClampedArray'),

        unit16Tag = obj_strng_gen('unit16Array'),

        unit32Tag = obj_strng_gen('unit32Array'),

        is_same_obj_gen = function (type) {
            return function (obj) {
                return $tostring.call(obj) === type;
            }
        },
        //is regexp
        isRegex = is_same_obj_gen(regexptype),
        //is args
        isArgs = is_same_obj_gen(argsTag),
        //is bool
        isBool = is_same_obj_gen(boolTag),
        //is date
        isDate = is_same_obj_gen(dateTag),
        //is error
        isError = is_same_obj_gen(errorTag),
        //is map
        isMap = is_same_obj_gen(mapTag),
        //is object
        isObject = is_same_obj_gen(objectTag),
        //is isSet
        isSet = is_same_obj_gen(setTag),
        //is isWeakMap
        isWeakMap = is_same_obj_gen(weakMapTag),
        //is isFloat32
        isFloat32 = is_same_obj_gen(float32Tag),
        //is isFloat64
        isFloat64 = is_same_obj_gen(float64Tag),
        //is isInt8
        isInt8 = is_same_obj_gen(int8Tag),
        //is isInt16
        isInt16 = is_same_obj_gen(int16Tag),
        //is isInt32
        isInt32 = is_same_obj_gen(int32Tag),
        //is unit8
        isUnit8 = is_same_obj_gen(unit8Tag),
        //is unit8clamped
        isUnit8clamped = is_same_obj_gen(unit8ClampedTag),
        //is unit16
        isUnit16 = is_same_obj_gen(unit16Tag),
        //is unit3
        isUnit32 = is_same_obj_gen(unit32Tag),
        //is native function
        isNative = function (obj) {
            return (hasValue(obj)) ? obj.toString().toLowerCase().indexOf('native') != -1 : false;
        },
        //hasval fn returns true or false
        hasValue = function (n) {
            return n !== undefined && n !== null;
        },
        //is undefined
        isUndefined = function (obj) {
            return obj === undefined;
        },
        //is NaN
        isNaN = isNaN,
        //is equal to null
        isNull = function (obj) {
            return obj === null;
        },
        isFinite = isFinite,
        //check if object is array returns true or false
        _isArray = (function (_array) {
            return function (a) {
                return a instanceof _array
            };
        })(_array),
        //checks to see if is string returns true or false
        _isString = function (obj) {
            return (hasValue(obj)) ? obj.constructor === _string : false;
        },
        //checks to see if is number returns true or false
        isNumber = function (obj) {
            return (hasValue(obj)) ? obj.constructor == number_object : false;
        },
        //is plain object returns true or false
        isPlainObject = function (obj) {
            return (hasValue(obj)) ? obj.constructor.toString().trim().slice(9, 16) === 'Object(' : false;
        },
        //checks to see if object is a function returns true or false
        _isFunction = function (obj) {
            return (hasValue(obj)) ? obj instanceof _function : false;
        },
        //searching a string for a string returns true or false
        _has = function (string, search) {
            return string.indexOf(search) != -1;
        },
        //does object have length
        islength = function (obj) {
            return !obj.length;
        },
        isEmpty = function (obj) {
            if (hasValue(obj)) {
                var len = islength(obj);
                if (islength(obj)) {
                    return !len;
                }
                return !_object.keys(obj).length;
            }
            return false;
        };
    //convert object to string
    var $tostring = object_prototype.toString,
        //make collection into an array
        _toArray = (_array.from) ? _array.from : function (nodes) {
            var arr = [];
            for (var i = -1, l = nodes.length; ++i !== l; arr[i] = nodes[i]);
            return arr;
        },
        domListToArray = function (collection) {
            var list = _toArray(collection),
                temp = [],
                length = list.length;
            for (var i = 0; i < length; i++) {
                var item = list[i],
                    name = item.constructor.name;
                if (name == "HTMLCollection" || name == "NodeList") {
                    temp.push.apply(temp, toArrayDeep(item));
                } else {
                    temp.push(item);
                }
            }
            return temp;
        };

    //$.toArrayDeep($('a'))
    //loop through an array of items
    var _each_array = function (array, fn) {
        //an array of results will be returned
        var results = [];
        for (var i = 0, len = array.length; i < len; i++) {
            results[i] = fn(array[i], i);
        }
        return results;
    };
    //loop through an object
    var _each_object = function (object, fn) {
        //an object with matching keys with results will be returned
        var results = {};
        for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
            //object currect key
            var key = keys[i];
            //call function get result
            results[key] = fn(object[key], key, object);
        }
        return results;
    };
    var $eventadd = function (obj, name, func, capture) {
        obj.addEventListener(name, func, capture || false);
        return obj;
    },
        //remove event
        $eventremove = function (obj, name, func, capture) {
            obj.removeEventListener(name, func, capture || false);
            return obj;
        };
/*

This is for finding an object method via a string used througout events

*/
    //find method
    var _find = function (name, obj) {
        var obj = (obj) ? obj : $,
            name = name.split('/').last();
        if (_has(name, '.')) {
            var newname = name.split('.'),
                length = newname.length;
            for (var i = 0; i < length; i++) {
                var obj = obj[newname[i]];
                if (!obj) {
                    return false;
                }
            }
        } else {
            var obj = obj[name];
        }
        return obj || false;
    };
    //extend prototype for acid libs
    var extend = function (obj, ext, wrap) {
        for (var i = 0, keys = _object_keys(obj), len = keys.length; i < len; i++) {
            var key = keys[i];
            var item = obj[key];
            if (item) {
                if (wrap) {
                    var item = wrap(item);
                }
                Object.defineProperty(ext, acid_lib_prefix + key, {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: item
                });
            }
        }
    },
        //merge objects
        $merge = (_object_assign) ?
        function (object, source) {
            return _object_assign(object, source);
        } : function (object, source) {
            var copy = source || {};
            for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
                var key = keys[i],
                    item = object[key];
                if (hasValue(item)) {
                    copy[key] = (isPlainObject(item)) ? $merge(item) : item;
                }
            }
            return copy;
        };
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
    //export acid to global check for attribute avoid
    var avoid = (_global.acidAvoid) ? _global.acidAvoid : avoid;

    if (avoid) {
        _global[avoid] = $;
    } else {
        _global.$ = $;
    }
    var worker_extend = (function () {
        var $active_workers = 0,
            _worker_list = [],
            $_ww_msg = function (e) {
                var worker = e.target,
                    id = worker.prototype,
                    event = e.data.event,
                    data = e.data;
                e.data.event = null;
                if (event != 'terminate') {
                    if (event == 'message') {
                        var fn = worker.message || data.call;
                        if (fn) {
                            if (_isString(fn)) {
                                _ensure(fn, function () {
                                    _async(function () {
                                        _find(fn, _model)(data, e);
                                        fn = null;
                                        e = null;
                                        data = null;
                                    });
                                    return false;
                                });
                            } else {
                                if (isNumber(fn)) {
                                    _async(function () {
                                        $anons[fn](data, e);
                                        $anons[fn] = null;
                                        fn = null;
                                        data = null;
                                        e = null;
                                    });
                                } else {
                                    _async(function () {
                                        fn(data, e);
                                        fn = null;
                                        data = null;
                                        e = null;
                                    });
                                }
                            }
                        }
                    } else {
                        if (ww = $ext.ww) {
                            if (ww = ww.actions) {
                                var fn = ww[event];
                                if (fn) {
                                    _async(function () {
                                        fn(data, e);
                                        fn = null;
                                        data = null;
                                        e = null;
                                    });
                                }
                            }
                            var ww = null;
                        }
                    }
                }
                if (e.data.terminate || event == 'terminate') {
                    $terminate(worker, id);
                }
                return false;
            },
            $_ww_error = function (e) {
                e.target.terminate();
                var error = e.target.error;
                if (error) {
                    error();
                }
                console.log('WW ERROR');
                e.log();
                var id = null,
                    e = null;
                return false;
            },
            $terminate = function (worker, id) {
                //remove events
                $eventremove(worker, "message", $_ww_msg);
                $eventremove(worker, "error", $_ww_error);
                //terminate
                worker.terminate();
                if ($debug) {
                    //log terminated
                    console.log('TERMINATED WW-' + $active_workers);
                }
                //keep count of workers
                $active_workers = $active_workers - 1;
                _async(function () {
                    var queue = _worker_list.shift();
                    if (queue) {
                        _async(function () {
                            $thread(data);
                        });
                    }
                });
                var worker = null;
                return false;
            },
            $thread = function (i) {
                var url = i.url,
                    worker = new Worker(url),
                    start = i.start;
                if ($debug) {
                    console.log('WW Start-' + $active_workers);
                }
                $active_workers = $active_workers + 1;
                var call = i.call,
                    error = i.error;
                if (call) {
                    worker.message = call;
                }
                if (error) {
                    worker.error = error;
                }
                $eventadd(worker, "message", $_ww_msg);
                $eventadd(worker, "error", $_ww_error);
                _async(function () {
                    $post(worker, i.data)
                });
                if (start) {
                    start(worker);
                }
                return worker;
            },
            $anons = [0],
            $post = function (worker, data) {
                var send = {};
                if (data) {
                    var call = data.call;
                    if (call) {
                        if (_isFunction(call)) {
                            var len = $anons.length;
                            if (len > 1) {
                                var m = len - 1;
                                if ($anons[m] === null) {
                                    $anons[m] = call;
                                    send.call = m;
                                } else {
                                    send.call = $anons.push(call) - 1;
                                }
                            } else {
                                $anons.push(call);
                                send.call = 1;
                            }
                            data.call = null;
                        } else if (_isString(call)) {
                            send.call = call;
                        }
                    }
                }
                send.msg = data;
                var c = $ext.credits.full;
                if (c) {
                    send.credits = c();
                }
                var extend = $ext.ww;
                if (extend) {
                    if (extend.const) {
                        send.const = extend.const;
                    }
                }
                if (worker) {
                    worker.postMessage(send);
                }
                var worker = null;
                return false;
            };
        //worker starts if some are active already they get added to queue with option to force and avoid queue
        $.worker = function (data, force) {
            if (ww = $ext.ww) {
                if (ww = ww.analytics) {
                    ww(data);
                }
                var ww = null;
            }
            if (!force) {
                if ($active_workers < $cores) {
                    return $thread(data);
                } else {
                    return _worker_list.push({
                        data: data
                    });
                }
            }
            var w = new Worker(data.url);
            $eventadd(w, "message", $_ww_msg);
            $eventadd(w, "error", $_ww_error);
            return w;
        };
        //get queue list
        $.worker.queue = function () {
            return _worker_list;
        };
        //get active count
        $.worker.count = function () {
            return $active_workers;
        };
        //add action to workers for returned data
        $.worker.add = function (data) {
            return $ext.ww.actions = $merge($ext.ww.actions, data);
        };
        $.worker.actions = function () {
            return $ext.ww.actions;
        };
        $.anons = function () {
            return $anons;
        };
        var returned = {
            post: function (i) {
                return $post(this, i);
            }
        };
        return returned;
    })();
    var socket_extend = (function () {
        //generate socket event handlers
        var gen_ws_ev = function (n) {
            return function (e) {
                var data = e.data,
                    ws = e.target,
                    call = ws[n];
                if (call) {
                    if (_isString(call)) {
                        _ensure(call, function () {
                            _async(function () {
                                _find(call, _model)(data, e);
                                call = null;
                                data = null;
                                e = null;
                            });
                            return false;
                        });
                    } else {
                        _async(function () {
                            call(data, e);
                            call = null;
                            data = null;
                            e = null;
                        });
                    }
                }
                return false;
            };
        },
            socket_error = gen_ws_ev('error'),
            socket_open = gen_ws_ev('open'),
            socket_msg = gen_ws_ev('msg'),
            gen_ws_ev = null;

        $.socket = function (c) {
            var ws = new WebSocket($protocol_socket + '://' + $ext.ws.host + c.url),
                e = c.error,
                o = c.open,
                m = c.msg;
            if (e) {
                ws.error = e;
            }
            if (o) {
                ws.open = o;
            }
            if (m) {
                ws.msg = m;
            }
            $eventadd(ws, 'error', socket_error);
            $eventadd(ws, 'open', socket_open);
            $eventadd(ws, 'message', socket_msg);
            return ws;
        };
        var returned = {
            kill: function () {
                var w = this;
                w.close();
                $eventremove(w, 'message', socket_msg);
                $eventremove(w, 'message', socket_msg);
                $eventremove(w, 'message', socket_msg);
            }
        };
        return returned;
    })();
    //shared functions
    //Flattens a nested array. Pass level to flatten up to a depth;
    var _flatten_once = function (arr) {
        return arr.reduce(function (a, b) {
            if (!_isArray(a)) {
                a = [a];
            }
            if (!_isArray(b)) {
                b = [b];
            }
            _array_push.apply(a, b);
            return a;
        });
    },
        flatten = function (array, level) {
            if (level) {
                if (level === 1) {
                    return _flatten_once(array);
                }
                for (var i = 0; i < level; i++) {
                    var array = array.reduce(function (previousValue, currentValue, index, array) {
                        return previousValue.concat((_isArray(currentValue)) ? currentValue : [currentValue]);
                    }, []); //initial starting value is an amepty array []
                }
                return array;
            }
            return array.reduce(function (previousValue, currentValue, index, array) {
                return previousValue.concat((_isArray(currentValue)) ? flatten(currentValue) : currentValue);
            }, []); //initial starting value is an amepty array []
        },
        //cache for function that removes falsey values from array
        compact = function (self) {
            return self.filter(Boolean);
        };
    //initialize array object for array prototype
    var array_extend = {};
    //Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
    array_extend.chunk = function (max) {
        var array = this,
            temp = [],
            count = 0,
            item;
        while (item = array.shift()) {
            if (count === 0 || count === max) {
                var sub = [];
            }
            sub.push(item);
            count++;
            if (count === max) {
                temp.push(sub);
                var count = 0;
            } else if (count > array.length) {
                temp.push(sub);
            }
        }
        return temp;
    };
    //Clone an array via the slize method
    array_extend.clone = function () {
        return this.slice(0);
    };
    //return new array with falsey values removed
    array_extend.compact = function () {
        return compact(this);
    };
    //Sorts a list into groups and returns a count for the number of objects in each group.
    array_extend.countBy = function (funct) {
        var array = this,
            object = {},
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i],
                results = funct(item);
            if (!object[results]) {
                object[results] = 0;
            }
            object[results] = object[results] + 1;
        }
        return object;
    };

/*

[4.3, 6.1, 6.4].countBy(function(n) {
  return n.floor();
});

//{ '4': 1, '6': 2 }


*/
    //create an array from a range
    array_extend.createRange = function (start_arg, stop_arg, increment) {
        var array = this,
            stop = (stop_arg) ? stop_arg : start_arg,
            start = (stop_arg) ? start_arg : 0;
        for (var i = start; i < stop; i++) {
            if (increment) {
                if (i > 0) {
                    var i = i - 1 + 5,
                        i_check = i + increment;
                }
            }
            array.push(i);
            if (increment) {
                if (i_check == stop) {
                    break;
                }
            }
        }
        return array;
    };

    //create an array from a range
    array_extend.createRangeTo = function (start_arg, stop_arg, increment) {
        var array = this,
            stop = (stop_arg) ? stop_arg : start_arg,
            start = (stop_arg) ? start_arg : 0;
        for (var i = start; i <= stop; i++) {
            if (increment) {
                if (i > 0) {
                    var i = i - 1 + 5,
                        i_check = i + increment;
                }
            }
            array.push(i);
            if (increment) {
                if (i_check == stop) {
                    break;
                }
            }
        }
        return array;
    };
    //Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
    array_extend.difference = function (compare) {
        var array = this,
            difference = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i],
                indexof = compare.indexOf(item);
            if (indexof == -1) {
                difference.push(item);
            }
        }
        return difference;
    };

    //Creates an array excluding all values of the arrays using SameValueZero for equality comparisons.
    array_extend.differenceAll = function () {
        var array = this,
            len = array.length,
            difference = [];
        for (var i = 0; i < len; i++) {
            var item = array[i],
                sub_len = item.length;
            for (var a = 0; a < sub_len; a++) {
                var subitem = item[a],
                    indexof = difference.indexOf(subitem);
                if (indexof == -1) {
                    difference.push(subitem);
                } else {
                    difference.splice(indexof, 1);
                }
            }
        }
        return difference;
    };
    //Creates a an array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).
    array_extend.dropWhile = function (funct) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i],
                condition = funct(item, i, array);
            if (!condition) {
                temp.push(item);
            }
        }
        return temp;
    };

    //Creates a an array with elements taken from the end. Elements are taken until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array).
    array_extend.dropRightWhile = function (funct) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = len - 1; i >= 0; i--) {
            var item = array[i],
                condition = funct(item, i, array);
            if (!condition) {
                temp[i] = item;
            }
        }
        return temp;
    };


    //Removes elements from array corresponding to the given indexes and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
    array_extend.drop = function (amount) {
        var array = this;
        return array.splice(amount, array.length);
    };

    //Removes elements from array corresponding to the given indexes (from right) and returns an array of the removed elements. Indexes may be specified as an array of indexes or as individual arguments.
    array_extend.dropRight = function (amount) {
        var array = this;
        return array.slice(0, array.length - amount);
    };
    //loop through array using for loop
    array_extend.each = function (fn) {
        return _each_array(this, fn);
    };
    //Returns the first element of an array. Passing n will return the first n elements of the array.
    array_extend.first = function (n) {
        var i = this;
        if (n) {
            return i.splice(0, n);
        }
        return i[i.length - 1];
    };
    //returns the first false item
    array_extend.firstFalse = function (funct) {
        var array = this,
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            if (!funct(item)) {
                return item;
            }
        }
        return false;
    };
    //returns the first true item
    array_extend.firstTrue = function (funct) {
        var array = this,
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            if (funct(item)) {
                return item;
            }
        }
        return false;
    };
    //Flattens a nested array. Pass level to flatten up to a depth;
    array_extend.flatten = function (level) {
        return flatten(this, level);
    };
    //Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
    array_extend.flow = function () {
        var array = this,
            len = array.length;
        return function () {
            var args = _toArray(arguments);
            for (var i = 0; i < len; i++) {
                var args = array[i].apply(null, (_isArray(args) ? args : [args]));
            }
            return args;
        };
    };

    //flowright is like flow except that it creates a function that invokes the provided functions from right to left.
    array_extend.flowRight = function () {
        var array = this,
            len = array.length;
        return function () {
            var args = _toArray(arguments);
            for (var i = len - 1; i >= 0; i--) {
                var args = array[i].apply(null, (_isArray(args) ? args : [args]));
            }
            return args;
        };
    };

/*

var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
[greet,exclaim].flow()('moe');

function add(x, y) {
  return x + y;
}

function square(n) {
  return n * n;
}

var addSquare = [square, add].flowright();
addSquare(1, 2);

right will just allow you to reverse the order of the args

*/
    //Splits a collection into sets, grouped by the result of running each value through iteratee.
    array_extend.groupBy = function (funct) {
        var array = this,
            object = {},
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i],
                results = funct(item);
            if (!object[results]) {
                object[results] = [];
            }
            object[results].push(item);
        }
        return object;
    };
    //Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
    array_extend.indexBy = function (index) {
        var array = this,
            object = {},
            len = array.length;
        for (var i = 0; i < len; i++) {
            var obj = array[i];
            object[obj[index]] = obj;
        }
        return object;
    };
    //Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
    array_extend.initial = function (n) {
        var array = this;
        if (n) {
            return array.last(n);
        }
        array.pop();
        return array;
    };
    //Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
    array_extend.intersection = function () {
        var array = this,
            args = _toArray(arguments),
            len = array.length,
            arguments_length = args.length,
            intersection = [];
        for (var i = 0; i < len; i++) {
            var item = array[i],
                matched = 0;
            for (var a = 0; a < arguments_length; a++) {
                if (_has(args[a], item)) {
                    var matched = matched + 1;
                }
            }
            if (matched === arguments_length) {
                intersection.push(item);
            }
        }
        return intersection;
    };
    //Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
    array_extend.invoke = function (method, args) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            temp.push(item[method].apply(item, args));
        }
        return temp;
    };
    //get largest number from array
    array_extend.largest = function () {
        return _math.max.apply(_math, this);
    };
    //Returns the last element of an array. Passing n will return the last n elements of the array.
    array_extend.last = function (n) {
        var i = this;
        if (n) {
            return i.splice(i.length - n, n);
        }
        return i[i.length - 1];
    };
    //start from begining of array using argument as index
    array_extend.left = function (a) {
        var i = this;
        return i[a];
    };
    //Converts arrays into objects. Keys as this and values as first argument
    array_extend.object = function (value) {
        var array = this,
            len = array.length,
            object = {};
        for (var i = 0; i < len; i++) {
            object[array[i]] = value[i];
        }
        return object;
    };
    //Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
    array_extend.partition = function (funct) {
        var array = this,
            temp_a = [],
            temp_b = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            if (funct(item)) {
                temp_a.push(item);
            } else {
                temp_b.push(item);
            }
        }
        return [temp_a, temp_b];
    };
    //extracting a list of property values to an array
    array_extend.pluck = function (pluck_item) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i][pluck_item];
            if (item) {
                temp.push(item);
            }
        }
        return temp;
    };
    //Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.
    array_extend.rest = function (n) {
        var array = this;
        if (n) {
            return array.first(n);
        }
        array.shift();
        return array;
    };
    //start from end array using a as index
    array_extend.right = function (a) {
        var i = this;
        return i[i.length - 1 - a];
    };
    //Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
    array_extend.sample = function (set_amount) {
        var array = this,
            len = array.length - 1;
        if (set_amount) {
            var temp = [];
            for (var i = 0; i < set_amount; i++) {
                var random = array.splice(Math.round(Math.random() * (array.length - 1)), 1)[0];
                if (random) {
                    temp.push(random);
                }
            }
            return temp;
        }
        return array[Math.round(Math.random() * (len))];
    };
    //shuffle an array and return a new array
    array_extend.shuffle = function () {
        var temp = this,
            array = [],
            i = 0,
            len = temp.length;
        while (i < len) {
            array.push(temp.splice(Math.round(Math.random() * temp.length), 1)[0]);
            i++;
        }
        return array;
    };
    //get smallest number from array
    array_extend.smallest = function () {
        return _math.min.apply(_math, this);
    };
    //Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.
    array_extend.sortedIndex = function (n) {
        var array = this,
            min = 0,
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            if (n > item) {
                var min = i;
            }
        }
        if (min > 0) {
            var min = min + 1;
        }
        return min;
    };
    //sum of values in an array
    array_extend.sumOf = function () {
        var array = this,
            sumof = 0,
            len = array.length;
        for (var i = 0; i < len; i++) {
            sumof = sumof + array[i];
        }
        return sumof;
    };
    //Creates a slice of array with n elements taken from the beginning.
    array_extend.take = function (amount) {
        return this.slice(0, amount);
    };

    //Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. function args (value, index, array).
    array_extend.takeWhile = function (funct) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i],
                condition = funct(item, i, array);
            if (condition) {
                temp.push(item);
            }
        }
        return temp;
    };

    //Creates a slice of array with n elements taken from the end.
    array_extend.takeRight = function (amount) {
        var array = this;
        return array.splice(array.length - amount, amount);
    };

    //Creates a slice of array with elements taken from the end. Elements are taken until predicate returns falsey. function args (value, index, array).
    array_extend.takeRightWhile = function (funct) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = len - 1; i >= 0; i--) {
            var item = array[i],
                condition = funct(item, i, array);
            if (condition) {
                temp.unshift(item);
            }
        }
        return temp;
    };
    //Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
    array_extend.union = function () {
        var array = this.flatten(),
            len = array.length,
            union = [];
        for (var i = 0; i < len; i++) {
            var item = array[i];
            if (!_has(union, item)) {
                union.push(item);
            }
        }
        return union;
    };
    //Produces a duplicate-free version of the array, using === to test object equality.
    array_extend.uniq = function () {
        var array = this,
            uniq = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            if (!_has(uniq, item)) {
                uniq.push(item);
            }
        }
        return uniq;
    };
    //Returns a copy of the array with all instances of the values removed.
    array_extend.without = function (args) {
        var array = this,
            temp = [],
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i],
                indexof = args.indexOf(item);
            if (indexof == -1) {
                temp.push(item);
            }
        }
        return temp;
    };
    //Creates an array that is the symmetric difference of the provided arrays. See Wikipedia for more details.
    array_extend.xor = function () {
        var xor = [],
            loop = this,
            llen = loop.length;
        for (var i = 0; i < llen; i++) {
            var array = loop[i],
                len = array.length;
            for (var a = 0; a < len; a++) {
                var item = array[a],
                    index = xor.indexOf(item);
                if (index === -1) {
                    xor.push(item);
                } else {
                    xor.splice(index, 1);
                }
            }
        }
        return xor;
    };
    //Merges together the values of each of the arrays with the values at the corresponding position.
    array_extend.zip = function () {
        var array = this,
            len = array.length,
            args = _toArray(arguments),
            arguments_length = args.length,
            zip = [];
        for (var i = 0; i < len; i++) {
            var zipped = [];
            zipped.push(array[i]);
            for (var a = 0; a < arguments_length; a++) {
                zipped.push(args[a][i]);
            }
            zip.push(zipped);
        }
        return zip;
    };
    //unzip the array of zipped arrays
    array_extend.unZip = function () {
        var array = this,
            len = array.length,
            unzip = [],
            sub = array[0],
            sub_len = sub.length;
        for (var i = 0; i < sub_len; i++) {
            unzip[i] = [];
        }
        var i = 0;
        for (var a = 0; a < sub_len; a++) {
            for (var c = 0; c < len; c++) {
                unzip[i].push(array[c][a]);
            }
            i++;
        }
        return unzip;
    };
/*
STRING Prototype object
*/
    //initialize
    var string_extend = {};
    //get characters in a range in a string
    string_extend.range = function (start, end, insert) {
        var text = this,
            start_text = text.slice(0, start),
            end_text = text.slice(end, text.length),
            i = start_text + insert + end_text,
            start_text = null,
            text = null,
            insert = null,
            insert = null,
            end_text = null;
        return i;
    };
    //start index from last item
    string_extend.last = function () {
        var i = this;
        return i[i.length - 1];
    };
    //start index from right of string
    string_extend.right = function (a) {
        var i = this;
        return i[i.length - 1 - a];
    };
    //start index from right of string pollyfill
    string_extend.endsWith = function (searchString, position) {
        var subjectString = this;
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
    //replace a phrase (word) with a string from an array of strings
    string_extend.replacePhrase = function (w, a) {
        if (_isArray(w)) {
            var w = w.join('|');
        } else if (isPlainObject(w)) {
            var f = this;

            for (var i = 0, keys = _object_keys(w), len = keys.length; i < len; i++) {
                var key = keys[i];
                var f = f.replacephrase(key, w[key]);
            }

            return f;
        } else {
            //replace word regex
            var replace_word = new RegExp('\\b' + w + '\\b', 'gi');
            return this.replace(replace_word, a);
        }
    };
    //replace a string with a string from an array of strings
    string_extend.replaceList = function (a, r) {
        var s = this,
            len = a.length;
        for (var i = 0; i < len; i++) {
            var s = s.replace(a[i], r);
        }
        var a = null,
            r = null;
        return s;
    };
    //raw URL encode
    string_extend.rawURLDecode = function () {
        return decodeURIComponent((this + '').replace(/%(?![\da-f]{2})/gi, function () {
            return '%25';
        }));
    };
    //html entities
    string_extend.htmlEntities = function () {
        return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    //decode then htmlentities
    string_extend.sanitize = function () {
        return string_extend.htmlent.call(string_extend.rawurldecode.call(this));
    };
    //decode URI Component
    string_extend.duc = function () {
        return decodeURIComponent(this);
    };
    //encode URI Component
    string_extend.euc = function () {
        return encodeURIComponent(this);
    };
    //uppercase first letter lower case the rest
    string_extend.ucFirst = function () {
        var string = this;
        return string.charAt(0).toUpperCase() + string.substr(1);
    };

    //uppercase first letter for all
    string_extend.ucFirstAll = function () {
        var array = this.split(' '),
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            array[i] = item.charAt(0).toUpperCase() + item.substr(1);
        }
        return array.join(' ');
    };

    //uppercase first letter lower case the rest
    string_extend.ucFirstOnly = function () {
        var string = this;
        return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    };

    //uppercase first letter lower case the rest all
    string_extend.ucFirstOnlyAll = function () {
        var array = this.split(' '),
            len = array.length;
        for (var i = 0; i < len; i++) {
            var item = array[i];
            array[i] = item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
        }
        return array.join(' ');
    };

    //Returns the camel cased string
    string_extend.camel = function () {
        var string = string_extend.ucfirstall.call(this.replace(regex_underscore, ' ').replace(regex_dash, ' '));
        return (string.charAt(0).toLowerCase() + string.substr(1)).replace(regex_space_global, '');
    };

    //Returns the kebab cased string
    string_extend.kebab = function () {
        return this.toLowerCase().replace(regex_underscore, ' ').replace(regex_space_global, '-');
    };

    //Returns the snake cased string
    string_extend.snake = function () {
        return this.toLowerCase().replace(regex_dash, ' ').replace(regex_space_global, '_');
    };

    //returns the trunced version of the string
    string_extend.truncate = function (amount) {
        var string = this,
            length = string.length;
        if (length > amount) {
            return this.slice(0, amount);
        }
        return string;
    };

    //returns the trunced version of the string starting from the right
    string_extend.truncateRight = function (amount) {
        var string = this,
            length = string.length;
        if (length > amount) {
            return string.substr(amount, length);
        }
        return string;
    };

    //repeat
    string_extend.repeat = (string_prototype.repeat) ? false : function (amount) {
        if (!amount) {
            return '';
        }
        if (amount == 1) {
            return this;
        }
        var string = this,
            temp = string;
        for (var i = 1; i < amount; i++) {
            if (i > 0) {
                var temp = temp + string;
            }
        }
        return temp;
    };
    //add paramaters to a URL
    string_extend.addParam = function (n) {
        var o = this,
            len = o.length;
        if (len > 0) {
            var last = o.last();
            if (o.indexOf('?') != -1) {
                if (last != '?') {
                    return o + '&' + n;
                } else if (last == '?') {
                    return o + n;
                }
                return o + '&' + n;
            } else {
                return o + '?' + n
            }
        } else {
            return '?' + n
        }
    };
    var bool_extend = {};
/*
Object prototype
*/
    //initilize object ptotoype extend object
    var object_extend = {};
    //clone an object ES6 + ES5
    object_extend.clone = (function () {

        function cloned_function() {}

        function clone_it(obj) {
            cloned_function.prototype = obj;
            return new cloned_function();
        }
        var clone = function () {
            return clone_it(this);
        };

        return clone;

    })();

    //copy an object ES6 + ES5
    object_extend.copy = function () {
        return $merge(this, {});
    };
    //for loop
    object_extend.each = function (fn) {
        return _each_object(this, fn);
    };
    //checks if objects are the same ES6
    object_extend.isEqual = function (object) {
        return _object.is(this, object);
    };
    //extend object prototype
    $.extend = object_extend.extend = function (firstSource) {
        return $merge(this.prototype, firstSource);
    };
    //merge object
    $.merge = object_extend.merge = function (firstSource) {
        return $merge(this, firstSource);
    };
    //short hand for object.observe
    object_extend.obsrv = function (fn) {
        var object = this;
        if (_isArray(object)) {
            return _array_observe(this, fn);
        }
        return _observe(this, fn);
    };
    //short hand for object.unobserve
    object_extend.unObsrv = function (fn) {
        var object = this;
        if (_isArray(object)) {
            return _array_unobserve(object, fn);
        }
        return _unobserve(object, fn);
    };
    //initl functions prototype object
    var function_extend = {};
    //short hand for request animation frame
    function_extend.raf = function () {
        return requestAnimationFrame(this);
    };
    //Creates a function that accepts up to n arguments ignoring any additional arguments. The 2nd argument will be binded if none the initial new function will be.
    function_extend.ary = function (amount, bind) {
        var funct = this,
            ary = function () {
                return funct.apply(bind || ary, _toArray(arguments).splice(0, amount));
            };
        return ary;
    };
    function_extend.chain = function (obj) { //chain functions together
        var funct = this;

        //add to chain
        if (funct.methods) {
            for (var i = 0, keys = _object_keys(obj), len = keys.length; i < len; i++) {
                var key = keys[i];
                var item = obj[key];
                funct.methods[key] = (function (item, key) {
                    return function () {
                        funct.results[key] = item.apply(item, _toArray(arguments));
                        return funct.methods;
                    };
                })(item, key);
            }
            return funct;
        }

        //create chain
        var chain = function () {
            chain.results.first = funct.apply(chain, _toArray(arguments));
            return chain.methods;
        };

        //remove chain item
        chain.removeChain = function (obj) {
            chain.results[obj] = null;
            return chain;
        };
        //remove all chains
        chain.removeAllChains = function () {
            chain.methods = {};
            return chain;
        };
        //return chain values
        chain.values = function (obj) {
            if (!obj) {
                return chain.results;
            }
            var array = [],
                chain_results = chain.results;
            for (var i = 0, keys = _object_keys(chain_results), len = keys.length; i < len; i++) {
                var key = keys[i];
                var item = chain_results[key];
                array.push(item);
            }
            return array;
        };
        //original function
        chain.original = function () {
            return funct.apply(chain, _toArray(arguments))
        };
        chain.results = {}; //chain results
        chain.methods = {}; //chain methods
        //add chained functions
        for (var i = 0, keys = _object_keys(obj), len = keys.length; i < len; i++) {
            var key = keys[i];
            var item = obj[key];
            chain.methods[key] = (function (item, key) {
                return function () {
                    chain.results[key] = item.apply(item, _toArray(arguments));
                    return chain.methods;
                };
            })(item, key);
        }

        //return new chained function
        return chain;
    };
    //short hand for request animation frame
    function_extend.curry = function () {
        var funts = this,
            count = 0,
            args = [],
            len = funts.length,
            curry = function () {
                var sub_args = _toArray(arguments),
                    sub_len = arguments.length;
                for (var i = 0; i < sub_len; i++) {
                    args.push(sub_args[i]);
                    count++;
                }
                if (len == count) {
                    var value = funts.apply(curry, args);
                    count = 0;
                    args = [];
                    return value;
                }
                return curry;
            };
        return curry;
    };

/*

	var curried=function(a,b,c){
		return [a,b,c];
	}.curry();

	curried(1)(2)(3);
	// → [1, 2, 3]

	curried(1, 2)(3);
	// → [1, 2, 3]

	curried(1, 2, 3);
	// → [1, 2, 3]

*/

    //short hand for request animation frame
    function_extend.curryRight = function () {
        var funts = this,
            count = 0,
            args = [],
            len = funts.length,
            curry = function () {
                var sub_args = _toArray(arguments),
                    sub_len = arguments.length;
                for (var i = 0; i < sub_len; i++) {
                    args.unshift(sub_args[i]);
                    count++;
                }
                if (len == count) {
                    var value = funts.apply(curry, args);
                    count = 0;
                    args = [];
                    return value;
                }
                return curry;
            };
        return curry;
    };

/*

	var curried=function(a,b,c){
		return [a,b,c];
	}.curryright();

	curried(1)(2)(3);
	// → [1, 2, 3]

	curried(1, 2)(3);
	// → [1, 2, 3]

	curried(1, 2, 3);
	// → [1, 2, 3]

*/
    //Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
    function_extend.negate = function () {
        var func = this;
        return function () {
            var negate = func.apply(func, _toArray(arguments));
            if (negate) {
                return false;
            }
            return true;
        };
    };
    //Creates a function that is restricted to execute func once. Repeat calls to the function will return the value of the first call. The func is executed with the this binding of the created function.
    function_extend.once = function () {
        var fn = this,
            value = 0,
            amount = false;
        return function () {
            if (!amount) {
                amount = true;
                value = fn.apply(this, _toArray(arguments));
                fn = null; //null func to free up mem
            }
            return value;
        };
    };

    //Creates a function that executes func, with the this binding and arguments of the created function, only after being called n times.
    function_extend.after = function (amount) {
        var fn = this,
            called_amount = 0,
            value = 0;
        return function () {
            if (amount < called_amount) {
                amount = 1;
                value = fn.apply(this, _toArray(arguments));
                fn = null; //null func to free up mem
            }
            return value;
        };
    };

    //Creates a function that executes func, with the this binding and arguments of the created function, only before being called n times.
    function_extend.before = function (amount) {
        var fn = this,
            called_amount = 0,
            value = 0;
        return function () {
            if (amount > called_amount) {
                amount = 1;
                value = fn.apply(this, _toArray(arguments));
                fn = null; //null func to free up mem
            }
            return value;
        };
    };
    //Creates a function that invokes func with arguments arranged according to the specified indexes where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.
    function_extend.reArg = function () {
        var funct = this,
            list = _toArray(arguments),
            list_len = list.length;

        var rearged = function () {
            var args = [],
                order = _toArray(arguments),
                len = order.length;

            for (var i = 0; i < list_len; i++) {
                args.push(order[list[i]]);
            }

            return funct.apply(rearged, args);
        };

        return rearged;
    };

/*

var rearg=(function(a, b, c) {
  return [a, b, c];
}).rearg(1,2,0);

rearg(1,2,3);
-> [2, 3, 1]


*/
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
    function_extend.timer = function (time) {
        return setTimeout(this, time);
    };

    //async function call
    function_extend.async = (haspromise) ?
    function (fnc) {
        _promise_async.then(this);
        return false;
    } : function (fnc) {
        setTimeout(fnc, 0);
        return false;
    };
    //wrap 2 functions 'this' is launched after the argument function(s)
    function_extend.wrap = function (object, bind) {
        var funct = this;
        if (_isFunction(object)) {
            return function () {
                var args = _toArray(arguments);
                return [object.apply(bind, args), funct.apply(bind, args)];
            };
        } else if (isPlainObject(object)) {
            for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
                var key = keys[i];
                object[key] = function_extend.wrap.apply(funct, [object[key], bind]);
            }
        }
        return object;
    };

    //wrap 2 functions 'this' is launched before the argument function(s)
    function_extend.wrapBefore = function (object, bind) {
        var funct = this;
        if (_isFunction(object)) {
            return function () {
                var args = _toArray(arguments);
                return [funct.apply(bind, args), object.apply(bind, args)];
            };
        } else if (isPlainObject(object)) {
            for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
                var key = keys[i];
                object[key] = wrap_before.apply(funct, [object[key], bind]);
            }
        }
        return object;
    };
    //initilize number for Number prototype
    var number_extend = {};
    //is number zero
    number_extend.isZero = function () {
        return this === 0;
    };
    //
    number_extend.isEqual = function (i) {
        return this === i;
    };
    //Math.js math utilities
    (function () {
        //cache math functions
        var abs = _math.abs,
            acos = _math.acos,
            acosh = _math.acosh,
            asin = _math.asin,
            asinh = _math.asinh,
            atan = _math.atan,
            atanh = _math.atanh,
            atan2 = _math.atan2,
            cbrt = _math.cbrt,
            ceil = _math.ceil,
            clz32 = _math.clz32,
            cos = _math.cos,
            cosh = _math.cosh,
            exp = _math.exp,
            expm1 = _math.expm1,
            floor = _math.floor,
            fround = _math.fround,
            hypot = _math.hypot,
            imul = _math.imul,
            log = _math.log,
            log1p = _math.log1p,
            log10 = _math.log10,
            log2 = _math.log2,
            max = _math.max,
            min = _math.min,
            pow = _math.pow,
            random = _math.random,
            round = _math.round,
            sign = _math.sign,
            sin = _math.sin,
            sinh = _math.sinh,
            sqrt = _math.sqrt,
            tan = _math.tan,
            tanh = _math.tanh,
            trunc = _math.trunc;


        //add this and value
        number_extend.add = function (value) {
            return this + value;
        };
        //minus this and value
        number_extend.minus = function (value) {
            return this - value;
        };
        //divide this and value
        number_extend.divide = function (value) {
            return this / value;
        };
        //multiple this and value
        number_extend.multiple = function (value) {
            return this * value;
        };
        //The modulo function is the integer remainder of dividing this by value
        number_extend.remainder = function (value) {
            return this % value;
        };
        //add 1
        number_extend.increment = function () {
            return this + 1;
        };
        //minus 1
        number_extend.decrement = function () {
            return this - 1;
        };
        //Returns the absolute value of a number_extend.
        number_extend.abs = function () {
            return abs(this);
        };
        //Returns the arccosine of a number_extend.
        number_extend.acos = function () {
            return acos(this);
        };
        //Returns the hyperbolic arccosine of a number_extend.
        number_extend.acosh = function () {
            return acosh(this);
        };
        //Returns the arcsine of a number_extend.
        number_extend.asin = function () {
            return asin(this);
        };
        //Returns the hyperbolic arcsine of a number_extend.
        number_extend.asinh = function () {
            return asinh(this);
        };
        //Returns the arctangent of a number_extend.
        number_extend.atan = function () {
            return atan(this);
        };
        //Returns the hyperbolic arctangent of a number_extend.
        number_extend.atanh = function () {
            return atanh(this);
        };
        //Returns the arctangent of the quotient of its arguments.
        number_extend.atan2 = function (y) {
            return atan2(this, y);
        };
        //Returns the cube root of a number_extend.
        number_extend.cbrt = function () {
            return cbrt(this);
        };
        //Returns the smallest integer greater than or equal to a number_extend.
        number_extend.ceil = function () {
            return ceil(this);
        };
        //Returns the number of leading zeroes of a 32-bit integer.
        number_extend.clz32 = function () {
            return clz32(this);
        };
        //Returns the cosine of a number_extend.
        number_extend.cos = function () {
            return cos(this);
        };
        //Returns the hyperbolic cosine of a number_extend.
        number_extend.cosh = function () {
            return cosh(this);
        };
        //Returns Ex, where x is the argument, and E is Euler's constant (2.718…), the base of the natural logarithm.
        number_extend.exp = function () {
            return exp(this);
        };
        //Returns subtracting 1 from exp(x).
        number_extend.expm1 = function () {
            return expm1(this);
        };
        //Returns the largest integer less than or equal to a number_extend.
        number_extend.floor = function () {
            return floor(this);
        };
        //Returns the nearest single precision float representation of a number_extend.
        number_extend.fround = function () {
            return fround(this);
        };
        //Returns the square root of the sum of squares of its arguments.
        number_extend.hypot = function (x, y) {
            return hypot(this, x, y);
        };
        //Returns the result of a 32-bit integer multiplication.
        number_extend.imul = function () {
            return imul(this);
        };
        //Returns the natural logarithm (loge, also ln) of a number_extend.
        number_extend.log = function () {
            return log(this);
        };
        //Returns the natural logarithm of 1 + x (loge, also ln) of a number_extend.
        number_extend.log1p = function () {
            return log1p(this);
        };
        //Returns the base 10 logarithm of a number_extend.
        number_extend.log10 = function () {
            return log10(this);
        };
        //Returns the base 2 logarithm of a number_extend.
        number_extend.log2 = function () {
            return log2(this);
        };
        //Returns the largest of zero or more numbers.
        number_extend.max = function () {
            return max(this, y);
        };
        //Returns the smallest of zero or more numbers.
        number_extend.min = function () {
            return min(this, y);
        };
        //Returns base to the exponent power, that is, baseexponent.
        number_extend.pow = function () {
            return pow(this, y);
        };
        //Returns a random number between min (inclusive) and max (exclusive)
        number_extend.randomArbitrary = function (min) {
            return random() * (this - min) + min;
        };
        // Returns a random integer between min (included) and max (excluded)
        // Using Math.round() will give you a non-uniform distribution!
        number_extend.randomInt = function (min) {
            return floor(random() * (this - min)) + min;
        };
        //random wrapper
        number_extend.random = function (min) {
            return random();
        };
        //Returns the value of a number rounded to the nearest integer.
        number_extend.round = function () {
            return round(this);
        };
        //Returns the sign of the x, indicating whether x is positive, negative or zero.
        number_extend.sign = function () {
            return sign(this);
        };
        //Returns the sine of a number_extend.
        number_extend.sin = function () {
            return sin(this);
        };
        //Returns the hyperbolic sine of a number_extend.
        number_extend.sinh = function () {
            return sinh(this);
        };
        //Returns the positive square root of a number_extend.
        number_extend.sqrt = function () {
            return sqrt(this);
        };
        //Returns the tangent of a number_extend.
        number_extend.tan = function () {
            return tan(this);
        };
        //Returns the hyperbolic tangent of a number_extend.
        number_extend.tanh = function () {
            return tanh(this);
        };
        //Returns the integral part of the number x, removing any fractional digits.
        number_extend.trunc = function () {
            return trunc(this);
        };
    })();
    var event_extend = {
        isEnter: function () { //checks if this an enter key
            var i = this.keyCode;
            if (i == 13) {
                return true;
            }
            return false;
        }
    };

    extend(number_extend, number_object[$prototype]); //function
    extend(event_extend, Event[$prototype]); //event
    extend(function_extend, _function[$prototype]); //function
    extend(bool_extend, _boolean[$prototype]); //Boolean
    extend(socket_extend, websocket_prototype); //websockets
    extend(worker_extend, worker_prototype); //websockets
    extend(object_extend, _object[$prototype]); //objects
    extend(array_extend, array_prototype); //array
    extend(string_extend, string_prototype); //string
    //async launch an array of functions
    $.async = function (fns) {
        if (_isArray(fns)) {
            var len = fns.length;
            for (var i = 0; i < len; i++) {
                _async(fns[i]);
            }
            var len = null;
        } else if (_isFunction(fns)) {
            _async(fns);
        }
        return false;
    };
    var _cache = $.cache = (function () {
        //add an array of cache items. Keys are "this" array and values are corresponding arguments
        var array_cache = function (cache_names, a) {
            var len = cache_names.length,
                temp = [];
            if (a) {
                for (var i = 0; i < len; i++) {
                    temp[i] = _cache(cache_names[i], a[i]);
                }
            } else {
                for (var i = 0; i < len; i++) {
                    temp[i] = _cache(cache_names[i]);
                }
            }
            return temp;
        };

        //cache
        var cache_function = function (key, value) {
            if (!key) {
                return _object_keys(_cache);
            }
            if (_isArray(key)) {
                return array_cache(key, value);
            }
            if (hasValue(value)) {
                return _cache[key] = value;
            }
            return _cache[key];
        };
        //toggle a cache item with two values
        $.cacheToggle = function (key, a, b) {
            var v = _cache[key];
            if (v == a) {
                return _cache[key] = b;
            }
            return _cache[key] = a;
        };

        return cache_function;
    })();
    //turn acid logs on/off
    $.debug = function (i) {
        return $debug = i;
    };
    //get property from string
    $.get = function (string, object) {
        return _find(string, object);
    };
    //history object to store older models
    var _modelHistory = $.modelHistory = {};

    var _model = $.model = (function () {
        //JS model history
        var model_destroy = function (model_name) {
            return _modelHistory[model_name] = _model[model_name] = null;
        },
            modelHistory = function (model_name) {
                return _modelHistory[model_name];
            },
            modelHistoryClear = function (model_name) {
                return _modelHistory[model_name] = null;
            },
            modelHistoryRemove = function (model_name, index) {
                var index = index || _modelHistory[model_name].length - 1;
                return _modelHistory[model_name].splice([index], 1);
            },
            model_save = function (model_name) {
                _modelHistory[model_name].push(_model[model_name].clone());
                return true;
            },
            model_methods = function (model_name) {
                var array = [],
                    model = _model[model_name];
                for (var i = 0, keys = _object_keys(model), len = keys.length; i < len; i++) {
                    var key = keys[i];
                    if (key != '_') {
                        array.push(key);
                    }
                }
                return array;
            },
            model_copy = function (model_name) {
                return $merge(_model[model_name], {});
            },
            model_clear = function (model_name) {
                return model_name.model({});
            },
            model_restore = function (model_name, method_name) {
                if (!method_name) {
                    var restore = _modelHistory[model_name].pop();
                    _modelHistory[model_name].push(_model[model_name].clone());
                    _model[model_name] = restore;
                } else {
                    var restore = _modelHistory[model_name],
                        restore_method = _modelHistory[model_name][restore.length - 1];
                    _modelHistory[model_name].push(_model[model_name].clone());
                    _model[model_name][method_name] = restore_method[method_name];
                }
                var restore = null;
                return _model[model_name];
            };

        //build model functions object


        function model_functions(model_name) {
            var methods = {
                name: model_name,
                destroy: function () {
                    model_destroy(model_name);
                    model_name = null;
                    return null;
                },
                save: function () {
                    return model_save(model_name);
                },
                restore: function (method_name) {
                    return model_restore(model_name, method_name);
                },
                history: function () {
                    return modelHistory(model_name);
                },
                historyClear: function () {
                    return modelHistoryClear(model_name);
                },
                historyRemove: function (index) {
                    return modelHistoryRemove(model_name, index);
                },
                methods: function (index) {
                    return model_methods(model_name);
                },
                clear: function (index) {
                    return model_methods(model_name);
                },
                copy: function (index) {
                    return model_clone(model_name);
                }
            };
            return methods;
        }

        //get model -> (bool) option for a lean model meaning no methods will be attached
        var model_function = function (model_name, i, bool) {
            if (_has(model_name, '.')) {
                return _find(model_name, _model);
            } else {
                if (hasValue(i)) {
                    _model[model_name] = i;
                    var model = _model[model_name];
                    if (!bool) {
                        model._ = model_functions(model_name);
                        _modelHistory[model_name] = [];
                    }
                    return model;
                }
            }
            return _model[model_name];
        };
        return model_function;
    })();
    //make a promise
    var _promoiseFN = $.promise = function (array, name, fun) {
        if (!fun) {
            return _promised(array, name);
        }
        return _promise(array, name, fun);
    };
    var _promises = $.promises = {};
    var _service = $.service = (function () {
        var checkservice = function (root, obj, items) {
            if (_isFunction(obj)) {
                return obj.apply(root, items);
            } else {
                var r = [];
                for (var i = 0, keys = _object_keys(obj), len = keys.length; i < len; i++) {
                    var key = keys[i];
                    var item = obj[key];
                    r.push(checkservice(root, item, items));
                }
                return r;
            }
        };
        var service_function = function (name, i, data) {
            if (i) {
                return _service[name].run(i, data);
            }
            return _service[name];
        };
        $.serviceCreate = function (name) {
            var service = {
                run: function (i, data) {
                    var self = this;
                    if (i) {
                        return checkservice(self, self.process[i], data);
                    }
                    return checkservice(self, self.process);
                },
                process: {}
            };
            service.run = service.run.bind(service);
            _service[name] = service;
            return _service[name];
        };
        return service_function;
    })();
    $.timerClear = function (number) {
        return clearTimeout(number);
    };
    //a tag DOM element used to parse URL
    var $atag = _document.createElement('a');
    //parse a URL
    $.linkParse = function (self) {
        var tag = $atag;
        tag.href = self;
        var data = {
            url: self,
            protocol: tag.protocol,
            hostname: tag.hostname,
            port: tag.port,
            path: (tag.pathname[0] != '/') ? '/' + tag.pathname : tag.pathname,
            pathroot: (tag.pathname[0] != '/') ? tag.pathname.split('/')[0] : tag.pathname.split('/')[1],
            search: tag.search,
            hash: tag.hash,
            host: tag.host
        };
        var root = data.hostname.split('.'),
            len = root.length,
            root = root[len - 2] + '.' + root[len - 1],
            len = null;
        if (data.protocol == 'http:') {
            data.ssl = false;
        } else {
            data.ssl = true;
        }
        data.domain = root;
        var tag = null;
        return data;
    };
    //xhr functions
    $.xhr = {};

    $ext.xhr = {
        loaded: function (evt) {
            if ($debug) {
                evt.log();
            }
            var xhr = evt.target;
            $eventremove(xhr, 'load', $ext.xhr.loaded);
            var status = evt.target.status;
            if (status == 200) {
                var type = xhr.getResponseHeader('content-type'),
                    data = xhr.responseText;
                if (type == 'application/json') {
                    if (data) {
                        var data = json.parse(data);
                    }
                }
                var callback = xhr.call;
                if (callback) {
                    _async(function () {
                        callback(data)
                    });
                }
            }
            if (status > 200) {
                var callback = xhr.fail;
                if (callback) {
                    _async(callback);
                }
            }
            return false;
        }
    };

    $ext.preload = {
        loaded: function (evt) {
            var xhr = evt.target;
            $eventremove(xhr, 'load', $ext.preload.loaded);
            var status = evt.target.status;
            if (status == 200) {
                var callback = xhr.call,
                    data = xhr.responseText;
                if (callback) {
                    _async(function () {
                        callback(data)
                    });
                }
            }
            var xhr = null,
                evt = null,
                callback = null;
            return false;
        },
        error: function (evt) {
            var xhr = evt.target;
            $eventremove(xhr, 'error', $ext.preload.error);
            var status = evt.target.status;
            var fail = xhr.fail;
            if (fail) {
                _async(function () {
                    fail(status)
                });
            }
            var xhr = null,
                evt = null;
            return false;
        }
    };


    //xhr
    $.xhr = function (data) {
        var xhr, url = data.url,
            args = data.args || '',
            type = data.type || 'GET',
            content = data.content,
            callback = data.call,
            fail = data.fail,
            abort = data.abort,
            progress = data.progress,
            xhr = new XMLHttpRequest(),
            c = $ext.credits.url,
            a = $ext.xhr.analytics;
        if (isPlainObject(args)) {
            var new_args = '';
            args.
            for (function (item, key) {
                new_args = new_args.addparam(key + '=' + item);
            });
        }
        if (_isArray(args)) {
            var new_args = '';
            args.
            for (function (item, i) {
                new_args = new_args.addparam(item);
            });
        }
        if (new_args) {
            var args = new_args,
                new_args = null;
        }
        if (c) {
            var url = url.addparam(c());
        }
        if (a) {
            a(url, data);
        }
        if (callback) {
            xhr.call = callback;
        }
        if (fail) {
            xhr.fail = fail;
            $eventadd(xhr, 'error', $ext.xhr.error);
        }
        if (progress) {
            xhr.progress = progress;
            $eventadd(xhr, 'progress', $ext.xhr.progress);
        }
        if (abort) {
            xhr.abort = abort;
            $eventadd(xhr, 'abort', $ext.xhr.abort);
        }
        $eventadd(xhr, 'load', $ext.xhr.loaded);
        xhr.open(type, url, true);
        if (!content) {
            if (type == 'GET') {
                var ctype = 'text/plain';
            } else {
                var ctype = "application/x-www-form-urlencoded";
            }
        }
        xhr.setRequestHeader("Content-type", ctype);
        var first = args[0];
        if (first == '?') {
            var args = args.substring(1);
        }
        xhr.send(args);
        var xhr = null,
            url = null,
            args = null,
            type = null,
            content = null,
            callback = null,
            c = null,
            a = null;
        return false;
    };

    //preload URL
    $.fetch = function (url, callback) {
        var xhr, xhr = new XMLHttpRequest();
        if (callback) {
            xhr.call = callback;
        }
        $eventadd(xhr, 'load', $ext.preload.loaded);
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send();
        var xhr = null,
            url = null;
        return false;
    };
    $.caf = function (i) { //cancel animation frame
        cancelAnimationFrame(i);
    };

    //console.log
    $.console = _console;
    //add event
    $.eventAdd = function (obj, name, func, capture) {
        return $eventadd(obj, name, func, capture);
    };
    //remove event
    $.eventRemove = function (obj, name, func, capture) {
        return $eventremove(obj, name, func, capture);
    };
    $.exec = function (a, b, c) {
        return _document.execCommand(a, b, c);
    };
    //hasValue
    $.hasValue = hasValue;
    //indexof
    $.has = _has;
    //export all checking functions
    $.isArray = _isArray;
    $.isString = _isString;
    $.isDom = isDom;
    $.isNumber = isNumber;
    $.isObject = isObject;
    $.isPlainObject = isPlainObject;
    $.isFunction = _isFunction;
    $.isRegex = isRegex;
    $.isArgs = isArgs;
    $.isBool = isBool;
    $.isDate = isDate;
    $.isError = isError;
    $.isMap = isMap;
    $.isSet = isSet;
    $.isWeakMap = isWeakMap;
    $.isFloat32 = isFloat32;
    $.isFloat64 = isFloat64;
    $.isInt8 = isInt8;
    $.isInt16 = isInt16;
    $.isInt32 = isInt32;
    $.isUnit8 = isUnit8;
    $.isUnit8clamped = isUnit8clamped;
    $.isUnit16 = isUnit16;
    $.isUnit32 = isUnit32;
    $.isNative = isNative;
    $.isUndefined = isUndefined;
    $.isNaN = isNaN;
    $.isNull = isNull;
    $.isEmpty = isEmpty;
    //convert from json string to json object cache it to use across lib
    var $json = $.json = json.parse;
    $.weakMap = function (items) {
        return new weak_map(items);
    };

    $.map = function (items) {
        return new _map(items);
    };
/*

Math Related cached functions

*/

    //Euler's constant and the base of natural logarithms, approximately 2.718.
    $.e = _math.E;
    //Natural logarithm of 2, approximately 0.693.
    $.ln2 = _math.LN2;
    //Natural logarithm of 10, approximately 2.303.
    $.ln10 = _math.LN10;
    //Base 2 logarithm of E, approximately 1.443.
    $.log2e = _math.LOG2E;
    //Base 10 logarithm of E, approximately 0.434.
    $.log10e = _math.LOG10E;
    //Ratio of the circumference of a circle to its diameter, approximately 3.14159.
    $.pi = _math.PI;
    //Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707.
    $.sqrt1_2 = _math.SQRT1_2;
    //Square root of 2, approximately 1.414.
    $.sqrt2 = _math.SQRT2;
    //export native functions
    $.keys = _object_keys;
    $.getPropDescrip = _object_getOwnPropertyDescriptor;
    $.assign = _object_assign;
    //localstorage
    $.local = _localstorage;
    //localstorage clear
    $.clearLocal = function () {
        return _localstorage.clear();
    };

    //session storage
    $.session = _sessionStorage;
    //session storage clear
    $.clearSession = function () {
        return _sessionStorage.clear();
    };

    //sys temp mem
    $.mem = {};
    //to array
    $.toArray = _toArray;

    //sys info
    $.host = {
        // EX http https
        protocol: $protocol,
        // ws or wss
        protocol_socket: $protocol_socket,
        //hostname
        name: $hostname
    };
    //device info related to actual hardware
    $.hardware = {
        //core amount on system
        cores: $cores
    };
    //useragent info plus mobile
    var _agentinfo = $.agent = {};
    //acid platform information
    $.acid = {
        //lib name
        name: 'ACID',
        //lib version
        version: 5.7,
        //platform type
        platform: 'development',
        //website
        site: 'http://acidjs.com',
        //demo
        demo: 'https://lnkit.com'
    };
    //log out the ACID version
    console.log('ACIDjs v' + $.acid.version);
    //save browser info plus add class to body
    var _agentInfo = $.acid.agentInfo = function () {
        //useragent string
        var str = _window.navigator.userAgent.toLowerCase(),
            //check through user agent
            list = ['windows', 'macintosh', 'linux', 'ipad', 'iphone', 'chrome', 'safari', 'firefox', 'msie', 'trident', 'mobile', 'android'],
            len = list.length,
            addcls = [];

        var agent = _agentinfo;

        agent.string = str.toLowerCase();

        for (var i = 0; i < len; i++) {
            var item = list[i];
            agent[item] = _has(str, item);
        }

        _each_object(agent, function (item, key) {
            if (key == 'string') {
                return;
            }
            if (key == 'mobile') {
                if (!item) {
                    addcls.push('desktop');
                    return;
                }
            }
            if (item) {
                addcls.push(key);
            }
        });

        var cl = document.body.classList;

        _each_array(addcls, function (item) {
            cl.add(item);
        });

        return false;
    };

    _isDocumentReady(_agentInfo);
    (function () {
        var userConfig = $.cache.config = {};
        var config = function () {
            var config = userConfig;

            //save config
            $.cache.config = config;

            //extend config settings to acid
            var extend = config.extend;
            for (var i = 0, keys = _object_keys(extend), len = keys.length; i < len; i++) {
                var key = keys[i];
                var item = extend[key];
                if (!$ext[key]) {
                    $ext[key] = {};
                }
                $ext[key] = $merge($ext[key], item);
            }
        };

        $.acid.config = function (config) {
            if (config) {
                userConfig = config;
            }
            _isDocumentReady(config);
            return false;
        };
    })();
    $.cache.wh = {};
    $.cache.screenh = screen.height;
    $.cache.screenw = screen.width;
    $.cache.windowh = _window.innerHeight;
    $.cache.windoww = _window.innerWidth;


    (function () {
        //check parent for attribute
        var checkup = function (obj, attr) {
            var obj = obj.parentNode,
                mod = obj.getAttribute(attr);
            if (mod == 'up') {
                return checkup(obj, attr);
            } else {
                return obj;
            }
        };
        //if key event
        var keyevent = function (e, obj) {
            //key events
            var key = e.keyCode;
            if (key == 13) {
                var prevententer = obj.getAttribute('data-prevententer');
                if (prevententer) {
                    if (prevententer == 'all') {
                        e.preventDefault();
                    } else if (_has(prevententer, 'allowshift')) {
                        if (!e.shiftKey) {
                            e.preventDefault();
                        }
                    } else if (_has(prevententer, 'allowalt')) {
                        if (!e.altKey) {
                            e.preventDefault();
                        }
                    }
                }
            }
            return;
        };
        var syntheticEvent = function (e, analytics, mobile, fn, lvl, type, attr) {
            var isdom = isDom(e),
                nonenode = 0;
            if (isdom) {
                var obj = e;
            } else {
                var obj = e.target;
                if (!isDom(obj)) {
                    if (obj != _window && obj != _document) {
                        var nonenode = 1;
                    } else {
                        var obj = _body;
                    }
                }
            }
            if (!nonenode) {
                if (!obj) {
                    return false;
                }
                if ($debug) {
                    console.log(e);
                }
                var action = obj.getAttribute(attr);
                if (obj != _body) {
                    if (!action) {
                        if (obj.getAttribute('data-ext')) {
                            return false;
                        }
                        if (lvl) {
                            for (var i = 0; i < lvl; i++) {
                                var obj = obj.parentNode;
                                if (!obj) {
                                    return false;
                                } else if (obj.nodeType != 1) {
                                    return false;
                                }
                                var action = obj.getAttribute(attr);
                                if (action) {
                                    break;
                                }
                            }
                        } else {
                            while (obj = obj.parentNode) {
                                if (!obj) {
                                    return false;
                                } else if (obj.nodeType != 1) {
                                    return false;
                                }
                                var action = obj.getAttribute(attr);
                                if (action) {
                                    break;
                                }
                            }
                        }
                    }
                    if (action == 'up') {
                        var obj = checkup(obj, attr),
                            action = obj.getAttribute(attr);
                    }
                }
                if (action == 'ext') {
                    return false;
                }
                if (!isdom) {
                    if (obj.getAttribute('data-prevent') || obj.getAttribute('data-prevent-' + type)) {
                        e.preventDefault();
                    }
                    if (obj.getAttribute('data-stop-' + type)) {
                        e.stopPropagation();
                    }
                    if (fn) {
                        fn(e, obj);
                    }
                }
                if (action) {
                    if (!isdom) {
                        e.stopPropagation();
                    }
                    var multi = action.split(','),
                        len = multi.length;
                    for (var i = 0; i < len; i++) {
                        var action = multi[i],
                            root = action.split('.')[0],
                            ismodel = _find(action, $.model);
                        if (ismodel) {
                            ismodel.apply(_find(action.split('.')[0], _model), [obj, e]);
                        } else {
                            (function (action, analytics, obj, e, type) {
                                _ensure(root, function () {
                                    if (action) {
                                        var fn = _find(action, _model);
                                        if (fn) {
                                            if ($debug) {
                                                console.log(action);
                                            }
                                            fn.apply(_find(action.split('.')[0], _model), [obj, e]);
                                            fn = null;
                                            action = null;
                                            obj = null;
                                            e = null;
                                        } else {
                                            console.log('ERROR: MISSING FN -> ' + action);
                                        }
                                        if (analytics) {
                                            _async(function () {
                                                analytics(type, action);
                                            });
                                        }
                                    }
                                });
                            })(action, analytics, obj, e, type);
                        }
                    }
                }
            }
            return false;
        };
        //generate the onevent function
        var eventgenerate = function (data) {
            var type = data.type,
                lvl = data.lvl,
                fn = data.fn,
                mobile = data.mobile,
                analytics = data.analytics,
                data = null;
            if (mobile) {
                var attr = 'data-' + mobile;
            } else {
                var attr = 'data-' + type;
            }
            var syntheticEventWrap = function (e) {
                syntheticEvent(e, analytics, mobile, fn, lvl, type, attr);
            };
            return syntheticEventWrap;
        };
        //create events from config
        $.acid.event = function (event) {
            var data = {
                type: ''
            },
                analytics = event.analytics;
            if (analytics) {
                data.analytics = analytics;
            }
            for (var i = 0, keys = _object_keys(event), len = keys.length; i < len; i++) {
                var key = keys[i];
                var object = event[key];
                for (var a = 0, subkeys = _object_keys(object), len_sub = subkeys.length; a < len_sub; a++) {
                    var key_sub = subkeys[a];
                    if (key_sub == 'obj') {
                        continue;
                    }
                    var item = object[key_sub];
                    data.type = key_sub;
                    data.lvl = item.bubble;
                    data.fn = item.fn;
                    if (_has(key_sub, 'key')) {
                        data.fn = keyevent;
                    }
                    var new_name = 'on' + key_sub;
                    $[new_name] = eventgenerate(data);
                    if ($.agent.mobile) {
                        if (item.mobile) {
                            var key_sub = item.mobile;
                        }
                    }
                    $eventadd(object.obj, key_sub, $[new_name], item.capture);
                }
            }
            return false;
        };
        $.acid.event.generate = eventgenerate;
    })();

    var _event = $.acid.event;
    //prefixes
    $.dir = {};
    //load acid lib info
    if (acid_lib) {
        //get model directory -> save prefix to prefix
        $.dir.js = acid_lib.getAttribute('data-core') || '';
        //create core script and append to head
        _isDocumentReady(function () {
            _ensure('core', function (core) {
                core();
            });
        });
    }
    //clean up
    var acid_lib = null;
})(this);