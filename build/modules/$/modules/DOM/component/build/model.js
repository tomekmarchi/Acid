//build the component model
var _reactModel = function (name, object, lean) {
	var model = _model(name, object, lean),
		subscribeTo = model.subscribe;
	if (!model.nodes) {
		model.nodes = {};
	}
	compileView(model, name, model.modelView, model.modelTemplate);
	model.render = function (data) {
		return _react(model, data);
	};
	if (subscribeTo) {
		var subscribeTo = (_isArray(subscribeTo)) ? subscribeTo : [subscribeTo];
		_each_array(subscribeTo, function (item) {
			_model[item].subscribe[name] = 1;
		});
	}
	model.subscribe = function (item) {
		model.subscribe[item] = 1;
	};
	model.unSubscribe = function (item) {
		model.subscribe[item] = null;
	};
	var observerFN = function (changes) {
			reactModelFN(changes, name, model);
		};
	var subObserverFN = function (subKey) {
			return function (changes) {
				modelSubChanges(componentsMade[name], changes, subKey, objectViewChanges);
			};
		};
	var arrayObserverFN = function (subKey) {
			return function (changes) {
				modelSubChanges(componentsMade[name], changes, subKey, arrayChanges);
			};
		};
	var watcher = function (changes) {
			dataAdded(model, changes);
		};
	model.props = {};
	if (model.data) {
		compileData(model, model.data, subObserverFN, arrayObserverFN);
	} else {
		model.data = {};
	}
	model.kill = function () {
		modelKill(model, observerFN, watcher);
		model = null;
		observerFN = null;
		return null;
	};
	var mount = model.mount,
		unMount = model.unMount;
	model.unMount = function () {
		return componentUnMount(model, unMount);
	};
	model.mount = function (set) {
		return componentMount(model, mount, set);
	};
	if (model.model) {
		generateMethods(model, model.model);
	}else if (model.componentModel) {
		generateMethods(model, model);
	}
	_observe(model.props, observerFN);
	_observe(model.data, watcher);
	return model;
};

$.reactModel= _reactModel;