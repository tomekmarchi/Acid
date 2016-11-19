var defineMethod = $.define = (data, otherData) => {
	data = setupModelData(data, otherData);
	var wrapFunct = function() {
		var freshArgs = mapArray(data.import, orderArgumentObjects);
		if (getLength(arguments)) {
			pushApply(freshArgs, arguments);
		}
		return apply(data.invoke, wrapFunct, freshArgs);
	};
	return setUpModel(wrapFunct, data);
};
