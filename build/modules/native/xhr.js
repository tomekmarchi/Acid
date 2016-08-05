//xhr functions
var xhrLoaded = (evt) => {
		let xhr = evt.target,
			data = xhr.responseText;
		evt.data = (xhr.getResponseHeader('content-type') === 'application/json') ? jsonWithCatch(data) : data;
	},
	appType = 'application/',
	xhr = $.xhr = (config) => {
		let {
			url,
			data,
			contentType,
			progress
		} = config;
		let xhr = new XMLHttpRequest(),
			jsonData = config.json,
			type = config.type || 'GET',
			newData = emptyString;

		contentType = !contentType? (jsonData)? `${appType}json; charset=utf-8` : (type == 'GET')? 'text/plain' : `${appType}x-www-form-urlencoded` : contentType;

		if (data) {
			each(data, (item, key) => {
				newData = hasValue(item) ? addParam(newData, isString(key) ? key + '=' + item : item) : newData;
			});
		}

		if (type === 'GET' && newData) {
			url = addParam(url, newData);
			newData = emptyString;
		}

		if (jsonData) {
			newData = jsonData;
		}

		xhr.open(type, url, True);
		xhr.setRequestHeader("Content-type", contentType);

		return promise(function (accept, reject) {
			eventAdd(xhr, 'error', reject);
			eventAdd(xhr, 'abort', reject);
			if (progress) {
				eventAdd(xhr, 'progress', progress);
			}
			eventAdd(xhr, 'load', (event) => {
				xhrLoaded(event);
				accept(event);
			});
			xhr.send(newData);
		});
	};
