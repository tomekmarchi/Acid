var generateMethods = function (object, config) {
		if (_isFunction(config)) {
			var config = config.call(object);
		}
		_each_object(config, function (item, key) {
			if (!object[key]) {
				if (_isFunction(item)) {
					object[key] = _bind_call(item, object);
				} else {
					object[key] = item;
				}
			}
		});
	},
	generateComponentMethods = function (object, config) {
		var modelName= object.modelName;
		var mount = config.mount;
		var unMount = config.unMount;

		object.observerFN = function (changes) {
			viewChanges(object, changes, modelName, false, object.data);
		};

		_observe(object.data, object.observerFN);

		if (mount) {
			var newMount = _bind_call(mount, object);
		}
		if (unMount) {
			var newUnMount = _bind_call(unMount, object);
		}
		object.kill = function () {
			componentKill(object);
			object = null;
			return null;
		};
		object.unMount = function () {
			return componentUnMount(object, newUnMount);
		};
		object.mount = function (set) {
			return componentMount(object, newMount, set);
		};
		object.destroy = function () {
			componentDestroy(object);
			object = null;
			mount = null;
			unMount = null;
			return false;
		};
		object.set = function (key, value) {
			return componentSet(object, key, value);
		};
		object.notify = function (changes,originName) {
			return viewChanges(object, enhanceChange(changes,modelName), modelName , originName,object.data);
		};
		object.notifySub = function (data, name ,originName) {
			return objectViewChanges(object, data, name,modelName ,originName);
		};
		object.notifyArray = function (data, name ,originName) {
			return arrayChanges(object, data, name,modelName ,originName);
		};
	};
