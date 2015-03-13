//history object to store older models
var _modelHistory = $.modelHistory= {};

var _model = $.model = (function () {
	//JS model history
	var model_destroy = function (model_name) {
			return _modelHistory[model_name] = _model[model_name] = null;
		},
		modelHistory = function (model_name) {
			return _modelHistory[model_name];
		},
		modelHistoryClear = function (model_name) {
			return _modelHistory[model_name] = null;
		},
		modelHistoryRemove = function (model_name, index) {
			var index = index || _modelHistory[model_name].length - 1;
			return _modelHistory[model_name].splice([index], 1);
		},
		model_save = function (model_name) {
			_modelHistory[model_name].push(_model[model_name].clone());
			return true;
		},
		model_methods = function (model_name) {
			var array = [],
				model = _model[model_name];
			for (var i = 0, keys = _object_keys(model), len = keys.length; i < len; i++) {
				var key = keys[i];
				if (key != '_') {
					array.push(key);
				}
			}
			return array;
		},
		model_copy = function (model_name) {
			return $merge(_model[model_name], {});
		},
		model_clear = function (model_name) {
			return model_name.model({});
		},
		model_restore = function (model_name, method_name) {
			if (!method_name) {
				var restore = _modelHistory[model_name].pop();
				_modelHistory[model_name].push(_model[model_name].clone());
				_model[model_name] = restore;
			} else {
				var restore = _modelHistory[model_name],
					restore_method = _modelHistory[model_name][restore.length - 1];
				_modelHistory[model_name].push(_model[model_name].clone());
				_model[model_name][method_name] = restore_method[method_name];
			}
			var restore = null;
			return _model[model_name];
		};

	//build model functions object
	function model_functions(model_name) {
		var methods = {
			name: model_name,
			destroy : function () {
				model_destroy(model_name);
				model_name = null;
				return null;
			}, save : function () {
				return model_save(model_name);
			}, restore : function (method_name) {
				return model_restore(model_name, method_name);
			}, history : function () {
				return modelHistory(model_name);
			}, historyClear : function () {
				return modelHistoryClear(model_name);
			}, historyRemove : function (index) {
				return modelHistoryRemove(model_name, index);
			}, methods : function (index) {
				return model_methods(model_name);
			}, clear : function (index) {
				return model_methods(model_name);
			}, copy : function (index) {
				return model_clone(model_name);
			}
		};
		return methods;
	}

	//get model -> (bool) option for a lean model meaning no methods will be attached
	var model_function = function (model_name, i, bool) {
			if (_has(model_name, '.')) {
				return _find(model_name, _model);
			} else {
				if (hasValue(i)) {
					_model[model_name] = i;
					var model = _model[model_name];
					if (!bool) {
						model._ = model_functions(model_name);
						_modelHistory[model_name] = [];
					}
					return model;
				}
			}
			return _model[model_name];
		};
	return model_function;
})();