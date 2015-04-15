//xhr functions
$.xhr = {};

$ext.xhr={
	loaded:function (evt) {
		if($debug){
			console.log(evt);
		}
		var xhr = evt.target;
		$eventremove(xhr,'load', $ext.xhr.loaded);
		var status = evt.target.status;
		if (status == 200) {
			var type = xhr.getResponseHeader('content-type'),
				data = xhr.responseText;
			if (type == 'application/json') {
				if (data) {
					var data = json.parse(data);
				}
			}
			var callback = xhr.callback;
			if (callback) {
				_async(function(){callback(data,evt)});
			}
		}
		if (status > 200) {
			var callback = xhr.fail;
			if (callback) {
				_async(function(){callback(evt)});
			}
		}
		return false;
	}
};

$ext.preload={
	loaded:function (evt) {
		var xhr = evt.target;
		$eventremove(xhr,'load', $ext.preload.loaded);
		var status = evt.target.status;
		if (status == 200) {
			var callback = xhr.callback,
				data = xhr.responseText;
			if (callback) {
				_async(function(){callback(data)});
			}
		}
		var xhr = null,
			evt = null,
			callback = null;
		return false;
	},
	error:function (evt) {
		var xhr = evt.target;
		$eventremove(xhr,'error', $ext.preload.error);
		var status = evt.target.status;
		var fail = xhr.fail;
		if (fail) {
			_async(function(){fail(status)});
		}
		var xhr = null,
			evt = null;
		return false;
	}
};

function xhrPostParam(url,add){
	if(url.length>0){
		var url=url+'&';
	}
	var url=url+add;
	return url;
}

//xhr
$.xhr=function (config) {
	var xhr = new XMLHttpRequest(),
		url = config.url,
		data = config.data || '',
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
		if (type == 'GET') {
			var contentType = 'text/plain';
		} else {
			var contentType = "application/x-www-form-urlencoded";
		}
	}

	if (isPlainObject(data)) {
		_each_object(data,function (item, key) {
			newData = xhrPostParam(newData,key + '=' + item);
		});
	}else if (_isArray(data)) {
		_each_array(data,function (item, key) {
			newData = xhrPostParam(newData,item);
		});
	}

	if (analytics) {
		analytics(url, newData);
	}

	if (callback) {
		xhr.callback = callback;
	}

	if (fail) {
		xhr.fail = fail;
		$eventadd(xhr,'error', $ext.xhr.error);
	}
	if (progress) {
		xhr.progress = progress;
		$eventadd(xhr,'progress', $ext.xhr.progress);
	}
	if (abort) {
		xhr.abort = abort;
		$eventadd(xhr,'abort', $ext.xhr.abort);
	}
	$eventadd(xhr,'load', $ext.xhr.loaded);

	if(type=='GET'){
		if(!_has(url,'?')){
			var url=url+'?'+newData;
		}else{
			var url=url+'&'+newData;
		}
		var newData='';
	}

	if (credits) {
		if(!_has(url,'?')){
			var url=url+'?'+credits();
		}else{
			var url=url+'&'+credits();
		}
	}

	xhr.open(type, url, true);
	xhr.setRequestHeader("Content-type", contentType);
	xhr.send(newData);
	var xhr = null,
		url = null,
		data = null,
		type = null,
		contentType = null,
		callback = null,
		credits = null,
		analytics = null;
	return false;
};

//quick GET URL
$.fetch=function (url,callback) {
	var xhr, xhr = new XMLHttpRequest();
	if (callback) {
		xhr.callback = callback;
	}
	$eventadd(xhr,'load', $ext.preload.loaded);
	xhr.open("GET", url, true);
	xhr.setRequestHeader('Content-Type', 'text/plain');
	xhr.send();
	var xhr = null,
		url = null;
	return false;
};