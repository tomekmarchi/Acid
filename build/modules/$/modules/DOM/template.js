//set/get/compile template
var _template = function (string, data) {
		if(isPlainObject(string) && !data){
			var data=string.data;
			var modelName=string.modelName || string.name;
			var modelLean=hasValue(string.modelLean)? string.modelLean : true;
			var string=string.name;
		}
		//store template
		if (_isString(data)) {
			var node = _template[string] = _toDOM(data,0);
			var node = null;
		} else if (isDom(data) || _isFunction(data)) {
			_template[string] = data;
		}
		if(modelName){
			var templateModel=function(){
				return _template(string);
			};
			templateModel.data=function(){
				return _model[modelName];
			};
			templateModel.templateName=string;
			return _model(modelName,templateModel,modelLean);
		}
		var template = _template[string];

		if(data){
			return template;
		}
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

$.template = _template;