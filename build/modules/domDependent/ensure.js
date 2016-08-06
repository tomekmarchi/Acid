var ensure = $.ensure =  function(models, funct) {
	importMethod(mapArray(ensureArray(models), (item) => {
		return `${item}.js`;
	}), funct);
};
