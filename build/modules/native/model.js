var modelMethod = $.model = (modelName, object, bool) => {
    if (hasValue(object)) {
        var model = modelMethod[modelName] = object;
        if (isFunction(model)) {
            model = model.bind(model);
        } else if (isPlainObject(model)) {
            eachObject(model, (item, key) => {
                if (isFunction(item)) {
                    model[key] = item.bind(model);
                }
            });
        }
        model.modelName = modelName;
        return model;
    } else if (hasDot(modelName)) {
        return find(modelName, modelMethod);
    }
    return modelMethod[modelName];
};
