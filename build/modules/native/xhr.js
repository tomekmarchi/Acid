//xhr functions
var xhrLoaded = (evt) => {
		let xhr = evt.target,
			data = xhr.responseText;
		evt.data = (xhr.getResponseHeader('content-type') === 'application/json') ? jsonWithCatch(data) : data;
	},
	appType = 'application/',
	xhr = $.xhr = (config) => {
		let xhr = new XMLHttpRequest(),
			url = config.url,
			data = config.data,
			jsonData = config.json,
			type = config.type || 'GET',
			contentType = config.contentType,
			progress = config.progress,
			newData = emptyString;

		if (!contentType) {
			if (jsonData) {
				contentType = appType + 'json; charset=utf-8';
			} else if (type == 'GET') {
				contentType = 'text/plain';
			} else {
				contentType = appType + 'x-www-form-urlencoded';
			}
		}

		if (data) {
			each(data, (item, key) => {
				newData = hasValue(item)? addParam(newData, isString(key) ? key + '=' + item : item) : newData;
			});
		}

		if (type === 'GET') {
			if (newData) {
				url = addParam(url, newData);
				newData = emptyString;
			}
		}

		if (jsonData) {
			newData = jsonData;
		}

		xhr.open(type, url, True);
		xhr.setRequestHeader("Content-type", contentType);

		return contract(function (accept, reject) {
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
