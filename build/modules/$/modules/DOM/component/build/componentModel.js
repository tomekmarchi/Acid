//build the initial model
var build_model = function (config) {
	//model name proxy
	if (_isString(config)) {
		var ogModelName = config,
			config = _model(ogModelName);
	} else {
		var ogModelName = config.name || config._.name;
	}
	var modelName = ogModelName + (componentID++);
	//save to models
	_model[modelName] = {
		OGModelName: ogModelName,
		modelName: modelName,
		eventName: modelName + '.',
		data: {},
		node: {},
		nodes: {},
		observers: {},
		props: {},
		share: config.data
	};
	if (!componentsMade[ogModelName]) {
		componentsMade[ogModelName] = {};
	}
	componentsMade[ogModelName][modelName] = _model[modelName];
	return {
		model: _model[modelName],
		config: config
	};
};