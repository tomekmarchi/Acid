//replace a phrase (word) with a string from an array of strings
$.replacePhrase = function (w, a) {
	if (_isArray(w)) {
		var w = w.join('|');
	} else if (isPlainObject(w)) {
		var f = this;

		for (var i = 0,keys=_object_keys(w), len = keys.length; i < len; i++) {
			var key=keys[i];
			var f = f.replacephrase(key, w[key]);
		}

		return f;
	} else {
		//replace word regex
		var replace_word = new RegExp('\\b' + w + '\\b', 'gi');
		return this.replace(replace_word, a);
	}
};
//replace a string with a string from an array of strings
$.replaceList = function (a, r) {
	var s = this,
		len = a.length;
	for (var i = 0; i < len; i++) {
		var s = s.replace(a[i], r);
	}
	var a = null,
		r = null;
	return s;
};