var returnWraped = (method, flipTrue) => {
	return function () {
		var functs = [];

		function wrapped() {
			var args = toArray(arguments);
			return mapArray(functs, (item) => {
				return apply(item, wrapped, args);
			});
		}
		objectAssign(wrapped, {
			list: functs,
			add: function () {
				var args = flatten(toArray(arguments));
				method(functs, (flipTrue) ? args.reverse() : args);
			},
		});
		wrapped.add(toArray(arguments));
		return wrapped;
	};
};
var wrapCall = $.wrap = returnWraped(pushApply),
	wrapBefore = $.wrapBefore = returnWraped(unShiftApply, true);
