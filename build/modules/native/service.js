/*
		A service is an object that holds a set of processes that
		can be added over time.
		Then this service can run said processes.
*/

var acidService = $.service = (name) => {
		return acidService[name];
	},
	acidCreateService = $.createService = (name, optionalObjects) => {
		var service = acidService[name] = {},
			serviceProcess = service.process = optionalObjects || {},
			serviceRun = service.run = (optionalNameOfProcess) => {
				if (optionalNameOfProcess) {
					serviceProcess[optionalNameOfProcess]();
				} else {
					eachObject(serviceProcess, (item) => {
						item();
					});
				}
			},
			serviceAdd = service.add = (object) => {
				eachObject(object, (item, key) => {
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
		eachObject(service, (item, key) => {
			if (isFunction(item)) {
				service[key] = item.bind(service);
			}
		});
		eachObject(serviceProcess, (item, key) => {
			if (isFunction(item)) {
				serviceProcess[key] = item.bind(service);
			}
		});
	};
