	/*
			This is for object checking is or isnot
			*/
	//checking
	var obj_strng_gen = function(name) {
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

	    is_same_obj_gen = function(type) {
	        return function(obj) {
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
	    isNative = function(obj) {
	        return (hasValue(obj)) ? obj.toString().toLowerCase().indexOf('native') != -1 : false;
	    },
	    //hasval fn returns true or false
	    hasValue = function(n) {
	        return n !== undefined && n !== null;
	    },
	    //is undefined
	    isUndefined = function(obj) {
	        return obj === undefined;
	    },
	    //is NaN
	    _isNaN = (isNaN) ? isNaN : number_object.isNaN,
	    //is int
	    _isInt = (number_object.isInteger) ? number_object.isInteger : function(num) {
	        if (num % 1 === 0) {
	            return true;
	        }
	        return false;
	    },
	    //is equal to null
	    isNull = function(obj) {
	        return obj === null;
	    },
	    isFinite = isFinite,
	    //check if object is array returns true or false
	    _isArray = function(object) {
	        return object instanceof _array
	    },
	    //checks to see if is string returns true or false
	    _isString = function(obj) {
	        return (hasValue(obj)) ? obj.constructor === _string : false;
	    },
	    //checks to see if is number returns true or false
	    isNumber = function(obj) {
	        return (hasValue(obj)) ? obj.constructor == number_object : false;
	    },
	    //is plain object returns true or false
	    isPlainObject = function(obj) {
	        return (hasValue(obj)) ? obj.constructor.toString().trim().slice(9, 16) === 'Object(' : false;
	    },
	    //checks to see if object is a function returns true or false
	    _isFunction = function(obj) {
	        return (hasValue(obj)) ? obj instanceof _function : false;
	    },
	    //checks to see if object is a HTMLCollection returns true or false
	    _isHTMLCollection = function(obj) {
	        return (hasValue(obj)) ? obj.constructor.name == "HTMLCollection" : false;
	    },
	    //checks to see if object is a NodeList returns true or false
	    _isNodeList = function(obj) {
	        return (hasValue(obj)) ? obj.constructor.name == "NodeList" : false;
	    },
	    //searching a string for a string returns true or false
	    _has = function(string, search) {
	        var value,
	            loopValue;
	        if (!_isString(search)) {
	            _each(search, function(item, key) {
	                loopValue = string.indexOf(item) != -1;
	                if (loopValue) {
	                    value = loopValue;
	                }
	            });
	        } else {
	            value = string.indexOf(search) != -1;
	        }
	        return value;
	    },
	    //does object have length
	    islength = function(obj) {
	        return !obj.length;
	    },
	    isEmpty = function(obj) {
	        if (hasValue(obj)) {
	            var len = islength(obj);
	            if (islength(obj)) {
	                return !len;
	            }
	            return !_object.keys(obj).length;
	        }
	        return false;
	    },
	    isFileCSS = function(item) {
	        return isCSSRegex.test(item);
	    },
	    isFileJSON = function(item) {
	        return isJSONRegex.test(item);
	    },
	    isFileJS = function(item) {
	        return isJSRegex.test(item) && !isFileJSON(item);
	    },
	    hasDot = function(item) {
	        return hasDotRegex.test(item);
	    },
	    getModelRootName = function(string) {
	        return string.split('.')[0];
	    },
	    getModelProperty = function(string) {
	        return _arrayLastItem(string.split('/'))[0];
	    },
	    getModelName = function(string) {
	        var splitIt = string.split('/');
	        return _find(splitIt[splitIt.length - 1].split('.js')[0], _model);
	    };

//export all checking functions
$.isArray = _isArray;
$.isString = _isString;
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
$.isHTMLCollection = _isHTMLCollection;
$.isNodeList = _isNodeList;
$.isFileCSS = isFileCSS;
$.isFileJSON = isFileJSON;
$.isFileJS = isFileJS;
$.hasDot = hasDot;
$.getModelProperty = getModelProperty;
$.getModelRootName = getModelRootName;
$.hasValue = hasValue;
$.has = _has;
