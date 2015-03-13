//raw URL encode
string_extend.rawURLDecode = function () {
	return decodeURIComponent((this + '').replace(/%(?![\da-f]{2})/gi, function () {
		return '%25';
	}));
};
//html entities
string_extend.htmlEntities = function () {
	return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};
//decode then htmlentities
string_extend.sanitize = function () {
	return string_extend.htmlent.call(string_extend.rawurldecode.call(this));
};
//decode URI Component
string_extend.duc = function () {
	return decodeURIComponent(this);
};
//encode URI Component
string_extend.euc = function () {
	return encodeURIComponent(this);
};