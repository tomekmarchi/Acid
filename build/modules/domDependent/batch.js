var batchCancelFrame = False,
	batchChanges = [],
	batchLoop = () => {
		eachArray(batchChanges,item);
		clearArray(batchChanges);
		batchCancelFrame = False;
	},
	batchAdd = $.batch = (item) => {
		eachArray(ensureArray(item) ,batchAdd);
		if (!batchCancelFrame) {
			batchCancelFrame = raf(batchLoop);
		}
	};
