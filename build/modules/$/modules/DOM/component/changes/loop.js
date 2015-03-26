//changes that happen to level 0 of data
var viewChanges = function (model, changes) {
	_each_array(changes, function (change) {
		var method = model[change.name];
		if (method) {
			batchAdd(method, change);
		}
	});
	frameCall();
	return false;
};
//changes that happen to level 1 of data
var objectViewChanges = function (model, changes, name) {
	var loose = model[name];
	_each_array(changes, function (change) {
		var method = loose[change.name];
		if (method) {
			batchAddCall(object, method, change);
		}
	});
	frameCall();
	return false;
};
//changes that happen to arrays level 0
var arrayChanges = function (model, changes, name) {
	var loose = model[name];
	_each_array(changes, function (change) {
		if (loose) {
			batchAdd(loose, buildArrayChange(change));
		}
	});
	frameCall();
	return false;
};
