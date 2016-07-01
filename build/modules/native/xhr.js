//xhr functions
var xhrLoaded = (evt) => {
        var xhr = evt.target,
            data = xhr.responseText,
            callback = xhr.success;

        if (xhr.getResponseHeader('content-type') === 'application/json') {
            data = jsonWithCatch(data);
        }
        if (callback) {
            callback(evt, data, xhr);
        }
        eventRemove(xhr, 'load', xhrLoaded);
    },
    xhr = $.xhr = (config) => {
        var xhr = new XMLHttpRequest(),
            url = config.url,
            data = config.data || False,
            jsonData = config.json || False,
            type = config.type || 'GET',
            contentType = config.contentType,
            success = config.success,
            fail = config.fail,
            abort = config.abort,
            progress = config.progress,
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

        if (fail) {
            eventAdd(xhr, 'error', fail);
        }
        if (progress) {
            eventAdd(xhr, 'progress', progress);
        }
        if (abort) {
            eventAdd(xhr, 'abort', abort);
        }
        if (success) {
            xhr.success = success;
        }

        eventAdd(xhr, 'load', xhrLoaded);

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
        xhr.send(newData);
        return xhr;
    };
