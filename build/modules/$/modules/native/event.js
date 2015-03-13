//add event
$.eventAdd = function (obj, name, func, capture) {
	return $eventadd(obj, name, func, capture);
};
//remove event
$.eventRemove = function (obj, name, func, capture) {
	return $eventremove(obj, name, func, capture);
};