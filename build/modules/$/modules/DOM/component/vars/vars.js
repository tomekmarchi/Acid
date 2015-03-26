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
	thisRegexReplace = /(this)./g,
	//safety words if methods are generated on the model
	avoid_regex = /nodes|name|template|data|mount|unMount|componentModel|model|componentMount|kill|componentUnMount|render|componentData|_|component|props|observers|share|subscribe|unSubscribe/g;