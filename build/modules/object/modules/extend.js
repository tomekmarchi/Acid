//extend object prototype
$.extend = object_extend.extend = function(firstSource){
	return $merge(this.prototype,firstSource);
};