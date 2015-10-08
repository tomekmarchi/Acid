var _model= (function () {
	//get model -> (bool) option for a lean model meaning no methods will be attached
	var model_function = function (model_name, object, bool) {
			if (_has(model_name, '.')) {
				return _find(model_name, _model);
			} else {
				if (hasValue(object)) {
					_model[model_name] = object;
					var model = _model[model_name];
					if(_isFunction(model)){
						_model[model_name]=model.bind(_model[model_name]);
					}else if(isPlainObject(model)){
						_each_object(model,function(item,key){
							if(_isFunction(item)){
								_model[model_name][key]=item.bind(model);
							}
						});
					}
					model.modelName=model_name;
					return model;
				}
			}
			return _model[model_name];
		};
	return model_function;
})();

$.model = _model;
