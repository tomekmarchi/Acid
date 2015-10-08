var _model= (() => {
	//get model -> (bool) option for a lean model meaning no methods will be attached
	var model_function = (modelName, object, bool) => {
			if (hasValue(object)) {
				var model = _model[modelName] = object;
				if(_isFunction(model)){
					model=model.bind(model);
				}else if(isPlainObject(model)){
					_each_object(model,(item,key) => {
						if(_isFunction(item)){
							model[key]=item.bind(model);
						}
					});
				}
				model.modelName=modelName;
				return model;
			}else if (_has(modelName, '.')) {
				return _find(modelName, _model);
			}
			return _model[modelName];
		};
	return model_function;
})();

$.model = _model;
