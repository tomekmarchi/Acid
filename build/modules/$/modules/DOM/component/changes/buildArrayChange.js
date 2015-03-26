//enhanced array changes
var buildArrayChange = function (change) {
	if (change.type === 'splice') {
		var removed = change.removed.length;
		var data = {
			addRange: (change.addedCount) ? change.index + change.addedCount : 0,
			removeRange: (removed) ? change.index + removed : 0,
			removeLength: (removed) ? removed : 0,
			index: change.index,
			addedCount: change.addedCount,
			object: change.object,
			removed: change.removed,
			type: change.type
		};
	} else if (change.type === 'update') {
		var data = {
			name: change.name,
			object: change.object,
			oldValue: change.oldValue,
			type: change.type
		};
	}else if (change.type === 'add') {
		var data = {
			name: change.name,
			object: change.object,
			type: change.type
		};
	}
	var change=null;
	return data;
};
