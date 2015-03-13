var _service = $.service = (function () {
	var checkservice = function (root, obj, items) {
			if (_isFunction(obj)) {
				return obj.apply(root, items);
			} else {
				var r = [];
				for (var i = 0,keys=_object_keys(obj), len = keys.length; i < len; i++) {
					var key=keys[i];
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