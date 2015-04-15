//add elements to the batch
var batchAdd = function (func, change) {
	asyncChanges[asyncChangesCount] = function () {
		func(change);
		change = null;
		func = null;
		return false;
	};
	asyncChangesCount = asyncChangesCount + 1;
	return false;
},
//add elements to the batch
batchAddCall = function (object, func, change) {
	asyncChanges[asyncChangesCount] = function () {
		func.call(object, change);
		change = null;
		func = null;
		object = null;
		return false;
	};
	asyncChangesCount = asyncChangesCount + 1;
	return false;
};