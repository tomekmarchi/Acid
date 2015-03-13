//extend prototype for acid libs
var extend = function (obj, ext, wrap) {
		for (var i = 0,keys=_object_keys(obj), len = keys.length; i < len; i++) {
			var key=keys[i];
			var item = obj[key];
			if (item) {
				if (wrap) {
					var item = wrap(item);
				}
				ext[acid_lib_prefix + key] = item;
			}
		}
	},
	//merge objects
	$merge = (_object_assign)? function (object, source) {
		return _object_assign(object,source);
	} : function (object,source) {
			var copy = source || {};
			for (var i = 0, keys = _object_keys(object), len = keys.length; i < len; i++) {
				var key = keys[i],
					item = object[key];
				if (hasValue(item)) {
					copy[key] = (isPlainObject(item))? $merge(item) : item;
				}
			}
			return copy;
	};