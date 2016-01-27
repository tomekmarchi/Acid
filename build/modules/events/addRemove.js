var	eventAdd = $.eventAdd = function (obj, name, func, capture) {
		obj.addEventListener(name, func, capture || false);
		return obj;
	},
	//remove event
	eventRemove = $.eventRemove = function (obj, name, func, capture) {
		obj.removeEventListener(name, func, capture || false);
		return obj;
	};
