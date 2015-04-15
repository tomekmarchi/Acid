var listsyn = function(config, model, helperMode, privateMode) {
	
	if (isPlainObject(model)) {
		var list = config.array,
			varName = config.name,
			every = config.every,
			onChange = config.change,
			onAdd = config.add,
			onUpdate = config.update,
			onSplice = config.splice,
			onRefresh = config.refresh,
			onSaveTo = config.saveTo,
			getJSON = config.getJSON,
			onDestroy = config.destroy,
			mount = config.mount,
			rootNode = config.node;
	}
	var currentFilter=false;

	if (_isString(rootNode)) {
		var rootNode = model.nodes[rootNode];
	}

	if (every) {
		if (_isString(every)) {
			var mount = model[every];
		}
		var every = every.bind(model);
	}

	if (mount) {
		if (_isString(mount)) {
			var mount = model[mount];
		}
		var mount = mount.bind(model);
	}

	if (onChange) {
		if (_isString(onChange)) {
			var onChange = model[onChange];
		}
		var onChange = onChange.bind(model);
	}

	if (onAdd) {
		if (_isString(onChange)) {
			var onChange = model[onChange];
		}
		var onChange = onChange.bind(model);
	}

	if (!list) {
		if (varName) {
			if (privateMode) {
				var list = model.privateData[varName];
			} else {
				var list = model.data[varName];
			}
		}
	} else if (_isString(list)) {
		var varName = list;
		if (privateMode) {
			var list = model.privateData[varName];
		} else {
			var list = model.data[varName];
		}
	}

	var listReindex = function() {
		_each_array(list, function(item, i) {
			item.index = i;
		});
	};

	var listAdd = function(index) {
		var object = list[index];
		if (!object) {
			return false;
		}
		list[index].index = index;
		if(currentFilter){
			if(!currentFilter(list[index])){
				return;
			}
		}
		beforeNth(rootNode, list[index].mount(), index);
	};
	var listMod = function(object, index) {
		list[index].index = index;
		object.node.replace(list[index].mount());
		componentDestroy(object);
	};
	var listDestroy = function(array) {
		if (array) {
			_each_array(array, function(item, i) {
				componentDestroy(item);
			});
		}
		if (onDestroy) {
			onDestroy();
		}
	};
	var listRefresh = function(change) {
		listDestroy(change.oldValue);
		list = change.object[varName];
		_each_array(list, function(item, index) {
			listAdd(index);
		});
		if (onRefresh) {
			onRefresh(change);
		}
	};
	var splice = function(change) {
		if (change.removeRange) {
			listDestroy(change.removed);
			var removed = true;
		}
		if (change.addRange) {
			change.addRange.each(change.index, function(index) {
				listAdd(index);
			});
		}
		if (removed) {
			listReindex();
		}
		if (onSplice) {
			onSplice(change);
		}
	};
	var update = function(change) {
		if (_isNaN(number_object(change.name))) {
			listRefresh(change);
		} else {
			listMod(change.oldValue, change.name);
		}
		if (onUpdate) {
			onUpdate(change);
		}
	};
	var add = function(change) {
		if (change.isArray) {
			listAdd(number_object(change.name));
		} else {
			listRefresh(change);
		}
		if (onAdd) {
			onAdd(change);
		}
	};
	var scope = {
		splice: splice,
		update: update,
		add: add
	};
	var compiled = function(change) {
		scope[change.type](change);
		if (every) {
			every(change);
		}
		if (onChange) {
			onChange(change);
		}
	};
	compiled.kill = function() {
		rootNode = null;
		list = null;
		scope = null;
		varName = null;
		every = null;
		add = null;
		update = null;
		splice = null;
		listRefresh = null;
		listDestroy = null;
		listMod = null;
		listAdd = null;
		mount = null;
		change = null;
		compiled = null;
		model[varName]=null;
	};
	compiled.removeIndex = function(startObject) {
		if (isPlainObject(startObject)) {
			var itemIndex = startObject.index;
			if (itemIndex) {
				list.splice(itemIndex, 1);
			}
		} else if (_isArray(startObject)) {
			_each_array(startObject, function(item, i) {
				compiled.removeIndex(item);
			});
		}
		listReindex();
	};
	compiled.node = rootNode;
	compiled.remove = function(funct){
		eachArrayFromRight(list, function(item, index) {
			if(funct(item)){
				list.splice(index, 1);
			}
		});
		listReindex();
	};
	compiled.removeFilter = function(){
		currentFilter=false;
		 _each_array(list, function(item, index) {
			_append(rootNode,item.mount());
		});
	};
	var setFilter = compiled.setFilter = function(filterVar) {
		if (_isString(filterVar)) {
			var negativeIsTrue=false;
			if(_has(filterVar,'!')){
				var filterVar= filterVar.substring(1);
				var negativeIsTrue=true;
			}
			if(negativeIsTrue){
				var filter = function(item,index) {
					if (!item.data[filterVar]) {
						return true;
					}
					return false;
				};
			}else{
				var filter = function(item,index) {
					if (item.data[filterVar]) {
						return true;
					}
					return false;
				};
			}
		}else if(_isFunction(filterVar)){
			var filter=filterVar;
		}
		_each_array(list, function(item, index) {
			if(filter(item,index)){
				_append(rootNode,item.mount());
			}else{
				if(item.mounted){
					item.unMount();
				}
			}
		});
		currentFilter=filter;
	};
	compiled.refreshFilter = function(){
		if(currentFilter){
			setFilter(currentFilter);
		}
	};
	if (mount) {
		mount();
	}
	if (every) {
		every();
	}
	return model[varName] = compiled;
};
$.reactList = listsyn;