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