var $ = (string,object) => {
	return find(string, object || modelMethod);
};
//avoid
global.$ = global.ACID = $;
