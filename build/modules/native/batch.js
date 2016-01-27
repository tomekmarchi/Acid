var batchCancelFrame = false,
	batchCount = 0,
	batchChanges = [],
	batchLoop = () => {
		eachArray(batchChanges,(item)=>{
			item();
		});
		batchCount = 0;
		batchChanges = [];
		batchCancelFrame = false;
	},
	batchCheck = () => {
		if (!batchCancelFrame) {
			batchCancelFrame = raf(batchLoop);
		}
	},
	batchAdd = $.batch = (func) => {
		batchChanges[batchCount] = func;
		batchCount = batchCount + 1;
		batchCheck();
	};
