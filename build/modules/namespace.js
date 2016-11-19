var $ = function(name,data) {
	return (cacheSuper || data? data.import? moduleMethod : modelMethod : get)(name,data || modelMethod);
},
cacheSuper;
//avoid
global.$ = global.ACID = $;

$.super = (method)=>{
	cacheSuper = method;
};
