//a tag DOM element used to parse URL
var $atag = _document.createElement('a');
//parse a URL
$.linkParse = function (self) {
	var tag = $atag;
	tag.href = self;
	var data = {
		url: self,
		protocol: tag.protocol,
		hostname: tag.hostname,
		port: tag.port,
		path: (tag.pathname[0] != '/') ? '/' + tag.pathname : tag.pathname,
		pathroot: (tag.pathname[0] != '/') ? tag.pathname.split('/')[0] : tag.pathname.split('/')[1],
		search: tag.search,
		hash: tag.hash,
		host: tag.host
	};
	var root = data.hostname.split('.'),
		len = root.length,
		root = root[len - 2] + '.' + root[len - 1],
		len = null;
	if (data.protocol == 'http:') {
		data.ssl = false;
	} else {
		data.ssl = true;
	}
	data.domain = root;
	var tag = null;
	return data;
};