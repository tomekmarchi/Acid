var _bacthAdd = (() => {
	var batchCancelFrame = false,
		batchCount = 0,
		batchChanges = [],
		_batchLoop = () => {
			var items = batchChanges;
			for (var i = 0; i < batchCount; i++) {
				items[i]();
			}
			batchCount = 0;
			batchChanges = [];
			batchCancelFrame = false;
		},
		_batchCheck = () => {
			if (!batchCancelFrame) {
				batchCancelFrame = raf(_batchLoop);
			}
		},
		batchAdd = (func) => {
			batchChanges[batchCount] = func;
			batchCount = batchCount + 1;
			_batchCheck();
		};
	return batchAdd;
})();
$.batch = _bacthAdd;
