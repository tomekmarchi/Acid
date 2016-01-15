var generateLoopSingleArgReturnSelfCloneNodeSecondArg = function(funct) {
		return (node) => {
			_each_array(this, function(item) {
				funct(item, node.cloneNode(true));
			});
			return this;
		};
	},
	generateLoopSingleArgReturnSelfCloneNodeFirstArg = function(funct) {
		return (node) => {
			_each_array(this, function(item) {
				funct(item.cloneNode(true), node);
			});
			return this;
		};
	},
	generateLoopSingleArgReturnSelf = (funct) => {
		return (node) => {
			_each_array(this, function(item) {
				funct(node, item);
			});
			return this;
		};
	},
	generateLoopSingleArgReturnData = (funct) => {
		return (arg) => {
			return _each_array(this, function(item) {
				return funct(item, arg);
			});
		};
	},
	generateLoopReturnData = (funct) => {
		return (node) => {
			return _each_array(this, function(item) {
				return funct(item);
			});
		};
	},
	//not as fast but works for extra methods
	generateLoopReturnDataMultipleArgs = function(funct) {
		return function(){
			var newArgs,
				args = _toArray(arguments);
			return _each_array(this, function(item) {
				newArgs = args.slice(0);
				newArgs.unShift(item);
				return funct.apply(null, args);
			});
		};
	},
	generateLoopForNthMethods = function(funct) {
		return (new_child, position) => {
			return _each_array(this, (item) => {
				return funct(item, new_child.cloneNode(true), position);
			});
		};
	},
	//live list operations meaning nodes can be removed from DOM and the loop is internal
	listOnly = {
		each: function(funct) {
			_each_array(this,funct);
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
			_eachWhile(this,funct);
			return this;
		},
		eachWhileFalse: function(funct) {
			_whileFalse(this,funct);
			return this;
		},
		eachFromRight: function(funct) {
			eachArrayFromRight(this,funct);
			return this;
		},
		lastIn: function() {
			return collectionLastItem(this);
		},
		firstIn: function() {
			return this[0];
		},
		toArray: function() {
			return _toArray(this);
		},
		replace: generateLoopSingleArgReturnSelfCloneNodeSecondArg(replaceChild),
		scrollIt: generateLoopReturnDataMultipleArgs(scrollIt),
		prepend: generateLoopSingleArgReturnSelfCloneNodeSecondArg(prepend),
		prependTo: generateLoopSingleArgReturnSelf(prepend),
		ap: generateLoopSingleArgReturnSelfCloneNodeSecondArg(_append),
		apTo: generateLoopSingleArgReturnSelf(_append),
		after: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertAfter), //$('a').after($('.after'))
		before: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertBefore), //$('a').before($('.before'))
		afterNth: generateLoopForNthMethods(afterNth),
		beforeNth: generateLoopForNthMethods(beforeNth),
		removeRange: generateLoopReturnDataMultipleArgs(_removeRange),
		attr: generateLoopReturnDataMultipleArgs(_attr),
		plugInto: generateLoopReturnDataMultipleArgs(_plugInto)
	};
	zipUpTo(listOnly, nodeMethodsValues, nodeMethodsKeys, generateNodeMethod);
