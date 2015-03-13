//set/get/compile template
var _template = $.template = function (string, data) {
		//store template
		if (_isString(data)) {
			var node = _template[string] = _toDOM(data,0);
			var node = null;
			return false;
		} else if (isDom(data) || _isFunction(data)) {
			_template[string] = data;
			return false;
		}
		var template = _template[string];
		if (isDom(template)) {
			var template = template.cloneNode(true);
			if (data) {
				_faceplateDOM(template, data, string);
			}
		} else if (_isFunction(template)) {
			if (data) {
				var template = _toDOM(template(data),0);
			}
		}
		return template;
	};