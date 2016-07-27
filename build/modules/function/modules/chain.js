let addChain = (chain, addToChain) => {
	each(addToChain, (item, key) => {
		chain.methods[key] = function () {
			var args = toArray(arguments);
			unShiftArray(args, chain.value);
			apply(item, args);
			return chain.methods;
		};
	});
	return chain;
};
$.chain = function (methods) {
	var chain = (value) => {
		chain.value = value;
		return chain.methods;
	};
	chain.methods = {};
	chain.add = (addToChain) => {
		return addChain(chain, addToChain);
	};
	chain.done = () => {
		var value = chain.value;
		chain.value = null;
		return value;
	};
	chain.add(methods);
	return chain;
};
