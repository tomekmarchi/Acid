var generateLoopSingleArgReturnSelfCloneNodeSecondArg = function(funct) {
		return  function(node){
			eachArray(this, function(item) {
				funct(item, node.cloneNode(true));
			});
			return this;
		};
	},
	generateLoopSingleArgReturnSelfCloneNodeFirstArg = function(funct) {
		return  function(node) {
			eachArray(this, function(item) {
				funct(item.cloneNode(true), node);
			});
			return this;
		};
	},
	generateLoopSingleArgReturnSelf = (funct) => {
		return function(node) {
			eachArray(this, function(item) {
				funct(node, item);
			});
			return this;
		};
	},
	generateLoopSingleArgReturnData = (funct) => {
		return  function(arg){
			return eachArray(this, function(item) {
				return funct(item, arg);
			});
		};
	},
	generateLoopReturnData = (funct) => {
		return function(node) {
			return eachArray(this, function(item) {
				return funct(item);
			});
		};
	},
	//not as fast but works for extra methods
	generateLoopReturnDataMultipleArgs = function(funct) {
		return function(){
			var newArgs,
				args = toArray(arguments);
			return eachArray(this, function(item) {
				newArgs = stringSliceCall(args,0);
				unShiftArray(newArgs,item);
				return apply(funct,null, args);
			});
		};
	},
	generateLoopForNthMethods = function(funct) {
		return function(newChild, position){
			return eachArray(this, (item) => {
				return funct(item, newChild.cloneNode(true), position);
			});
		};
	},
	//live list operations meaning nodes can be removed from DOM and the loop is internal
	listOnly = {
		each: function(funct) {
			eachArray(this,funct);
			return this;
		},
		eachRaw: function(funct) {
			eachRaw(this,funct);
			return this;
		},
		eachDo: function(funct) {
			eachDo(this,funct);
			return this;
		},
		eachWhileTrue: function(funct) {
			eachWhile(this,funct);
			return this;
		},
		eachWhileFalse: function(funct) {
			whileFalse(this,funct);
			return this;
		},
		eachFromRight: function(funct) {
			eachArrayFromRight(this,funct);
			return this;
		},
		lastIn: function() {
			return lastItem(this);
		},
		firstIn: function() {
			return this[0];
		},
		toArray: function() {
			return toArray(this);
		},
		replace: generateLoopSingleArgReturnSelfCloneNodeSecondArg(replaceChild),
		scrollIt: generateLoopReturnDataMultipleArgs(scrollIt),
		prepend: generateLoopSingleArgReturnSelfCloneNodeSecondArg(prepend),
		prependTo: generateLoopSingleArgReturnSelf(prepend),
		ap: generateLoopSingleArgReturnSelfCloneNodeSecondArg(append),
		apTo: generateLoopSingleArgReturnSelf(append),
		after: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertAfter), //$('a').after($('.after'))
		before: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertBefore), //$('a').before($('.before'))
		afterNth: generateLoopForNthMethods(afterNth),
		beforeNth: generateLoopForNthMethods(beforeNth),
		removeRange: generateLoopReturnDataMultipleArgs(removeNodesInRange),
		attr: generateLoopReturnDataMultipleArgs(nodeAttribute),
		plugInto: generateLoopReturnDataMultipleArgs(plugInto)
	};
	zipUpTo(listOnly, nodeMethodsValues, nodeMethodsKeys, generateLoopSingleArgReturnData);
	zipUpTo(listOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateLoopReturnData);
