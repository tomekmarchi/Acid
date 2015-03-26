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