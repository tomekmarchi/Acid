//extend object prototype
var _extend = function(item,firstSource){
	return $merge(item.prototype,firstSource);
};

$.extend = _extend
