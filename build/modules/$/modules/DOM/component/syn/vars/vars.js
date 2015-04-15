//component list
var componentsMade = {},
	//keep track of components to avoid clashing
	componentID = 0,
	//batch updating in progress
	asyncChanges = [],
	//amount of changes
	asyncChangesCount = 0,
	//frame request animation
	cancelFrame = false,
	//regex for model event
	thisRegexReplace = /(this)./g;