/**
 * ACID JS BETA.
 * @version 5.8
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
        //undefined cache
        _undefined = undefined,
        //weakmap
        weak_map = _global.WeakMap,
        new_weak_map = function () {
            return new weak_map();
        },
        //map
        _map = Map,
        //number
        number_object = Number,
        //worker object
        _worker = _global.Worker,
        //web socket
        _socket = _global.WebSocket,
        _RAF = _global.requestAnimationFrame,
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
    //check if core amount is listed
    var $cores = navigator.hardwareConcurrency || 2;
    var _window = _global,
        _htmlcollection = HTMLCollection,
        _HTMLElement = HTMLElement,
        nodelist = NodeList,
        node = Node,
        _Element = Element,
        _document = document,
        _frag = _document.createDocumentFragment,
        _createElement = _document.createElement;

    //get library script
    //dom objects
    var acid_lib = _document.getElementById('acid-lib'),
        //get prefix data for super safe prototypes
        acid_lib_prefix = (acid_lib) ? acid_lib.getAttribute('data-prefix') : '',
        acid_lib_avoid = (acid_lib) ? acid_lib.getAttribute('data-avoid') : '',
        avoid = (acid_lib_avoid) ? acid_lib_avoid : false,
        acid_lib_prefix = (acid_lib_prefix) ? acid_lib_prefix : '',
        _onBodyReady = [],
        _body = {},
        //cache document head
        head_node = _document.getElementsByTagName('head')[0];

    //cache div for DOM functions
    var _empty_node_div = _createElement.call(_document, 'div');

    //node prototype
    var node_prototype = node[$prototype],
        //nodelist prototype
        nodelist_prototype = nodelist[$prototype],
        //Element.prototype
        _Element_prototype = _Element[$prototype],
        //htmlcollection prototype
        htmlcollection_prototype = _htmlcollection[$prototype];
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
        _isNaN = (isNaN) ? isNaN : number_object.isNaN,
        //is int
        _isInt = (number_object.isInteger) ? number_object.isInteger : function (num) {
            if (num % 1 === 0) {
                return true;
            }
            return false;
        },
        //is equal to null
        isNull = function (obj) {
            return obj === null;
        },
        isFinite = isFinite,
        //check if object is array returns true or false
        _isArray = function (object) {
            return object instanceof _array
        },
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
    //loop through based on number
    var _each_number = function (start, end, fn) {
        if (!fn) {
            var fn = end;
            var end = start;
            var start = 0;
        }
        var results = [];
        for (; start < end; start++) {
            //call function get result
            results[start] = fn(start);
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
    //checks to see if object is a dom node returns true or false
    var isDom = function (obj) {
        if (!hasValue(obj)) {
            return false;
        }
        var nodetype = obj.nodeType;
        return typeof nodetype == "number" && nodetype != 9;
    };

    //wrapper for match a slector
    var _isMatch_dom = (function () {
        if (_Element_prototype.msMatchesSelector) {
            var method = function (node, match_string) {
                //IE 11+ support
                return node.msMatchesSelector(match_string);
            };
        } else {
            var method = function (node, match_string) {
                return node.matches(match_string);
            };
        }
        return method;
    })();
    //takes a data object then places over based on nodes
    var _faceplateDOM = function (node, data, name) {

        if (!name) {
            var name = 'data-faceplate';
        }

        if (_isString(name)) { //faster
            if (_has(name, 'data-')) {
                var face = _faceplate[node.getAttribute(name)];
            } else {
                var face = _faceplate[name];
            }
        } else { //fastest
            var face = name;
        }

        face(data, node);
        return node;
    };
    //create fragment
    var $frag = function () {
        return _frag.call(_document);
    };
    var _isDocumentReady = function (func) {
        var state = document.readyState;
        if (state == 'interactive' || state == 'completed' || state == 'complete') {
            if (func) {
                func();
            }
            return true;
        }
        if (func) {
            $eventadd(document, "DOMContentLoaded", func);
        }
        return false;
    };
    //checks for native remove function
    var isremovenative = (_Element_prototype.remove) ? true : false;
    //removes a node also checks if native is there
    var $remove = (isremovenative) ? null : function (node) {
        var par = node.parentNode;
        if (par) {
            par.removeChild(node);
        }
        var par = null;
        return node;
    };

    var _removeNode = ($remove) ? $remove : function (node) {
        node.remove();
        return node;
    };

    var removeloop = function (node) {
        return _removeNode(node);
    };

    var _removeRange = function (node, start, end) {
        if (!end) {
            var end = start,
                start = 0;
        }
        var nodes = _toArray(node),
            temp = [];
        for (; start < end; start++) {
            temp.push(_removeNode(nodes[start]));
        }
        return temp;
    };
    //transverse up based on a match or number
    var _upTpParentLevel = function (node, i) {
        var i = (i) ? i : Number(node.getAttribute('data-lv')),
            i = i - 1,
            node = node.parentNode;
        if (i) {
            while (i--) {
                var node = node.parentNode;
            }
        }
        var i = null;
        return node;
    },
        _upTo = function (node, name) {
            if (isNumber(name) || !name) {
                return upTpParentLevel(node, name);
            }
            var node;
            while (node = node.parentNode) {
                if (!node) {
                    return false;
                } else if (!isDom(node)) {
                    return false;
                } else if (_isMatch_dom(node, name)) {
                    break;
                }
            }
            return node;
        };
    var afterNth = function (node, new_child, position) {
        var child = node.children[position + 1];
        if (!child) {
            node.appendChild(new_child);
        } else {
            node.insertBefore(new_child, child);
        }
        return node;
    };
    var _append = function (node, child) {
        node.appendChild(child);
        return node;
    };
    //attr functions
    var _hasAttr = function (node, n) {
        return node.hasAttribute(n);
    },
        //set/get attribute
        _attr = function (node, key, value) {
            if (_isString(key)) {
                if (hasValue(value)) {
                    node.setAttribute(key, value);
                } else {
                    return node.getAttribute(key);
                }
            } else if (isPlainObject(key)) {
                for (var i = 0, keys = _object_keys(key), len = keys.length; i < len; i++) {
                    var keyed = keys[i];
                    var item = key[keyed];
                    node.setAttribute(keyed, item);
                }
            }
            return node;
        },
        _removeAttr = function (node, n) {
            node.removeAttribute(n);
            return node;
        };
    var beforeNth = function (node, new_child, position) {
        var child = node.children[position];
        if (!child) {
            node.appendChild(new_child);
        } else {
            node.insertBefore(new_child, child);
        }
        return node;
    };
    //center object
    var _center = function (node, item) {
        if (item) {
            if (item === true) {
                var item = node.parentNode;
            }
            var w = Number(item.offsetWidth),
                h = Number(item.offsetHeight);
        } else {
            var w = Number(_cache.bodyWidth),
                h = Number(_cache.bodyHeight);
        }
        var divW = node.offsetWidth,
            divH = node.offsetHeight;
        if (divH > h) {
            node.style.position = '';
            node.style.transform = node.style['-webkit-transform'] = '';
        } else {
            var left = parseInt((w - divW) / 2) + 'px',
                top = parseInt((h - divH) / 2) + 'px';
            node.style.position = 'absolute';
            node.style.transform = node.style['-webkit-transform'] = 'translate3d(' + left + ',' + top + ',0)';
        }
        return node;
    };
    //change the tagname of a node and returns the a new node with the new tagname
    var changeTag = function (node, tagename) {
        var attrs = node.attributes,
            object = {},
            len = attrs.length;
        for (var i = 0; i < len; i++) {
            var item = attrs[i];
            object[item.name] = item.value;
        }
        var attrs = null;
        return _dom(tagename, {
            attr: object
        });
    };
/*
METHODS FOR CLASS MODS
*/
    //classname
    var _cn = function (node, n) {
        if (hasValue(n)) {
            node.className = n;
            return node;
        }
        return node.className;
    },
        //classlist
        _cl = function (node, args) {
            var node_classList = node.classList;
            if (args) {
                if (!_isArray(args)) {
                    if (!node_classList.contains(args)) {
                        node_classList.add(args);
                    }
                } else {
                    _each_array(args, function (item) {
                        if (!node_classList.contains(item)) {
                            node_classList.add(item);
                        }
                    });
                }
                return node;
            }
            return node_classList;
        },
        //classlist functions
        _clHas = function (node, key) {
            return node.classList.contains(key);
        },
        _clRemove = function (node, args) {
            var node_classList = node.classList;
            if (!_isArray(args)) {
                if (node_classList.contains(args)) {
                    node_classList.remove(args);
                }
            } else {
                _each_array(args, function (item) {
                    if (node_classList.contains(item)) {
                        node_classList.remove(item);
                    }
                });
            }
            return node;
        },
        _clTog = function (node, args) {
            var node_classList = node.classList;
            if (!_isArray(args)) {
                node_classList.toggle(args);
            } else {
                _each_array(args, function (item) {
                    node_classList.toggle(item);
                });
            }
            return node;
        };

    //clear
    var _clear = function (node) {
        while (node.firstChild) {
            node.firstChild.remove();
        }
        return node;
    };
    var _clw = function (node) {
        return node.clientWidth;
    },
        _clh = function (node) {
            return node.clientHeight;
        };
    //copynode
    var _clone = function (node, bool) {
        return node.cloneNode(bool);
    };
    //btn + adding
    var _ison = function (node, n) {
        var cls = node.classList;
        if (cls.contains('ison')) {
            if (n) {
                node.textContent = Number(node.textContent) - Number(n);
            }
            cls.remove('ison');
        } else {
            if (n) {
                node.textContent = Number(node.textContent) + Number(n);
            }
            cls.add('ison');
        }
        return node;
    },
        _add = function (node, n) { //get number add 1 to it
            node.textContent = Number(node.textContent) + Number(n || 1);
            return node;
        },
        _sub = function (node, n) { //get number subtract 1
            node.textContent = Number(node.textContent) - Number(n || 1);
            return node;
        },
        //quick changes
        _hide = function (node) { //hide class toggle
            node.style.display = 'none';
            return node;
        },
        _show = function (node) { //show class toggle
            node.style.display = '';
            return node;
        },
        _toggle = function (node, classname) {
            if (classname) {
                node.classList.toggle(classname);
            } else {
                var display = node.style.display;
                if (display == 'none') {
                    node.style.display = '';
                } else {
                    node.style.display = 'none';
                }
            }
            return node;
        };
    var _html = function (node, n) {
        if (hasValue(n)) {
            if (_isFunction(n)) {
                var n = n.apply(this, []);
            }
            node.innerHTML = n;
            return node;
        }
        return node.innerHTML;
    },
        _ohtml = function (node, n) {
            if (hasValue(n)) {
                if (_isFunction(n)) {
                    var n = n.apply(this, []);
                }
                node.outerHTML = n;
                return node;
            }
            return node.outerHTML;
        };
    //insertAdjacentHTML
    var _generate_insertAdjacentHTML = function (type) {
        var returned = function (node, data) {
            node.insertAdjacentHTML(type, data);
            return node;
        };
        return returned;
    },
        _be = _generate_insertAdjacentHTML('beforeEnd'),
        _ab = _generate_insertAdjacentHTML('afterbegin'),
        _bb = _generate_insertAdjacentHTML('beforeBegin'),
        _ae = _generate_insertAdjacentHTML('afterEnd');
    var insertAfter = function (child, new_node) {
        child.parentNode.insertBefore(new_node, child.nextSibling);
        return new_node;
    };
    var insertBefore = function (child, new_node) {
        child.parentNode.insertBefore(new_node, child);
        return new_node;
    };
    var _next = function (node) {
        return node.nextSibling;
    };
    //offsets
    var _ow = function (node) {
        return node.offsetWidth;
    },
        _oh = function (node) {
            return node.offsetHeight;
        },
        _ot = function (node) {
            return node.offsetTop;
        },
        _offset = function (node) {
            var i = node.getBoundingClientRect();
            var returned = {
                top: i.top + _body.scrollTop,
                left: i.left + _body.scrollLeft
            };
            return returned;
        };
    var _last = function (node) {
        return node.lastChild;
    },
        _first = function (node) {
            return node.firstChild;
        };
    var _parNode = function (node) {
        return node.parentNode;
    };
    var _plugInto = function (node, string, object) {
        var model = _find(string, _model);
        if (model) {
            return model(node, object);
        } else {
            _ensure(string, function () {
                var model = _find(string, _model);
                if (model) {
                    model(node, object);
                }
                string = null;
                object = null;
                node = null;
            });
        }
        return node;
    };
    var prepend = function (node, child) {
        var first = node.firstChild;
        if (first) {
            node.insertBefore(child, first);
        } else {
            node.appendChild(child);
        }
        return node;
    };
    var _previous = function (node) {
        return node.previousSibling;
    };
    //props
    var _val = function (node, n) {
        if (hasValue(n)) {
            if (_isFunction(n)) {
                var n = n.apply(this, []);
            }
            node.value = n;
            return node;
        }
        return node.value;
    },
        _sty = function (node, attr, value) {
            if (hasValue(value)) {
                node.style[attr] = value;
                return node;
            }
            return node.style;
        },
        _sel = function (node, n) {
            if (n) {
                node.selected = n;
                return o;
            }
            return node.selected;
        };
    //replace a child node wrapper
    var replaceChild = function (obj, born) {
        obj.parentNode.replaceChild(born, obj);
        return born;
    };
    //resets html good for clearing uploaded item
    var _resetHTML = function (node) {
        var obj = node.parentNode;
        obj.innerHTML = obj.innerHTML;
        return true;
    };
    //scroll this node
    var scrollIt = function (node, x, y) {
        if (hasValue(x)) {
            node.scrollTop = x;
        }
        if (hasValue(y)) {
            node.scrollLeft = y;
        }
        return node;
    };
    //scroll info
    var scrollInfo = function (node) {
        var returned = {
            top: node.scrollTop,
            left: node.scrollLeft
        };
        return returned;
    };
    //scroll
    var scrollInto = function (node, node_to_scroll_into_view) {
        node.scrollIntoView(node_to_scroll_into_view);
        return node;
    };
    //select text in node
    var selectIt = function (node) {
        var range = document.createRange();
        range.selectNodeContents(node);
        var sel = _window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        return node;
    };
    //selectors
    var _id = function (node, n) {
        return node.getElementById(n);
    },
        _clsDOM = function (node, n) {
            return node.getElementsByClassName(n);
        },
        _tagDOM = function (node, n) {
            return node.getElementsByTagName(n);
        },
        _qsa = function (node, n) {
            return node.querySelectorAll(n);
        },
        _qs = function (node, n) {
            return node.querySelector(n);
        };
    //text
    var _tc = function (node, n) {
        if (hasValue(n)) {
            if (_isFunction(n)) {
                var n = n.apply(this, []);
            }
            node.textContent = n;
            return node;
        }
        return node.textContent;
    },
        _txt = function (node, n) {
            if (hasValue(n)) {
                if (_isFunction(n)) {
                    var n = n.apply(this, []);
                }
                node.innerText = n;
                return node;
            }
            return node.innerText;
        };

    //store internal data for selectors
    var temp_objs_from_selector = {},
        $id = function (i) { //get id
            return _document.getElementById(i)
        },
        $cls = function (i) { //get cls
            return _document.getElementsByClassName(i)
        },
        $tag = function (i) { //get tag
            return _document.getElementsByTagName(i)
        },
        $qsa = function (i) { //get qsa
            return _document.querySelectorAll(i)
        },
        $qs = function (i) { //get qs
            return _document.querySelector(i)
        },
        //main selector class has optimizations
        $ = function (select) {
            var obj = temp_objs_from_selector[select];
            if (obj) {
                return obj();
            }
            if (select[0] == '#') {
                if (!regex_space.test(select)) {
                    var obj = $id(select.slice(1)),
                        safe = select.slice(1),
                        fun = function () {
                            return $id(safe);
                        };
                }
            } else if (select[0] == '.') {
                if ($class_test.test(select)) {
                    var obj = $cls(select.slice(1));
                    var fun = function () {
                        return obj;
                    };
                }
            } else if ($tag_test.test(select)) {
                var obj = $tag(select);
                var fun = function () {
                    return obj;
                };
            }
            if (!fun) {
                var obj = $qsa(select);
                var fun = function () {
                    return $qsa(select);
                };
            }
            temp_objs_from_selector[select] = fun;
            return obj;
        },
        //raw selection no optimizations
        $$ = function (select) {
            if (select[0] == '#') {
                if (!regex_space.test(select)) {
                    return $id(select.slice(1));
                }
            } else if (select[0] == '.') {
                if ($class_test.test(select)) {
                    return $cls(select.slice(1));
                }
            } else if ($tag_test.test(select)) {
                return $tag(select);
            }
            return $qsa(select);
        };
    //return temp obj
    $.temp = temp_objs_from_selector;
    //selectors
    //id
    _global.$id = $id;
    //tagename
    _global.$tag = $tag;
    //classname
    _global.$cls = $cls;
    //query selector all
    _global.$qsa = $qsa;
    //query selector
    _global.$qs = $qs;
    //selector without optimizations
    _global.$$ = $$;
    //export acid to global check for attribute avoid
    var avoid = (_global.acidAvoid) ? _global.acidAvoid : avoid;

    if (avoid) {
        _global[avoid] = $;
    } else {
        _global.$ = $;
    }
    var _domMethods = (function () {
        //node only
        var nodeOnly = {
            isMatch: function (match_string) {
                return _isMatch_dom(this, match_string);
            },
            changeTag: function (tagename) {
                return changeTag(this, tagename);
            },
            replace: function (born) {
                return replaceChild(this, born);
            },
            scrollIt: function (x, y) {
                return scrollIt(this, x, y);
            },
            scrollInfo: function () {
                return scrollInfo(this);
            },
            prepend: function (node) {
                return prepend(this, node);
            },
            prependTo: function (parent) {
                return prepend(parent, this);
            },
            ap: function (new_node) {
                return _append(this, new_node);
            },
            apTo: function (parent) {
                return _append(parent, this);
            },
            after: function (new_node) {
                return insertAfter(this, new_node);
            },
            before: function (new_node) {
                return insertBefore(this, new_node);
            },
            afterNth: function (new_child, position) {
                return afterNth(this, new_child, position);
            },
            beforeNth: function (new_child, position) {
                return beforeNth(this, new_child, position);
            },
            //select text in node
            selectIt: function () {
                return scrollInto(this);
            },
            //scroll
            scrollInto: function (node_to_scroll_into_view) {
                return scrollInto(this, node_to_scroll_into_view);
            },
            //will return null if .remove is in
            remove: $remove,
            resetHTML: function () { //clears uploaded item
                return _resetHTML(this);
            },
            next: function () {
                return _next(this);
            },
            previous: function () {
                return _previous(this);
            },
            //selectors
            id: function (n) {
                return _id(this, n);
            },
            cls: function (n) {
                return _clsDOM(this, n);
            },
            tag: function (n) {
                return _tagDOM(this, n);
            },
            qsa: function (n) {
                return _qsa(this, n);
            },
            qs: function (n) {
                return _qs(this, n);
            },
            //class functions
            //classname
            cn: function (string) {
                return _cn(this, string);
            },
            //classlist
            cl: function (arg) {
                if (arguments.length > 1) {
                    var arg = _toArray(arguments);
                }
                return _cl(this, arg);
            },
            //classlist functions
            clHas: function (key) {
                return _clHas(this, key);
            },
            //transverse up based on a match or number
            upTo: function (name) {
                return _upTo(this, name);
            },
            //copynode
            clone: function (bool) {
                return _clone(this, bool);
            },
            //center object
            center: function (data) {
                return _center(this, data);
            },
            html: function (n) {
                return _html(this, n);
            },
            ohtml: function (n) {
                return _ohtml(this, n);
            },
            //text
            tc: function (n) {
                return _tc(this, n);
            },
            txt: function (n) {
                return _txt(this, n);
            },
            //order
            parNode: function () {
                return _parNode(this);
            },
            last: function () {
                return _last(this);
            },
            first: function () {
                return _first(this);
            },
            //props
            val: function (n) {
                return _val(this, n);
            },
            sty: function (attr, value) {
                return _sty(this, attr, value);
            },
            sel: function (n) {
                return _sel(this, n);
            },
            //offsets
            ow: function () {
                return _ow(this);
            },
            oh: function () {
                return _oh(this);
            },
            ot: function () {
                return _ot(this);
            },
            offset: function () {
                return _offset(this);
            },
            clw: function () {
                return _clw(this);
            },
            clh: function () {
                return _clh(this);
            },
            //attr functions
            hasAttr: function (n) {
                return _hasAttr(this, n);
            },
            //set/get attribute
            attr: function (key, value) {
                return _attr(this, key, value);
            },
            plugInto: function (string, object) {
                return _plugInto(this, string, object);
            },
            clRemove: function (arg) {
                if (arguments.length > 1) {
                    var arg = _toArray(arguments);
                }
                return _clRemove(this, arg);
            },
            clTog: function (arg) {
                if (arguments.length > 1) {
                    var arg = _toArray(arguments);
                }
                return _clTog(this, arg);
            },
            //takes a data object then places over based on nodes
            faceplate: function (data, name) {
                return _faceplateDOM(this, data, name);
            },
            removeAttr: function (arg) {
                if (arguments.length > 1) {
                    var arg = _toArray(arguments);
                }
                return _removeAttr(this, arg);
            },
            //insertAdjacentHTML
            be: function (n) {
                return _be(this, n);
            },
            ab: function (n) {
                return _ab(this, n);
            },
            bb: function (n) {
                return _bb(this, n);
            },
            ae: function (n) {
                return _ae(this, n);
            },
            //clear
            clear: function () {
                return _clear(this);
            },
            //make action on object via acid event
            act: function (n) {
                return _act(this, n);
            },
            //btn + adding
            ison: function (n) {
                return _ison(this, n);
            },
            add: function (n) {
                return _add(this, n);
            },
            sub: function (n) {
                return _sub(this, n);
            },
            //quick changes
            hide: function (n) {
                return _hide(this, n);
            },
            show: function (n) {
                return _show(this, n);
            },
            toggle: function (n) {
                return _toggle(this, n);
            }
        };
        var generate_loop_single_clonenode = function (funct) {
            var generated = function (node) {
                var self = this,
                    items = _toArray(self);
                _each_array(items, function (item) {
                    funct(item, node.cloneNode(true));
                });
                return self;
            };
            return generated;
        },
            generate_loop_single_clonenode_switch_clone = function (funct) {
                var generated = function (node) {
                    var self = this,
                        items = _toArray(self);
                    _each_array(items, function (item) {
                        funct(item.cloneNode(true), node);
                    });
                    return self;
                };
                return generated;
            },
            generate_loop_single_switch = function (funct) {
                var generated = function (node) {
                    var self = this,
                        items = _toArray(self);
                    _each_array(items, function (item) {
                        funct(node, item);
                    });
                    return self;
                };
                return generated;
            },
            generate_loop_single = function (funct) {
                var generated = function (node) {
                    var self = this,
                        items = _toArray(self);
                    _each_array(items, function (item) {
                        funct(node, item);
                    });
                    return self;
                };
                return generated;
            },
            generate_loop_single_return = function (funct) {
                var generated = function (arg) {
                    var self = this,
                        items = _toArray(self);
                    if (arguments.length > 1) {
                        var arg = _toArray(arg);
                    }
                    var rertuned = _each_array(items, function (item) {
                        return funct(item, arg);
                    });
                    return rertuned;
                };
                return generated;
            },
            generate_loop_return = function (funct) {
                var generated = function (node) {
                    var self = this,
                        items = _toArray(self);
                    var rertuned = _each_array(items, function (item) {
                        return funct(item);
                    });
                    return rertuned;
                };
                return generated;
            },
            //not as fast but works for extra methods
            generate_loop_return_triple = function (funct) {
                var generated = function (x, y) {
                    var self = this,
                        args = _toArray(arguments),
                        items = _toArray(self);
                    var rertuned = _each_array(items, function (item) {
                        return funct(item, x, y);
                    });
                    return rertuned;
                };
                return generated;
            },
            generate_loop_nth = function (funct) {
                var generated = function (new_child, position) {
                    var self = this,
                        args = _toArray(arguments),
                        items = _toArray(self);
                    var rertuned = _each_array(items, function (item) {
                        return funct(item, new_child.cloneNode(true), position);
                    });
                    return rertuned;
                };
                return generated;
            };

        //live list operations meaning nodes can be removed from DOM and the loop is internal
        var listOnly = {
            each: function (n) {
                var list = this;
                for (var i = 0, items = _toArray(list), len = items.length; i < len; i++) {
                    n(items[i]);
                }
                return list;
            },
            lastIn: function () {
                var node_list = this;
                var last = node_list[node_list.length - 1];
                return last;
            },
            firstIn: function () {
                var first = this[0];
                return first;
            },
            toArray: function () {
                return _toArray(this);
            },
            isMatch: generate_loop_single_return(_isMatch_dom),
            changeTag: generate_loop_single_return(changeTag),
            replace: generate_loop_single_clonenode(replaceChild),
            scrollIt: generate_loop_return_triple(scrollIt),
            scrollInfo: generate_loop_return(scrollInfo),
            prepend: generate_loop_single_clonenode(prepend),
            prependTo: generate_loop_single_switch(prepend),
            ap: generate_loop_single_clonenode(_append),
            apTo: generate_loop_single_switch(_append),
            after: generate_loop_single_clonenode(insertAfter),
            //$('a').after($.toDOM('after'))
            before: generate_loop_single_clonenode(insertBefore),
            //$('a').before($.toDOM('before'))
            afterNth: generate_loop_nth(afterNth),
            beforeNth: generate_loop_nth(beforeNth),
            remove: generate_loop_return(removeloop),
            removeRange: function (start, end) {
                return _removeRange(this, start, end);
            },
            resetHTML: generate_loop_return(_resetHTML),
            next: generate_loop_return(_next),
            previous: generate_loop_return(_previous),
            //selectors
            id: generate_loop_single_return(_id),
            cls: generate_loop_single_return(_clsDOM),
            tag: generate_loop_single_return(_tagDOM),
            qsa: generate_loop_single_return(_qsa),
            qs: generate_loop_single_return(_qs),
            //class functions
            //classname
            cn: generate_loop_single_return(_cn),
            //classlist
            cl: generate_loop_single_return(_cl),
            //classlist functions
            clHas: generate_loop_single_return(_clHas),
            //transverse up based on a match or number
            upTo: generate_loop_single_return(_upTo),
            //copynode
            copy: generate_loop_single_return(_clone),
            //center object
            center: generate_loop_single_return(_center),
            html: generate_loop_single_return(_html),
            ohtml: generate_loop_single_return(_ohtml),
            //text
            tc: generate_loop_single_return(_tc),
            txt: generate_loop_single_return(_txt),
            //order
            parNode: generate_loop_return(_parNode),
            last: generate_loop_return(_last),
            first: generate_loop_return(_first),
            //props
            val: generate_loop_single_return(_val),
            sty: generate_loop_return_triple(_sty),
            sel: generate_loop_single_return(_sel),
            //offsets
            ow: generate_loop_return(_ow),
            oh: generate_loop_return(_oh),
            ot: generate_loop_return(_ot),
            offset: generate_loop_return(_offset),
            clw: generate_loop_return(_clw),
            clh: generate_loop_return(_clh),
            //attr functions
            hasAttr: generate_loop_single_return(_hasAttr),
            //set/get attribute
            attr: generate_loop_return_triple(_attr),
            plugInto: generate_loop_return_triple(_plugInto),
            clRemove: generate_loop_single_return(_clRemove),
            clTog: generate_loop_single_return(_clTog),
            //takes a data object then places over based on nodes
            faceplate: generate_loop_return_triple(_faceplateDOM),
            removeAttr: generate_loop_single_return(_removeAttr),
            //insertAdjacentHTML
            be: generate_loop_single_return(_be),
            ab: generate_loop_single_return(_ab),
            bb: generate_loop_single_return(_bb),
            ae: generate_loop_single_return(_ae),
            //clear
            clear: generate_loop_return(_clear),
            //make action on object via acid event
            act: generate_loop_single_return(_act),
            //btn + adding
            ison: generate_loop_single_return(_ison),
            add: generate_loop_single_return(_add),
            sub: generate_loop_single_return(_sub),
            //quick changes
            hide: generate_loop_single_return(_hide),
            show: generate_loop_single_return(_show),
            toggle: generate_loop_single_return(_toggle)
        };
        var data = {
            nodeOnly: nodeOnly,
            listOnly: listOnly
        };

        return data;
    })();
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
    array_extend.pushApply = function (array) {
        return _array_push.apply(this, array);
    };
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
            array.push(temp.splice(Math.round(Math.random() * (temp.length - 1)), 1)[0]);
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

    var rawURLDecode_regex = /%(?![\da-f]{2})/gi,
        and_regex = /&/g,
        less_than_regex = /</g,
        more_than_regex = />/g,
        double_quote_regex = /"/g,
        slash_regex = /\//g;
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
        return decodeURIComponent((this + '').replace(rawURLDecode_regex, function () {
            return '%25';
        }));
    };
    //html entities
    string_extend.htmlEntities = function () {
        return this.replace(and_regex, '&amp;').replace(less_than_regex, '&lt;').replace(more_than_regex, '&gt;').replace(double_quote_regex, '&quot;').replace(slash_regex, '&quot;');
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

    //encode URI Component
    string_extend.unescapeHTML = function () {
        var empty = _empty_node_div;
        empty.innerHTML = this;
        return empty.textContent;
    };
    //tokenize split by groups of characters that are not whitespace
    string_extend.tokenize = function () {
        return this.match(/\S+/g) || [];
    };
    //match by alphanumeric+underscore
    string_extend.words = function () {
        return this.match(/\w+/g);
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
    //loop through a range of numbers
    number_extend.each = function (start, funct) {
        var end = this;
        if (!funct) {
            var funct = start;
            var start = 0;
        }
        var returned = _each_number(start, end, funct);
        return returned;
    };

    //is number zero
    number_extend.isZero = function () {
        return this === 0;
    };
    //is strict equal to
    number_extend.isEqual = function (num) {
        return this === num;
    };
    //is In range of two numbers
    number_extend.isInRange = function (start, end) {
        var num = this;
        if (end === _undefined) {
            var end = start;
            var start = 0;
        }
        return num > start && num < end;
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
            if (!min) {
                var min = 0;
            }
            return random() * (this - min) + min;
        };
        // Returns a random integer between min (included) and max (excluded)
        // Using Math.round() will give you a non-uniform distribution!
        number_extend.randomInt = function (min) {
            if (!min) {
                var min = 0;
            }
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
    var window_extend = {
        selection: function () { //get text selection
            var i, len, ranges = [],
                sel = _window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                for (i = 0, len = sel.rangeCount; i < len; i += 1) {
                    ranges.push(sel.getRangeAt(i));
                }
                var returned = {
                    sel: sel,
                    ranges: ranges,
                    start: _window.selection.start(),
                    html: _window.selection.html(sel)
                };
                return returned;
            }
            return null;
        }
    },
        savedSel = false;

    window_extend.selection.start = function () {
        var node = _document.getSelection().anchorNode,
            startNode = (node && node.nodeType === 3 ? node.parentNode : node);
        return startNode;
    };
    window_extend.selection.restore = function (i) {
        var i, len, sel = _window.getSelection();
        if (savedSel) {
            sel.removeAllRanges();
            for (i = 0, len = savedSel.length; i < len; i += 1) {
                sel.addRange(savedSel[i]);
            }
        }
    };
    window_extend.selection.html = function (a) {
        var i, html = '',
            sel, len, container;
        if (a !== undefined) {
            sel = a;
            if (sel.rangeCount) {
                container = _document.createElement('div');
                for (i = 0, len = sel.rangeCount; i < len; i += 1) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                html = container.innerHTML;
            }
        } else if (_document.selection !== undefined) {
            if (_document.selection.type === 'Text') {
                html = _document.selection.createRange().htmlText;
            }
        }
        return html;
    };
    var event_extend = {
        isEnter: function () { //checks if this an enter key
            var i = this.keyCode;
            if (i == 13) {
                return true;
            }
            return false;
        }
    };
    extend(window_extend, Window[$prototype]); //window
    //DOM
    //single node only operations
    extend(_domMethods.nodeOnly, node_prototype);
    //lists without looping
    extend(_domMethods.listOnly, nodelist_prototype);
    extend(_domMethods.listOnly, htmlcollection_prototype);

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
                console.log(evt);
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
                var callback = xhr.callback;
                if (callback) {
                    _async(function () {
                        callback(data, evt)
                    });
                }
            }
            if (status > 200) {
                var callback = xhr.fail;
                if (callback) {
                    _async(function () {
                        callback(evt)
                    });
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
                var callback = xhr.callback,
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

    function xhrPostParam(url, add) {
        if (url.length > 0) {
            var url = url + '&';
        }
        var url = url + add;
        return url;
    }

    //xhr
    $.xhr = function (config) {
        var xhr = new XMLHttpRequest(),
            url = config.url,
            data = config.data || '',
            type = config.type || 'GET',
            contentType = config.contentType,
            callback = config.callback,
            success = config.success,
            fail = config.fail,
            abort = config.abort,
            progress = config.progress,
            credits = $ext.credits.url,
            analytics = $ext.xhr.analytics,
            newData = '';

        if (!contentType) {
            if (type == 'GET') {
                var contentType = 'text/plain';
            } else {
                var contentType = "application/x-www-form-urlencoded";
            }
        }

        if (isPlainObject(data)) {
            _each_object(data, function (item, key) {
                newData = xhrPostParam(newData, key + '=' + item);
            });
        } else if (_isArray(data)) {
            _each_array(data, function (item, key) {
                newData = xhrPostParam(newData, item);
            });
        }

        if (credits) {
            var newData = xhrPostParam(newData, credits());
        }

        if (analytics) {
            analytics(url, newData);
        }
        if (callback) {
            xhr.callback = callback;
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

        if (type == 'GET') {
            if (!_has(url, '?')) {
                var url = url + '?' + newData;
            } else {
                var url = url + '&' + newData;
            }
            var newData = '';
        }

        xhr.open(type, url, true);
        xhr.setRequestHeader("Content-type", contentType);
        xhr.send(newData);
        var xhr = null,
            url = null,
            data = null,
            type = null,
            contentType = null,
            callback = null,
            credits = null,
            analytics = null;
        return false;
    };

    //quick GET URL
    $.fetch = function (url, callback) {
        var xhr, xhr = new XMLHttpRequest();
        if (callback) {
            xhr.callback = callback;
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
    var _each = $.each = (function () {
        function each(object, funct) {
            if (_isArray(object)) {
                var returned = _each_array(object, funct);
            } else if (isPlainObject(object)) {
                var returned = _each_object(object, funct);
            } else if (isNumber(object)) {
                var returned = _each_number(object, funct);
            }
            return returned;
        }

        return each;
    })();
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
    $.isNaN = _isNaN;
    $.isInt = _isInt;
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

    //make action on object via acid event
    var _act = function (node, type) {
        $['on' + type](node);
        return node;
    };
    //Get useragent info
    $.isAgent = function (name) {
        if (!name) {
            return _agentinfo;
        }
        return _agentinfo[name];
    };
    //create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
    var _define = $.define = (function () {

        //module function
        var callback = function (module) {
            module();
            return false;
        },
            define = function (methods, fn) {
                return _module(methods, fn, callback)();
            };

        //export
        return define;
    })();

/*
	Example

	//function to be defined
	var define=function(template,model,toDOM,isNative,console){
		console(arguments);
	},
	//definitions for variables
	require=['template','model','toDOM','isNative','console'];

	// Define our function
	//NOTE: executes once resources are loaded
	$.define(require,define);

*/
    var _ensure = $.ensure = (function () {

        //ensure a model is loaded if not load it then launch fn again
        var ensure = function (string, call) {
            var models = _model,
                root = string.split('.')[0],
                url = root + ".js",
                model = _find(root, models);
            if (model) {
                if (call) {
                    _async(function () {
                        call(model);
                        call = null;
                        model = null;
                    });
                }
                return true;
            }
            return _import(url, {
                //callback
                call: function () {
                    var model = _find(root, models);
                    if (call) {
                        _async(function () {
                            call(model);
                            call = null;
                            root = null;
                            model = null;
                        });
                    }
                    return false;
                }
            });
        };

        //import an array of items
        var array_ensure = function (array, call) {
            var len = array.length,
                array_model = [],
                name = array.join('').replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_promise';
            //create promise
            _promise(array, name, function () {
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    var splitIt = item.split('/'),
                        model = _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
                    if (model) {
                        array_model[i] = model;
                    }
                }
                _async(function () {
                    call.apply(call, array_model);
                    call = null;
                    array_model = null;
                });
                return false;
            });
            //make imports
            for (var i = 0; i < len; i++) {
                (function (item, n) {
                    var url = (_has(item, '.js')) ? item : item + '.js';
                    _import(url, {
                        call: function () {
                            _promised(item, n);
                            item = null;
                            n = null;
                            return false;
                        }
                    }, 1);
                })(array[i], name);
            }
            var len = null,
                name = null;
            return false;
        };

        return function (key, call) {
            if (_isString(key)) {
                return ensure(key, call);
            }
            return array_ensure(key, call);
        };

    })();

    $.ensureInvoke = function (ensures) {
        var ensures = (_isArray(ensures)) ? ensures : [ensures];
        _ensure(ensures, function () {
            _each_array(ensures, function (item) {
                var splitIt = item.split('/'),
                    model = _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
                if (model) {
                    model();
                }
            });
            ensures = null;
        });
    };
    //export and cache faceplate function
    var _faceplate = $.faceplate = (function () {
        //add faceplates from object
        var obj_faceplate = function (object) {
            for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
                var key = keys[i];
                _faceplate[key] = object[key];
            }
            return false;
        };
        //add faceplates from array
        var array_faceplate = function (o, a) {
            var len = o.length;
            for (var i = 0; i < len; i++) {
                _faceplate[o[i]] = a[i];
            }
            return false;
        };
        //set a faceplate
        var faceplate = function (key, value, item) {
            if (_isString(key)) {
                if (item) {
                    return _faceplate[key](value, item);
                } else if (value) {
                    _faceplate[key] = value;
                    return true;
                }
                return _faceplate[key];
            } else if (isPlainObject(key)) {
                if (value) {
                    return obj_faceplate(key, value);
                }
                return obj_faceplate(key);
            } else if (_isArray(key)) {
                if (value) {
                    return array_faceplate(key, value);
                }
                return array_faceplate(key);
            }
            return false;
        };
        return faceplate;
    })();
    //fragment
    $.frag = $frag;
    //create node
    var _tag = $.tag = function (name) {
        return _document.createElement(name);
    };

    //build into dom
    var _dom = $.dom = function (name, data) {
        var e = _document.createElement(name),
            attr = data.attr,
            set = data.set,
            prop = data.prop;
        if (attr) {
            for (var i = 0, keys = _object_keys(attr), len = keys.length; i < len; i++) {
                var key = keys[i];
                e.setAttribute(i, attr[key]);
            }
        }
        if (set) {
            for (var i = 0, keys = _object_keys(set), len = keys.length; i < len; i++) {
                var key = keys[i];
                e.setAttribute('data-' + i, set[key]);
            }
        }
        if (prop) {
            for (var i = 0, keys = _object_keys(prop), len = keys.length; i < len; i++) {
                var key = keys[i];
                e[key] = prop[key];
            }
        }
        for (var i = 0, keys = _object_keys(data), len = keys.length; i < len; i++) {
            var key = keys[i];
            if (key == 'attr') {
                continue;
            }
            if (key == 'prop') {
                continue;
            }
            if (key == 'set') {
                continue;
            }
            var args = data[key];
            if (!_isArray(args)) {
                e[key](data[key]);
            } else {
                e[key].apply(e, data[key]);
            }
        }
        return e;
    };

    //build into HTML
    var _html = $.html = function (e, data) {
        var attr = data.attr,
            set = data.set,
            html = data.html || '',
            items = '';
        if (attr) {
            for (var i = 0, keys = _object_keys(attr), len = keys.length; i < len; i++) {
                var key = keys[i];
                var items = items + ' ' + key + '="' + attr[key] + '"';
            }
        }
        if (set) {
            for (var i = 0, keys = _object_keys(set), len = keys.length; i < len; i++) {
                var key = keys[i];
                e.setAttribute('data-' + key, set[key]);
                var items = items + ' data-' + key + '="' + set[key] + '"';
            }
        }
        return '<' + e + ' ' + items + '>' + html + "</" + e + ">";
    };

    //string to DOM
    var _toDOM = $.toDOM = function (html, childNumber) {
        var empty = _empty_node_div;
        empty.innerHTML = html;
        var frag = $frag(),
            first = null;
        while (first = empty.firstChild) {
            frag.appendChild(first);
        }
        var empty = null,
            first = null;
        if (hasValue(childNumber)) {
            return frag.childNodes[childNumber];
        }
        return frag;
    };
    //Compiled import function
    (function () {
        //store URL dir data to save bytes and dev time
        $ext.import = {};
        //keep track of what has been imported
        $.imported = {};

        $.dir = {
            css: '',
            html: '',
            js: '',
        };
/*
	IMPORT SHARED FUNCTIONS

	*/
        var import_listen = function (data) {
            //if URL loads
            $eventadd(data.node, 'load', data.call);
            //if URL fails
            $eventadd(data.node, 'error', data.error);
            return false;
        },
            import_id = function (id) {
                return (id.replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_import');
            },
            import_events = function (node, url, id, call, error, remove) {
                var callback = function (event) {
                    if (call) {
                        if (_isString(call)) {
                            _async(function () {
                                var fn = _find(call, _model);
                                if (_isFunction(fn)) {
                                    fn();
                                }
                                call = null;
                                fn = null;
                            });
                        } else if (_isFunction(call)) {
                            var splitIt = url.split('/'),
                                model = _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
                            _async(function () {
                                call.call(call, model);
                                model = null;
                                call = null;
                            });
                        }
                    }
                    if (remove) {
                        var par = node.parentNode;
                        if (par) {
                            par.removeChild(node);
                        }
                    }
                    //clean up
                    $eventremove(node, 'load', callback);
                    $eventremove(node, 'error', callback_error);
                    node = null;
                    callback_error = null;
                    callback = null;
                    error = null;
                },
                    callback_error = function (event) {
                        if (error) {
                            if (_isString(error)) {
                                (function () {
                                    var fn = _find(error, _model);
                                    if (_isFunction(fn)) {
                                        fn();
                                    }
                                    error = null;
                                }).async();
                            } else if (_isFunction(error)) {
                                error.async();
                                error = null;
                            }
                        }
                        //clean up
                        $eventremove(node, 'load', callback_error);
                        $eventremove(node, 'error', callback_error);
                        node.parentNode.removeChild(node);
                        node = null;
                        callback_error = null;
                        callback = null;
                        call = null;
                    };
                var returned = {
                    node: node,
                    call: callback,
                    error: callback_error
                };
                return returned;
            };
/*

CSS IMPORT FUNCTIONS

*/
        //STYLE NODE
        var style_node = _document.createElement('link');
        style_node.setAttribute('rel', 'stylesheet');
        style_node.setAttribute('type', 'text/css');
        //create style node
        var import_style = function (url, id) {
            var node = style_node.cloneNode(false);
            node.setAttribute('href', url);
            node.setAttribute('id', id);
            var returned = {
                node: node,
                remove: false
            };
            return returned;
        };
/*

SCRIPT IMPORT FUNCTIONS

*/
        var script_node = _document.createElement('script');
        script_node.setAttribute('async', '');
        //create style node
        var import_script = function (url, id, remove) {
            var node = script_node.cloneNode(false);
            node.setAttribute('src', url);
            node.setAttribute('id', id);
            var returned = {
                node: node,
                remove: remove || true
            };
            return returned;
        };
/*

NODE TYPE OBJECT


*/
        var node_types = {
            js: import_script,
            css: import_style
        };
/*

	EXTEND import to string

*/
        //import a single item
        var import_it = function (url, data, ismultiple) {
            var data = data || {},
                dir = data.dir,
                type = url.match(regex_ext)[0].replace('.', ''),
                url = ((!dir) ? ((_has(url, '//')) ? url : ($.dir[type] || '') + url) : ($.dir[dir] || '') + url),
                id = import_id(url);
            if (!$.imported[id]) {
                //mark as imported already
                $.imported[id] = true;
                //create node type
                var node_data = node_types[type](url, id, data.remove),
                    node = node_data.node;
                //events
                import_listen(import_events(node, url, id, data.call, data.error, node_data.remove));
                //append
                var parent = ((head_node) ? head_node : $(data.selector)).appendChild(node),
                    parent = null;
            } else {
                //if already there attach events
                var node = $id(id);
                if (node && _has(url, '.js')) {
                    import_listen(import_events(node, url, id, data.call, data.error, ((data.remove) ? data.remove : ((type == 'js') ? true : false))));
                } else {
                    if (!ismultiple) {
                        if (_has(url, '.js')) {
                            var splitIt = url.split('/'),
                                model = _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
                            if (model) {
                                return (function () {
                                    data.call(model);
                                    model = null;
                                }).async();
                            }
                        }
                    }
                    return data.call.async();
                }

            }
            return false;
        };
        //import an array of items
        var array_import = function (array, data) {
            var len = array.length,
                array_model = [],
                name = array.join('').replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_promise',
                error = data.error,
                call = data.call;
            //create promise
            _promise(array, name, function () {
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    if (_has(item, '.js')) {
                        var model = _find(item.split('/').last().split('.js')[0], _model);
                        if (model) {
                            array_model.push(model);
                        }
                    }
                }
                _async(function () {
                    call.apply(call, array_model);
                    call = null;
                    array_model = null;
                });
                return false;
            });
            //make imports
            for (var i = 0; i < len; i++) {
                (function (item, n) {
                    _import(item, {
                        error: function () {
                            if (error) {
                                error(item, n);
                            }
                            _promised(item, n);
                            item = null;
                            n = null;
                            return false;
                        },
                        call: function () {
                            _promised(item, n);
                            item = null;
                            n = null;
                            return false;
                        }
                    }, 1);
                })(array[i], name);
            }
            var len = null,
                name = null;
            return false;
        };
        $.import = function (key, value) {
            if (_isFunction(value)) {
                var value = {
                    call: value
                };
            }
            if (_isString(key)) {
                return import_it(key, value);
            }
            return array_import(key, value);
        };

    })();

    //cache import function
    var _import = $.import;
    //create a function that takes an object that is apart of the main $ and applies/calls it to the functions arguments useful for caching functions
    var _module = $.module = (function () {
        //module function
        var compile_module = function (methods, fn, callback) {
            var temp = [],
                import_it = [],
                methods = (_isArray(methods)) ? methods : [methods],
                len = methods.length;
            for (var i = 0; i < len; i++) {
                var item = methods[i];
                if (_isString(item)) {
                    if (_has(item, '.js') || _has(item, '.css')) {
                        import_it.push(item);
                    } else {
                        temp.push(_find(item, $));
                    }
                } else {
                    temp.push(item);
                }
            }
            var call = function () {
                var args = temp.concat(_toArray(arguments)),
                    module_with_import = function () {
                        return fn.apply(fn, args);
                    };
                module_with_import.args = function (i) {
                    if (i) {
                        args = args.concat(_toArray(arguments));
                    }
                    return args;
                };
                if (callback) {
                    return callback(module_with_import);
                }
                return module_with_import();
            };
            if (import_it.length > 0) {
                return _import(import_it, {
                    call: call
                });
            }
            var compiled = function () {
                return fn.apply(fn, temp);
            };
            //return to callback if passed
            if (callback) {
                return call();
            }
            return compiled;
        };
        //export
        var module = function (data, fn, callback) {

            if (!fn) {
                return _module[data];
            }

            var compiled = function () {
                var returned = compile_module(data, fn, callback);
                if (_isFunction(returned)) {
                    return returned();
                }
                return returned;
            };
            compiled.save = function (name) {
                return _module[name] = compiled;
            };
            return compiled;
        };

        return module;
    })();
/*
	Example
	//module function
	var module=function(template,model,toDOM,isNative,console,api){
		model('test',{
			log:function(){ console(1); },
			template:template,
			model:model,
			toDOM:toDOM,
			isNative:isNative(isNative),
			api:api
		});
	},
	//callback for module when import items are loaded -> if none the module function will be used
	callback=function(module){
		module();
		$.model('test');
		$.model('test.log')();
		return module();
	};

	//module definitions
	$.module(['template','model','toDOM','isNative','console','docs/api.js'],module,callback);

*/
    var _plugin = $.plugin = (function () {

        var plugin = function (plugins, callback) {
            var importLibs = [];
            _each_object(plugins, function (item, key) {
                importLibs.push(item.url);
            });
            _import(importLibs, function () {
                _each_object(plugins, function (item, key) {
                    $[item.name || key] = window[key];
                });
                if (callback) {
                    callback();
                }
            });
        };

        return plugin;

    })();
    //set/get/compile template
    var _template = $.template = function (string, data) {
        //store template
        if (_isString(data)) {
            var node = _template[string] = _toDOM(data, 0);
            var node = null;
            return false;
        } else if (isDom(data) || _isFunction(data)) {
            _template[string] = data;
            return false;
        }
        var template = _template[string];
        if (isDom(template)) {
            var template = template.cloneNode(true);
            if (data) {
                _faceplateDOM(template, data, string);
            }
        } else if (_isFunction(template)) {
            if (data) {
                var template = _toDOM(template(data), 0);
            }
        }
        return template;
    };
    //to array for html node collection
    $.domListToArray = domListToArray;
    //combine a template and a faceplate
    var _view = $.view = function (name, html, funct) {
        if (!funct) {
            var node = _template(name),
                face = _faceplate[name];
            if (face) {
                _faceplate[name](html, node);
            }
            return node;
        } else {
            _faceplate(name, funct);
        }
        _template(name, html);
        return true;
    };
/*

	HIGHLY EXPERIMENTAL YOU HAVE BEEN WARNED ES7 only
	WELCOME TO THE DANGER ZONE

	This is advanced web components with ES7, browser support is limited

*/

    (function () {
        if (!_observe) {
            return false;
        }
        //return the build data
        $.react = _react;
    })();
    //add elements to the batch
    var batchAdd = function (func, change) {
        asyncChanges[asyncChangesCount] = function () {
            func(change);
            change = null;
            func = null;
            return false;
        };
        asyncChangesCount = asyncChangesCount + 1;
        return false;
    },
        //add elements to the batch
        batchAddCall = function (object, func, change) {
            asyncChanges[asyncChangesCount] = function () {
                func.call(object, change);
                change = null;
                func = null;
                object = null;
                return false;
            };
            asyncChangesCount = asyncChangesCount + 1;
            return false;
        };
    //build a view for a node
    var _react = function (config, data) {
        //uses a porxy for super fast binding plus avoiding mem usage
        if (_isFunction(config)) {
            var config = _bind_call(config);
        }
        var compiled = build_model(config),
            object = compiled.model,
            config = compiled.config;
        //compile initial state
        compileData(object, config.componentData);
        //compile DOM
        compileView(object, object.modelName, config.view, config.template);
        //cache nodes and correct actions
        compileNodes(object);
        //faceplate
        compileFaceplate(object, config);
        //bind methods to new model
        generateMethods(object, config.componentModel || config);
        //generate component specific methods
        generateComponentMethods(object, config);
        if (data) {
            object.set(data);
        }
        return object;
    };
    //build the initial model
    var build_model = function (config) {
        //model name proxy
        if (_isString(config)) {
            var ogModelName = config,
                config = _model(ogModelName);
        } else {
            var ogModelName = config.name || config._.name;
        }
        var modelName = ogModelName + (componentID++);
        //save to models
        _model[modelName] = {
            OGModelName: ogModelName,
            modelName: modelName,
            eventName: modelName + '.',
            data: {},
            node: {},
            nodes: {},
            observers: {},
            props: {},
            share: config.data
        };
        if (!componentsMade[ogModelName]) {
            componentsMade[ogModelName] = {};
        }
        componentsMade[ogModelName][modelName] = _model[modelName];
        return {
            model: _model[modelName],
            config: config
        };
    };
    //kills observer logic and launches an unmount function
    var componentKill = function (object, funct, watcher) {
        componentsMade[object.OGModelName][object.modelName] = null;
        _unobserve(object.props, funct);
        _unobserve(object.data, watcher);
        if (object.observers) {
            _each_object(object.observers, function (item) {
                var type = item[0];
                if (isPlainObject(type)) {
                    _unobserve(item[0], item[1]);
                } else if (_isArray(type)) {
                    _array_unobserve(item[0], item[1]);
                }
            });
        }
        if (object.modelName) {
            _model[object.modelName] = null;
            componentID--;
        }
        var object = null,
            funct = null,
            watcher = null;
        return null;
    };
    //kills observer logic and launches an unmount function
    var modelKill = function (object, funct, watcher) {
        componentsMade[object._.name] = null;
        _unobserve(object.props, funct);
        _unobserve(object.data, watcher);
        if (object.observers) {
            _each_object(object.observers, function (item) {
                var type = item[0];
                if (isPlainObject(type)) {
                    _unobserve(item[0], item[1]);
                } else if (_isArray(type)) {
                    _array_unobserve(item[0], item[1]);
                }
            });
        }
        _model[object._.name] = null;
        componentID--;
        var object = null,
            funct = null,
            watcher = null;
        return null;
    };
    //unmount function on component
    var componentUnMount = function (object, unMount) {
        if (unMount) {
            unMount(object);
        }
        _removeNode(object.node);
        return object;
    };
    //mount function on component
    var componentMount = function (object, mount, set) {
        if (set) {
            componentSet(object, set);
        }
        if (mount) {
            mount.call(object);
        }
        return object.node;
    };
    //remove node plus kill
    var componentDestroy = function (object) {
        object.unMount();
        object.kill();
    };
    //set to data
    var componentSet = function (object, key, value) {
        if (value) {
            object.data[key] = value;
        } else if (isPlainObject(key)) {
            _each_object(key, function (item, key) {
                object.data[key] = item;
            });
        }
        return object.data[key];
    };
    //build the component model
    var _reactModel = function (name, object, lean) {
        var model = _model(name, object, lean),
            subscribeTo = model.subscribe;
        if (!model.nodes) {
            model.nodes = {};
        }
        compileView(model, name, model.modelView, model.modelTemplate);
        model.render = function (data) {
            return _react(model, data);
        };
        if (subscribeTo) {
            var subscribeTo = (_isArray(subscribeTo)) ? subscribeTo : [subscribeTo];
            _each_array(subscribeTo, function (item) {
                _model[item].subscribe[name] = 1;
            });
        }
        model.subscribe = function (item) {
            model.subscribe[item] = 1;
        };
        model.unSubscribe = function (item) {
            model.subscribe[item] = null;
        };
        var observerFN = function (changes) {
            reactModelFN(changes, name, model);
        };
        var subObserverFN = function (subKey) {
            return function (changes) {
                modelSubChanges(componentsMade[name], changes, subKey, objectViewChanges);
            };
        };
        var arrayObserverFN = function (subKey) {
            return function (changes) {
                modelSubChanges(componentsMade[name], changes, subKey, arrayChanges);
            };
        };
        var watcher = function (changes) {
            dataAdded(model, changes);
        };
        model.props = {};
        if (model.data) {
            compileData(model, model.data, subObserverFN, arrayObserverFN);
        } else {
            model.data = {};
        }
        model.kill = function () {
            modelKill(model, observerFN, watcher);
            model = null;
            observerFN = null;
            return null;
        };
        var mount = model.mount,
            unMount = model.unMount;
        model.unMount = function () {
            return componentUnMount(model, unMount);
        };
        model.mount = function (set) {
            return componentMount(model, mount, set);
        };
        if (model.model) {
            generateMethods(model, model.model);
        } else if (model.componentModel) {
            generateMethods(model, model);
        }
        _observe(model.props, observerFN);
        _observe(model.data, watcher);
        return model;
    };

    $.reactModel = _reactModel;
    var defineProp = function (object, item, key, observers, optionalFNobj, optionalFNarray) {
        var isAr = _isArray(item),
            object_data = object.data,
            object_props = object.props,
            isOb = isPlainObject(item);
        object_props[key] = item;
        //build the prop
        _defineProperty(object_data, key, {
            get: function () {
                return object_props[key];
            },
            set: function (newValue) {
                var oldValue = object_props[key],
                    this_observer = observers[key];
                if (isPlainObject(oldValue)) {
                    _unobserve(this_observer[0], this_observer[1]);
                } else if (_isArray(oldValue)) {
                    _array_unobserve(this_observer[0], this_observer[1]);
                }
                var oldValue = null,
                    this_observer = null;
                object_props[key] = newValue;
                if (_isArray(newValue)) {
                    var funct = (optionalFNarray) ? optionalFNarray(key) : function (changes) {
                        arrayChanges(object, changes, key);
                        return false;
                    };
                    _array_observe(object_props[key], funct);
                } else if (isPlainObject(newValue)) {
                    var funct = (optionalFNobj) ? optionalFNobj(key) : function (changes) {
                        objectViewChanges(object, changes, key);
                        return false;
                    };
                    _observe(object_props[key], funct);
                }
                if (funct) {
                    observers[key] = [object_props[key], funct];
                }
            },
            enumerable: true,
            configurable: true,
            writeable: false
        });
        //start observing
        if (isAr) {
            var funct = (optionalFNarray) ? optionalFNarray(key) : function (changes) {
                arrayChanges(object, changes, key);
                return false;
            };
            _array_observe(object_props[key], funct);
        } else if (isOb) {
            var funct = (optionalFNobj) ? optionalFNobj(key) : function (changes) {
                objectViewChanges(object, changes, key);
                return false;
            };
            _observe(object_props[key], funct);
        }
        if (funct) {
            observers[key] = ([object_props[key], funct]);
        }
    };
    var dataAdded = function (model, changes) {
        var len = changes.length,
            batch = {};
        for (var i = 0; i < len; i++) {
            var change = changes[i],
                name = change.name;
            if (change.type == 'add') {
                defineProp(model, change.object[name], name, model.observers);
            }
        }
        var model = null,
            changes = null;
        return false;
    };
    //enhanced array changes
    var buildArrayChange = function (change) {
        if (change.type === 'splice') {
            var removed = change.removed.length;
            var data = {
                addRange: (change.addedCount) ? change.index + change.addedCount : 0,
                removeRange: (removed) ? change.index + removed : 0,
                removeLength: (removed) ? removed : 0,
                index: change.index,
                addedCount: change.addedCount,
                object: change.object,
                removed: change.removed,
                type: change.type
            };
        } else if (change.type === 'update') {
            var data = {
                name: change.name,
                object: change.object,
                oldValue: change.oldValue,
                type: change.type
            };
        } else if (change.type === 'add') {
            var data = {
                name: change.name,
                object: change.object,
                type: change.type
            };
        }
        var change = null;
        return data;
    };

    //changes that happen to level 0 of data
    var viewChanges = function (model, changes) {
        _each_array(changes, function (change) {
            var method = model[change.name];
            if (method) {
                batchAdd(method, change);
            }
        });
        frameCall();
        return false;
    };
    //changes that happen to level 1 of data
    var objectViewChanges = function (model, changes, name) {
        var loose = model[name];
        _each_array(changes, function (change) {
            var method = loose[change.name];
            if (method) {
                batchAddCall(object, method, change);
            }
        });
        frameCall();
        return false;
    };
    //changes that happen to arrays level 0
    var arrayChanges = function (model, changes, name) {
        var loose = model[name];
        _each_array(changes, function (change) {
            if (loose) {
                batchAdd(loose, buildArrayChange(change));
            }
        });
        frameCall();
        return false;
    };

    var makechanges = function () {
        var items = asyncChanges,
            len = asyncChangesCount;
        for (var i = 0; i < len; i++) {
            items[i]();
        }
        asyncChangesCount = 0;
        asyncChanges = [];
        cancelFrame = false;
        return false;
    };

    var frameCall = function () {
        if (cancelFrame === false) {
            cancelFrame = _RAF(makechanges);
        }
    };
    var modelSubChanges = function (componentsMade, changes, subKey, func) {
        _each_object(componentsMade, function (item, key) {
            func(item, changes, subKey);
        });
    },
        reactModelFN = function (changes, name, model) {
            if (model.model || model.componentModel) {
                viewChanges(model, changes);
            }
            var copiesOfComponent = componentsMade[name];
            if (copiesOfComponent) {
                _each_object(copiesOfComponent, function (item, key) {
                    item.notify(changes);
                });
            }
            _each_object(model.subscribe, function (item, key) {
                if (item) {
                    var copiesOfComponent = componentsMade[key];
                    if (copiesOfComponent) {
                        _each_object(copiesOfComponent, function (subItem, key) {
                            subItem.notify(changes);
                        });
                    }
                }
            });
        };
    var compileData = function (object, data, optionalFNobj, optionalFNarray) {
        if (_isFunction(data)) {
            var data = data.call(object);
        }
        if (!data) {
            return false;
        }
        //experimental array changes
        var observers = {};
        _each_object(data, function (item, key) {
            defineProp(object, item, key, observers, optionalFNobj, optionalFNarray);
        });
        object.observers = observers;
        return object;
    };
    var compileFaceplate = function (object, config) {
        if (_isString(config.view)) {
            var face = _faceplate[config.view];
            if (face) {
                face(object, object.node);
            }
        }
    };

    var generateMethods = function (object, config) {
        if (_isFunction(config)) {
            var config = config.call(object);
        }
        _each_object(config, function (item, key) {
            if (!key.match(avoid_regex)) {
                if (_isFunction(item)) {
                    object[key] = _bind_call(item, object);
                } else {
                    object[key] = item;
                }
            }
        });
    },
        generateComponentMethods = function (object, config) {
            var funct = function (changes) {
                viewChanges(object, changes);
            },
                watcher = function (changes) {
                    dataAdded(object, changes);
                };
            _observe(object.props, funct);
            _observe(object.data, watcher);
            if (config.componentModel) {
                var mount = config.componentModel.componentMount,
                    unMount = config.componentModel.componentUnMount;
            } else {
                var mount = config.componentMount,
                    unMount = config.componentUnMount;
            }
            if (mount) {
                var mount = _bind.call(mount, object);
            }
            if (unMount) {
                var unMount = _bind.call(unMount, object);
            }
            object.kill = function () {
                componentKill(object, funct, watcher);
                object = null;
                funct = null;
                watcher = null;
                return null;
            };
            object.unMount = function () {
                return componentUnMount(object, unMount);
            };
            object.mount = function (set) {
                return componentMount(object, mount, set);
            };
            object.destroy = function () {
                componentDestroy(object);
                object = null;
                mount = null;
                unMount = null;
                funct = null;
                watcher = null;
            };
            object.set = function (key, value) {
                return componentSet(object, key, value);
            };
            object.notify = function (data) {
                return viewChanges(object, data);
            };
            object.notifySub = function (data, name) {
                return objectViewChanges(object, data, name);
            };
            object.notifyArray = function (data, name) {
                return arrayChanges(object, data, name);
            };
            object.deliver = function () {
                return _deliverChangeRecords(funct);
            };
        };

    var compileNode = function (node, attr, modelName, eventName) {
        node.setAttribute(attr, node.getAttribute(attr).replace(thisRegexReplace, eventName));
        node.setAttribute('data-react', modelName);
    },
        registerNode = function (object, node) {
            var name = node.getAttribute('data-node');
            object.nodes[name] = node;
        },
        compileNodes = function (object, rooNode) {
            var modelName = object.modelName,
                rooNode = rooNode || object.node,
                children = rooNode.childNodes,
                eventName = object.eventName;
            if (children) {
                var registerNodes = rooNode.querySelectorAll('[data-node]');
                if (registerNodes) {
                    _each_array(_toArray(registerNodes), function (item) {
                        registerNode(object, item);
                    });
                }
                _each_array(_eventNames, function (item, i) {
                    var item = 'data-' + item;
                    var registerNodes = rooNode.querySelectorAll('[' + item + ']');
                    if (registerNodes) {
                        _each_array(_toArray(registerNodes), function (node) {
                            compileNode(node, item, modelName, eventName);
                        });
                    }
                });
            }
            if (_isMatch_dom(rooNode, '[data-node]')) {
                registerNode(object, rooNode);
            }
            _each_array(_eventNames, function (item, i) {
                var item = 'data-' + item;
                if (_isMatch_dom(rooNode, '[' + item + ']')) {
                    compileNode(rooNode, item, modelName, eventName);
                }
            });
            var registerNodes = null;
            return object;
        };
    var compileView = function (object, modelName, view_name, template) {
        if (view_name) {
            if (_isFunction(view_name)) {
                var node = view_name.call(object, object);
                if (_isString(node)) {
                    var node = _toDOM(node, 0);
                }
            } else if (_isString(view_name)) {
                var node = _template(view_name);
                if (_isFunction(node)) {
                    var node = _toDOM(node(modelName), 0);
                }
            }
        } else if (template) {
            if (_isString(template)) {
                var node = _toDOM(template, 0);
            } else if (_isFunction(template)) {
                var node = template.call(object, object);
                if (_isString(node)) {
                    var node = _toDOM(node, 0);
                }
            } else {
                if (_document.contains(template)) {
                    var node = template;
                } else {
                    var node = template.cloneNode(true);
                }
            }
        }
        if (node) {
            if (!(node instanceof _HTMLElement)) {
                var wrapNode = _document.createElement('div');
                wrapNode.appendChild(node);
                var node = wrapNode;
            }
            node.setAttribute('data-react-root', modelName, '');
            node.setAttribute('data-react-root-' + modelName, '');
            object.node = node;
        }
        return false;
    };
    //look up the tree
    var _findReact = function (node, name) {
        if (!name) {
            var name = 'data-react-root';
        } else {
            var name = 'data-react-' + name;
        }
        var root = _upTo(node, '[' + name + ']');
        if (root) {
            return _getReact(root);
        }
        return false;
    };

    $.findReact = _findReact;
    //get the observer object that is attached to DOM node
    var _getReact = function (node) {
        var modelName = node.getAttribute('data-react-root') || node.getAttribute('data-react');
        if (modelName) {
            return _model[modelName];
        }
        return false;
    };

    $.getReact = _getReact;
    var listReact = function (rootNode, list, name) {
        var listAdd = function (index) {
            var object = list[index];
            if (!object) {
                return false;
            }
            beforeNth(rootNode, list[index].mount(), index);
        };
        var listMod = function (object, index) {
            object.node.replace(list[index].mount());
            componentDestroy(object);
        };
        var listDestroy = function (array) {
            _each_array(array, function (item, i) {
                componentDestroy(item);
            });
        };
        var listRefresh = function (change) {
            listDestroy(change.oldValue);
            list = change.object[name];
            _each_array(list, function (item, index) {
                listAdd(index);
            });
        };
        var splice = function (change) {
            if (change.removeRange) {
                listDestroy(change.removed);
            }
            if (change.addRange) {
                change.addRange.each(change.index, function (index) {
                    listAdd(index);
                });
            }
        };
        var update = function (change) {
            if (_isNaN(number_object(change.name))) {
                listRefresh(change);
            } else {
                listMod(change.oldValue, change.name);
            }
        };
        var add = function (change) {
            listAdd(number_object(change.name));
        };
        var scope = {
            splice: splice,
            update: update,
            add: add
        };
        var compiled = function (change) {
            scope[change.type](change);
        };
        compiled.kill = function () {
            rootNode = null;
            list = null;
            scope = null;
            compiled = null;
        };
        return compiled;
    };
    $.reactNodeList = listReact;
    //create a component component
    var _reactNode = function (object, node) {
        if (_isString(node)) {
            var node = _toDOM(node, 0);
        }
        compileNodes(object, node);
        return node;
    };

    $.reactNode = _reactNode
    //component list
    var componentsMade = {},
        //keep track of components to avoid clashing
        componentID = 0,
        //batch updating in progress
        asyncChanges = [],
        //amount of changes
        asyncChangesCount = 0,
        //frame request animation
        cancelFrame = false,
        //regex for model event
        thisRegexReplace = /(this)./g,
        //safety words if methods are generated on the model
        avoid_regex = /nodes|name|template|data|mount|unMount|componentModel|model|componentMount|kill|componentUnMount|render|componentData|_|component|props|observers|share|subscribe|unSubscribe/g;
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
        version: 5.8,
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
        function save_body_info() {
            $.cache.bodyWidth = document.body.offsetWidth;
            $.cache.bodyHeight = document.body.offsetHeight;
        };

        _isDocumentReady(function () {
            _body = document.body;
            save_body_info();
        });

    })();
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
    var _eventNames = $.eventNames = [];
    (function () {
        function listen_on_all_events() {
            var event = {
                window: {
                    obj: _window,
                    scroll: {
                        capture: true
                    },
                    resize: {
                        capture: true,
                        fn: function () {
                            if ($debug) {
                                $.log('resize cache updated');
                            }
                            $.cache.wh = {};
                            $.cache.bodyWidth = _body.offsetWidth;
                            $.cache.bodyHeight = _body.offsetHeight;
                            $.cache.windowh = _window.innerHeight;
                            $.cache.windoww = _window.innerWidth;
                            return false;
                        }
                    },
                    message: {
                        capture: true
                    },
                    popstate: 1
                },
                document: {
                    obj: document,
                    load: {
                        capture: true
                    },
                    error: {
                        capture: true
                    },
                    change: {
                        capture: true
                    },
                    loadeddata: {
                        capture: true
                    }
                },
                body: {
                    obj: document.body,
                    keydown: {
                        capture: true,
                    },
                    keyup: {
                        capture: true,
                    },
                    keypress: {
                        capture: true,
                    },
                    input: {
                        capture: true,
                    },
                    paste: {
                        capture: true,
                    },
                    click: {
                        capture: true
                    },
                    mouseover: {
                        capture: true
                    },
                    mouseout: {
                        capture: true
                    },
                    mousedown: {
                        capture: true
                    },
                    mousemove: {
                        capture: true
                    },
                    mouseup: {
                        capture: true
                    },
                    mousewheel: {
                        capture: true
                    },
                    contextmenu: {
                        capture: true
                    },
                    touchstart: {
                        capture: true
                    },
                    touchend: {
                        capture: true
                    },
                    touchmove: {
                        capture: true
                    }
                }
            };
            _each_object(event, function (item) {
                _each_object(item, function (subItem, key) {
                    if (key != 'obj') {
                        _eventNames.push(key);
                    }
                });
            });
            _event(event);
        }
        _isDocumentReady(listen_on_all_events);
    })();
    //prefixes
    $.dir = {};
    //load acid lib info
    if (acid_lib) {
        //get model directory -> save prefix to prefix
        $.dir.js = acid_lib.getAttribute('data-core') || '';
    }
    //create core script and append to head
    _isDocumentReady(function () {
        _ensure('core', function (core) {
            core();
        });
    });
    //clean up
    var acid_lib = null;
})(this);