var $ = function() {
	return apply(($.super || modelMethod),arguments);
};
//avoid
global.$ = global.ACID = $;
