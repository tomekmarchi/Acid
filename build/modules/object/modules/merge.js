//merge object
$.merge = object_extend.merge = function (firstSource) {
	return $merge(this, firstSource);
};