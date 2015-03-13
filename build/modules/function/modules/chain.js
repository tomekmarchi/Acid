function_extend.chain=function(obj){//chain functions together
	var funct=this;

	//add to chain
	if(funct.methods){
		for (var i = 0,keys=_object_keys(obj), len = keys.length; i < len; i++) {
			var key=keys[i];
			var item=obj[key];
			funct.methods[key]=(function(item,key){
				return function(){
					funct.results[key]=item.apply(item,_toArray(arguments));
					return funct.methods;
				};
			})(item,key);
		}
		return funct;
	}

	//create chain
	var	chain=function(){
		chain.results.first=funct.apply(chain,_toArray(arguments));
		return chain.methods;
	};

	//remove chain item
	chain.removeChain=function(obj){
		chain.results[obj]=null;
		return chain;
	};
	//remove all chains
	chain.removeAllChains=function(){
		chain.methods={};
		return chain;
	};
	//return chain values
	chain.values=function(obj){
		if(!obj){
			return chain.results;
		}
		var array=[],
			chain_results=chain.results;
		for (var i = 0,keys=_object_keys(chain_results), len = keys.length; i < len; i++) {
			var key=keys[i];
			var item=chain_results[key];
			array.push(item);
		}
		return array;
	};
	//original function
	chain.original=function(){ return funct.apply(chain,_toArray(arguments))};
	chain.results={};//chain results
	chain.methods={};//chain methods

	//add chained functions
	for (var i = 0,keys=_object_keys(obj), len = keys.length; i < len; i++) {
		var key=keys[i];
		var item=obj[key];
		chain.methods[key]=(function(item,key){
			return function(){
				chain.results[key]=item.apply(item,_toArray(arguments));
				return chain.methods;
			};
		})(item,key);
	}

	//return new chained function
	return chain;
};