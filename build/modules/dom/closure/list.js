var generateLoopSingleArgReturnSelfCloneNodeSecondArg = function(funct) {
		var generated = function(node) {
			var self = this;
			_each_array(self, function(item) {
				funct(item, node.cloneNode(true));
			});
			return self;
		};
		return generated;
	},
	generateLoopSingleArgReturnSelfCloneNodeFirstArg = function(funct) {
		var generated = function(node) {
			var self = this;
			_each_array(self, function(item) {
				funct(item.cloneNode(true), node);
			});
			return self;
		};
		return generated;
	},
	generateLoopSingleArgReturnSelfNodeAsSecondArg = function(funct) {
		var generated = function(node) {
			var self = this;
			_each_array(self, function(item) {
				funct(node, item);
			});
			return self;
		};
		return generated;
	},
	generateLoopSingleArgReturnSelf = function(funct) {
		var generated = function(node) {
			var self = this;
			_each_array(self, function(item) {
				funct(node, item);
			});
			return self;
		};
		return generated;
	},
	generateLoopSingleArgReturnData = function(funct) {
		var generated = function(arg) {
			return _each_array(this, function(item) {
				return funct(item, arg);
			});
		};
		return generated;
	},
	generateLoopReturnData = function(funct) {
		var generated = function(node) {
			return _each_array(this, function(item) {
				return funct(item);
			});
		};
		return generated;
	},
	//not as fast but works for extra methods
	generateLoopReturnDataMultipleArgs = function(funct) {
		var generated = function() {
			var newArgs,
				args = _toArray(arguments);
			return _each_array(this, function(item) {
				newArgs = args.slice(0);
				newArgs.unShift(item);
				return funct.apply(null, args);
			});
		};
		return generated;
	},
	generateLoopForNthMethods = function(funct) {
		var generated = function(new_child, position) {
			return _each_array(this, function(item) {
				return funct(item, new_child.cloneNode(true), position);
			});
		};
		return generated;
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
			var node_list = this;
			return node_list[node_list.length - 1];
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
		prependTo: generateLoopSingleArgReturnSelfNodeAsSecondArg(prepend),
		ap: generateLoopSingleArgReturnSelfCloneNodeSecondArg(_append),
		apTo: generateLoopSingleArgReturnSelfNodeAsSecondArg(_append),
		after: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertAfter), //$('a').after($('.after'))
		before: generateLoopSingleArgReturnSelfCloneNodeSecondArg(insertBefore), //$('a').before($('.before'))
		afterNth: generateLoopForNthMethods(afterNth),
		beforeNth: generateLoopForNthMethods(beforeNth),
		removeRange: generateLoopReturnDataMultipleArgs(_removeRange),
		attr: generateLoopReturnDataMultipleArgs(_attr),
		plugInto: generateLoopReturnDataMultipleArgs(_plugInto)
	};
	zipUpTo(listOnly, nodeOnlyMethodsSingleArgReturn, nodeOnlyMethodNamesSingleArgReturn, generateLoopSingleArgReturnData);
	zipUpTo(listOnly, nodeOnlyMethodsReturn, nodeOnlyMethodNamesReturn, generateLoopReturnData);
