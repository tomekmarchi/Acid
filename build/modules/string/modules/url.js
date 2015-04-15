//add paramaters to a URL
string_extend.addParam = function (n) {
	var o = this,
		len = o.length;
	if (len > 0) {
		var last = o[len-1];
		if (o.indexOf('?') != -1) {
			if (last != '?') {
				return o + '&' + n;
			} else if (last == '?') {
				return o + n;
			}
			return o + '&' + n;
		} else {
			return o + '?' + n
		}
	} else {
		return '?' + n
	}
};