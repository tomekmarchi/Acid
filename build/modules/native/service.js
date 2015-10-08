/*
		A service is an object that holds a set of processes that
		can be added over time.
		Then this service can run said processes.
*/

var acidService = (name) => {
		return acidService[name];
	},
	acidCreateService = (name, optionalObjects) => {
		var service = acidService[name] = {},
			serviceProcess = service.process = optionalObjects || {},
			serviceRun = service.run = (optionalNameOfProcess) => {
				if (optionalNameOfProcess) {
					serviceProcess[optionalNameOfProcess]();
				} else {
					_each_object(serviceProcess, (item) => {
						item();
					});
				}
			},
			serviceAdd = service.add = (object) => {
				_each_object(object, (item, key) => {
					serviceProcess[key] = item.bind(service);
				});
			},
			serviceEnd = service.end = () => {
				service = null;
				serviceProcess = null;
				serviceRun = null;
				serviceEnd = null;
				serviceAdd = null;
				service[name] = null;
			};
		_each_object(service, (item, key) => {
			if (_isFunction(item)) {
				service[key] = item.bind(service);
			}
		});
		_each_object(serviceProcess, (item, key) => {
			if (_isFunction(item)) {
				serviceProcess[key] = item.bind(service);
			}
		});
	};

$.createService = acidCreateService;
$.service = acidService;
