var modelSubChanges = function (componentsMade, changes, subKey, func, name) {
		_each_object(componentsMade, function (item, key) {
			func(item, changes, subKey);
		});
	},
	synModelFN = function (changes, name, model, origin, propName, modelData) {
		var changes = enhanceChange(changes, name, origin, propName);
		viewChanges(model, changes, name, origin, modelData);
		var copiesOfComponent = componentsMade[name];
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				if(item){
					item.notify(changes, name);
				}
			});
		}
		_each_object(model.subscriber, function (item, key) {
			if (item === true) {
				var copiesOfComponent = componentsMade[key];
				if (copiesOfComponent) {
					_each_object(copiesOfComponent, function (subItem, subkey) {
						if(subItem){
							subItem.notify(changes, subkey);
						}
					});
				}
			} else if (item === 1) {
				synModelFN(changes, key, _model[key], origin || model.modelName, propName, modelData);
			} else if (item === 2) {
				if(_model[key]){
					_model[key].privateNotify(changes, origin);
				}
			}
		});
	};