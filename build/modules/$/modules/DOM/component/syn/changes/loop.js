//changes that happen to level 0 of data
var viewChanges = function (model, changes, modelName , originName, modelData) {
	var rawChanges=model.rawChanges;
	if (rawChanges) {
		if(change.invoked){
			change.softOrigin.push(modelName);
			change.invoked.push(modelName+'.rawChanges');
		}
		return batchAdd(rawChanges, changes);
	}

	var hasSync=false;
	var hasSyncPrivate=false;

	if(originName){
		if(modelName!=originName){
			var hasSync = model.sync;
			var hasSyncPrivate = model.syncPrivate;
		}
	}
	var	allChanges= model.allChanges;
	var acceptOnly = model.acceptOnly;
	_each_array(changes, function (change) {
		var changeName=change.name;
		if (change.type == 'add' || change.type == 'update') {
			if(!originName){
				checkForObserv(model,change, modelData, change.object[changeName], changeName , model.observers);
			}
		}
		if (hasSync) {
			return model.data[changeName]=change.object[changeName];
		}
		if (hasSyncPrivate) {
			return model.dataPrivate[changeName]=change.object[changeName];
		}
		if(allChanges){
			if(change.invoked){
				change.softOrigin.push(modelName);
				change.invoked.push(modelName+'.allChanges');
			}
			return batchAdd(allChanges, change);
		}
		var method = model.bind[changeName];
		if(method){
			_each_object(method,function(item){
				batchAdd(item, change);
			});
		}
		var method = model[changeName];
		if (method) {
			if(change.invoked){
				change.softOrigin.push(modelName);
				change.invoked.push(modelName+'.'+changeName);
			}
			if(acceptOnly){
				if(!acceptOnly[changeName]){
					return;
				}
			}
			return batchAdd(method, change);
		}
	});
	return frameCall();
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
