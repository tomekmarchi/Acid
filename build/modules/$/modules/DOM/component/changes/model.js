var modelSubChanges = function (componentsMade, changes, subKey, func) {
		_each_object(componentsMade, function (item, key) {
			func(item, changes, subKey);
		});
	},
	reactModelFN = function (changes, name, model) {
		if (model.componentModel) {
			viewChanges(model, changes);
		}
		var copiesOfComponent = componentsMade[name];
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.notify(changes);
			});
		}
		_each_object(model.subscribe, function (item, key) {
			if (item) {
				var copiesOfComponent = componentsMade[key];
				if (copiesOfComponent) {
					_each_object(copiesOfComponent, function (subItem, key) {
						subItem.notify(changes);
					});
				}
			}
		});
	};