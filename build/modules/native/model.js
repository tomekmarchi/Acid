var modelMethod = $.model = (modelName, object) => {
	if (hasValue(object)) {
		modelMethod[modelName] = assignDeep(isFunction(object) ? object : bindAll(object, object, true), {
			_: {
				name: modelName
			}
		});
		modelMethod[modelName]
	}
	return get(modelName, modelMethod);
};
