//export and cache faceplate function
var _faceplate = (function () {
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

$.faceplate = _faceplate;