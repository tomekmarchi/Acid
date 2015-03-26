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
		_observe(object.data, watcher, ['add']);
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
