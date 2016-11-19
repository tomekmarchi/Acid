var modelMethod = $.model = (modelName, object) => {
	if (hasValue(object)) {
		modelMethod[modelName] = assignDeep(isFunction(object) ? bindTo(object, object) : bindAll(object, object, true), {
			_: {
				name: modelName
			}
		});
	}
	return get(modelName, modelMethod);
};
