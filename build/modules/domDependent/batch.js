var batchCancelFrame = False,
	batchChanges = [],
	batchLoop = () => {
		eachArray(batchChanges,ifInvoke);
		clearArray(batchChanges);
		batchCancelFrame = False;
	},
	batchAdd = $.batch = (item) => {
		pushApply(batchChanges,ensureArray(item));
		if (!batchCancelFrame) {
			batchCancelFrame = raf(batchLoop);
		}
	};
