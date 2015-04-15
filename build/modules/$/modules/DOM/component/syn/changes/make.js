var makechanges = function () {
	var items = asyncChanges;
	for (var i = 0; i < asyncChangesCount; i++) {
		items[i]();
	}
	asyncChangesCount = 0;
	asyncChanges = [];
	cancelFrame = false;
	return false;
};

var frameCall = function () {
	if (cancelFrame === false) {
		cancelFrame = _RAF(makechanges);
	}
};