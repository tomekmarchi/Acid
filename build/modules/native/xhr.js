//xhr functions
$.xhr = {};
$ext.xhr = {};

var xhrLoaded = (evt) => {
	if ($debug) {
		console.log(evt);
	}
	var xhr = evt.target,
		status = evt.target.status,
		type = xhr.getResponseHeader('content-type'),
		data = xhr.responseText,
		callback;
	if (status === 200) {
		if (type === 'application/json') {
			data = jsonWithCatch(data);
		}
		callback = xhr.callback;
		if (callback) {
			_async(function() {
				callback(data, evt);
				data=null;
				evt=null;
			});
		}
	} else if (status > 200) {
		callback = xhr.fail;
		if (callback) {
			_async(function() {
				callback(evt);
				evt=null;
			});
		}
	}
	$eventremove(xhr, 'load', xhrLoaded);
	xhr=null;
	status=null;
};

function xhrPostParam(url, add) {
	if (url.length > 0) {
		var url = url + '&';
	}
	var url = url + add;
	return url;
}

//xhr
$.xhr = function(config) {
	var xhr = new XMLHttpRequest(),
		url = config.url,
		data = config.data || false,
		jsonData = config.json || false,
		type = config.type || 'GET',
		contentType = config.contentType,
		callback = config.callback,
		success = config.success,
		fail = config.fail,
		abort = config.abort,
		progress = config.progress,
		credits = $ext.credits.url,
		analytics = $ext.xhr.analytics,
		newData = '';

	if (!contentType) {
		if (jsonData) {
			contentType = 'application/json; charset=utf-8';
		} else if (type == 'GET') {
			contentType = 'text/plain';
		} else {
			contentType = "application/x-www-form-urlencoded";
		}
	}

	if (data) {
		if (isPlainObject(data)) {
			_each_object(data, function(item, key) {
				if (hasValue(item)) {
					newData = xhrPostParam(newData, key + '=' + item);
				}
			});
		} else if (_isArray(data)) {
			_each_array(data, function(item, key) {
				if (hasValue(item)) {
					newData = xhrPostParam(newData, item);
				}
			});
		}
	}

	if (analytics) {
		analytics(url, newData);
	}

	if (callback) {
		xhr.callback = callback;
	}

	if (fail) {
		xhr.fail= fail;
		$eventadd(xhr, 'error', fail);
	}
	if (progress) {
		$eventadd(xhr, 'progress', progress);
	}
	if (abort) {
		$eventadd(xhr, 'abort', abort);
	}

	$eventadd(xhr, 'load', xhrLoaded);

	if (type == 'GET') {
		if (newData) {
			if (!_has(url, '?')) {
				url = url + '?' + newData;
			} else {
				url = url + '&' + newData;
			}
			newData = '';
		}
	}

	if (credits) {
		if (!_has(url, '?')) {
			url = url + '?' + credits();
		} else {
			url = url + '&' + credits();
		}
	}

	if (jsonData) {
		newData = jsonData;
	}

	xhr.open(type, url, true);
	xhr.setRequestHeader("Content-type", contentType);
	xhr.send(newData);
	xhr = null,
		url = null,
		data = null,
		type = null,
		contentType = null,
		callback = null,
		credits = null,
		analytics = null;
	return false;
};
