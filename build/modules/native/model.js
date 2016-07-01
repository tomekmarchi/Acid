var modelMethod = $.model = (modelName, object, bool) => {
    if (hasValue(object)) {
        var model = modelMethod[modelName] = object;
        if (isFunction(model)) {
			bindTo(model,model);
        } else if (isPlainObject(model)) {
			bindAll(model,model,true);
        }
		model._={
			name:modelName
		};
        return model;
    } else if (hasDot(modelName)) {
        return find(modelName, modelMethod);
    }
    return modelMethod[modelName];
};
