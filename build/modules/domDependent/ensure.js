var ensure = $.ensure =  function(models, funct) {
	importMethod(mapArray((isString(models)) ? [models] : models, (item) => {
		return `${item}.js`;
	}), funct);
};
