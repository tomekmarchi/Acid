//xhr functions
$.xhr = {};

$ext.xhr={
	loaded:function (evt) {
		if($debug){
			evt.log();
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
			var callback = xhr.call;
			if (callback) {
				_async(function(){callback(data)});
			}
		}
		if (status > 200) {
			var callback = xhr.fail;
			if (callback) {
				_async(callback);
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
			var callback = xhr.call,
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


//xhr
$.xhr=function (data) {
	var xhr,
		url = data.url,
		args = data.args || '',
		type = data.type || 'GET',
		content = data.content,
		callback = data.call,
		fail = data.fail,
		abort = data.abort,
		progress = data.progress,
		xhr = new XMLHttpRequest(),
		c = $ext.credits.url,
		a = $ext.xhr.analytics;
	if (isPlainObject(args)) {
		var new_args = '';
		args.
		for (function (item, key) {
			new_args = new_args.addparam(key + '=' + item);
		});
	}
	if (_isArray(args)) {
		var new_args = '';
		args.
		for (function (item, i) {
			new_args = new_args.addparam(item);
		});
	}
	if (new_args) {
		var args = new_args,
			new_args = null;
	}
	if (c) {
		var url = url.addparam(c());
	}
	if (a) {
		a(url, data);
	}
	if (callback) {
		xhr.call = callback;
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
	xhr.open(type, url, true);
	if (!content) {
		if (type == 'GET') {
			var ctype = 'text/plain';
		} else {
			var ctype = "application/x-www-form-urlencoded";
		}
	}
	xhr.setRequestHeader("Content-type", ctype);
	var first = args[0];
	if (first == '?') {
		var args = args.substring(1);
	}
	xhr.send(args);
	var xhr = null,
		url = null,
		args = null,
		type = null,
		content = null,
		callback = null,
		c = null,
		a = null;
	return false;
};

//preload URL
$.fetch=function (url,callback) {
	var xhr, xhr = new XMLHttpRequest();
	if (callback) {
		xhr.call = callback;
	}
	$eventadd(xhr,'load', $ext.preload.loaded);
	xhr.open("GET", url, true);
	xhr.setRequestHeader('Content-Type', 'text/plain');
	xhr.send();
	var xhr = null,
		url = null;
	return false;
};