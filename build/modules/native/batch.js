var _bacthAdd = (function () {
	var batchCancelFrame = false;
	var batchCount = 0;
	var batchChanges = [];
	var _batchLoop = function () {
			var items = batchChanges;
			for (var i = 0; i < batchCount; i++) {
				items[i]();
			}
			batchCount = 0;
			batchChanges = [];
			batchCancelFrame = false;
			return false;
		};
	var _batchCheck = function () {
			if (!batchCancelFrame) {
				batchCancelFrame = _RAF(_batchLoop);
			}
			return false;
		};
	var batchAdd = function (func) {
			batchChanges[batchCount] = func;
			batchCount = batchCount + 1;
			_batchCheck();
			return false;
		};
	return batchAdd;
})();
$.batch = _bacthAdd;
