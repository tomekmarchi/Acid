$.chain=function(funct,obj){//chain functions together

	//add to chain
	if(funct.methods){
		mapObject(obj,(item,key)=>{
			funct.methods[key]=(function(item,key){
				return function(){
					funct.results[key]=apply(item,item,toArray(arguments));
					return funct.methods;
				};
			})(item,key);
		});
		return funct;
	}

	//create chain
	var	chain=function(){
		chain.results.first=apply(funct,chain,toArray(arguments));
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
		mapObject(chain_results,(item,key)=>{
			pushArray(array,item);
		});
		return array;
	};
	//original function
	chain.original=function(){ return apply(funct,chain,toArray(arguments))};
	chain.results={};//chain results
	chain.methods={};//chain methods

	//add chained functions
	mapObject(obj,(item,key)=>{
		chain.methods[key]=(function(item,key){
			return function(){
				chain.results[key]=apply(item,item,toArray(arguments));
				return chain.methods;
			};
		})(item,key);
	});
	//return new chained function
	return chain;
};
