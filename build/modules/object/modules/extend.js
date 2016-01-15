//extend object prototype
var _extend = $.extend = function(item,firstSource){
	return _object_assign(item.prototype,firstSource);
};
