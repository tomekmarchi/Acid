var	$eventadd = $.eventAdd = function (obj, name, func, capture) {
		obj.addEventListener(name, func, capture || false);
		return obj;
	},
	//remove event
	$eventremove = $.eventRemove = function (obj, name, func, capture) {
		obj.removeEventListener(name, func, capture || false);
		return obj;
	};
