//add paramaters to a URL
$.addParam = function (url,n) {
	var o = url,
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