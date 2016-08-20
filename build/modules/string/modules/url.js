//add paramaters to a URL
var addParam = $.addParam = (url, newItem) => {
	if (getLength(url) && has(url, questionMarkString)) {
		if (arrayLastItem(url) === questionMarkString) {
			url = url + newItem;
		} else {
			url = url + andString + newItem;
		}
	} else {
		url = questionMarkString + newItem;
	}
	return url;
};
