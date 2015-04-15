var	$eventadd = function (obj, name, func, capture) {
		obj.addEventListener(name, func, capture || false);
		return obj;
	},
	//remove event
	$eventremove = function (obj, name, func, capture) {
		obj.removeEventListener(name, func, capture || false);
		return obj;
	};