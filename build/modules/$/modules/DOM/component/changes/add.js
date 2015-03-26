var dataAdded = function (model, changes) {
	var len = changes.length,
		batch = {};
	for (var i = 0; i < len; i++) {
		var change = changes[i],
			name = change.name;
		if (change.type == 'add') {
			defineProp(model, change.object[name], name, model.observers);
		}
	}
	var model=null,changes=null;
	return false;
};