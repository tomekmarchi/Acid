var batchCancelFrame = False,
	batchChanges = [],
	batchLoop = () => {
		eachArray(batchChanges,(item)=>{
			item();
		});
		clearArray(batchChanges);
		batchCancelFrame = False;
	},
	batchCheck = () => {
		if (!batchCancelFrame) {
			batchCancelFrame = raf(batchLoop);
		}
	},
	batchAdd = $.batch = (item) => {
		if(isArray(item)){
			eachArray(item,batchAdd);
		}else{
			batchChanges.push(item);
			batchCheck();
		}
	};
