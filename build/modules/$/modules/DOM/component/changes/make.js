var makechanges = function () {
	var items = asyncChanges,
		len = asyncChangesCount;
	for (var i = 0; i < len; i++) {
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