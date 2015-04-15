var checkForObserv = function (model, change, modelData, item, key, observers, optionalFNobj, optionalFNarray) {
		var oldValue = change.oldValue,
			newValue = item,
			oldValueIsPlainObject=isPlainObject(oldValue),
			oldValueIsArray=_isArray(oldValue),
			newValueIsPlainObject=isPlainObject(newValue),
			newValueIsArray=_isArray(newValue);
		if(oldValueIsPlainObject || oldValueIsArray || newValueIsPlainObject || newValueIsArray){
			var	this_observer = observers[key];

			if(this_observer){
				if (isPlainObject(oldValue)) {
					_unobserve(this_observer[0], this_observer[1]);
				} else if (_isArray(oldValue)) {
					_array_unobserve(this_observer[0], this_observer[1]);
				}
			}

			var oldValue = null,
				this_observer = null;

			if (newValueIsArray) {
				var funct = (optionalFNarray) ? optionalFNarray(key) : function (changes) {
						arrayChanges(model, changes, key);
						return false;
					};
				_array_observe(modelData[key], funct);
			} else if (newValueIsPlainObject) {
				var funct = (optionalFNobj) ? optionalFNobj(key) : function (changes) {
						objectViewChanges(model, changes, key);
						return false;
					};
				_observe(modelData[key], funct);
			}

			if (funct) {
				observers[key] = [modelData[key], funct];
			}
		}
	};