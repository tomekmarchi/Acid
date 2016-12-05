var $ = function(name,data) {
	return (cacheSuper? cacheSuper : data && data.import? moduleMethod : modelMethod)(name,data);
},
cacheSuper;
//avoid
global.$ = global.ACID = $;

$.super = (method)=>{
	cacheSuper = method;
};
