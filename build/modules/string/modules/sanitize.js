//raw URL encode
string_extend.rawURLDecode = function () {
	return decodeURIComponent((this + '').replace(rawURLDecode_regex, function () {
		return '%25';
	}));
};
//html entities
string_extend.htmlEntities = function () {
	return this.replace(and_regex, '&amp;').replace(less_than_regex, '&lt;').replace(more_than_regex, '&gt;').replace(double_quote_regex, '&quot;').replace(slash_regex, '&quot;');
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

//encode URI Component
string_extend.unescapeHTML = function () {
	var empty=_empty_node_div;
	empty.innerHTML=this;
	return empty.textContent;
};