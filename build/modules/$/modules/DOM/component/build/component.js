//build a view for a node
var _react = function (config, data) {
		//uses a porxy for super fast binding plus avoiding mem usage
		if (_isFunction(config)) {
			var config = _bind_call(config);
		}
		var compiled = build_model(config),
			object = compiled.model,
			config = compiled.config;
		//compile initial state
		compileData(object, config.componentData);
		//compile DOM
		compileView(object, object.modelName, config.view, config.template);
		//cache nodes and correct actions
		compileNodes(object);
		//faceplate
		compileFaceplate(object, config);
		//bind methods to new model
		generateMethods(object, config.componentModel || config);
		//generate component specific methods
		generateComponentMethods(object, config);
		if (data) {
			object.set(data);
		}
		return object;
	};