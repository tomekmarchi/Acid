//xhr functions
$.xhr = {};
extendAcidConfig.xhr = {};

var xhrLoaded = (evt) => {
        if (debugMode) {
            consoleNative(evt);
        }
        var xhr = evt.target,
            status = xhr.status,
            type = xhr.getResponseHeader('content-type'),
            data = xhr.responseText,
            callback;
        if (status === 200) {
            if (type === 'application/json') {
                data = jsonWithCatch(data);
            }
            callback = xhr.callback;
        } else if (status > 200) {
            callback = xhr.fail;
        }
		if (callback) {
			callback(evt);
		}
        eventRemove(xhr, 'load', xhrLoaded);
    },
	xhr = $.xhr = (config) => {
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
	        credits = extendAcidConfig.credits.url,
	        analytics = extendAcidConfig.xhr.analytics,
	        newData = emptyString;

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
	            eachObject(data, function(item, key) {
	                if (hasValue(item)) {
	                    newData = addParam(newData, key + '=' + item);
	                }
	            });
	        } else if (isArray(data)) {
	            eachArray(data, function(item, key) {
	                if (hasValue(item)) {
	                    newData = addParam(newData, item);
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
	        xhr.fail = fail;
	        eventAdd(xhr, 'error', fail);
	    }
	    if (progress) {
	        eventAdd(xhr, 'progress', progress);
	    }
	    if (abort) {
	        eventAdd(xhr, 'abort', abort);
	    }

	    eventAdd(xhr, 'load', xhrLoaded);

	    if (type === 'GET') {
	        if (newData) {
				url = addParam(url,newData);
	            newData = emptyString;
	        }
	    }

	    if (credits) {
			url = addParam(url,credits());
	    }

	    if (jsonData) {
	        newData = jsonData;
	    }

	    xhr.open(type, url, true);
	    xhr.setRequestHeader("Content-type", contentType);
	    xhr.send(newData);
	    return xhr;
	};
