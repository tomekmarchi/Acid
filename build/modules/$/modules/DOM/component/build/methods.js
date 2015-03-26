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