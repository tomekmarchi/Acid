var modelAddMethod=function(model,name,method){
	model[name]= _bind_call(method,model);
	return model;
};
var modelRemoveNode=function(model,name){

};
var modelDestroyChildren = function (object) {
		var copiesOfComponent = componentsMade[object.modelName];
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.destroy();
			});
		}
		return object;
	};
var factoryComponents = function (model,change) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return componentsMade[item.modelName];
			});
		}
		return nodes;
	};
var factoryNotifyComponents = function (model,change) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.notify(change);
			});
		}
		return model;
	};
var factoryDestroyChildren = function (model) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.destroyComponents();
			});
		}
		return model;
	};
var factoryKillChildren = function (model) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.killComponents();
			});
		}
		return model;
	};
var factoryMountComponents = function (model) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return modelMountChildren(item);
			});
		}
		return nodes;
	};
var factoryUnMountComponents = function (model) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return modelUnMountChildren(item);
			});
		}
		return nodes;
	};
var factoryComponentsNodes = function (model) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return modelComponentsNodes(item);
			});
		}
		return nodes;
	};
var factoryComponentsNode = function (model) {
		var copiesOfComponent = model.component;
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return modelComponentsNode(item);
			});
		}
		return nodes;
	};

var modelComponentsNode = function (object) {
		var copiesOfComponent = componentsMade[object.modelName],
			nodes = {};
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return item.node;
			});
		}
		return nodes;
	};
var modelComponentsNodes = function (object) {
		var copiesOfComponent = componentsMade[object.modelName],
			nodes = {};
		if (copiesOfComponent) {
			var nodes = _each_object(copiesOfComponent, function (item, key) {
				return item.nodes;
			});
		}
		return nodes;
	};
var modelKillChildren = function (object) {
		var copiesOfComponent = componentsMade[object.modelName];
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.kill();
			});
		}
		return null;
	};
var modelMountChildren = function (object) {
		var copiesOfComponent = componentsMade[object.modelName],
			mounted = {};
		if (copiesOfComponent) {
			var mounted = _each_object(copiesOfComponent, function (item, key) {
				return item.mount();
			});
		}
		return mounted;
	};
var modelUnMountChildren = function (object) {
		var copiesOfComponent = componentsMade[object.modelName],
			unMount = {};
		if (copiesOfComponent) {
			var unMount = _each_object(copiesOfComponent, function (item, key) {
				return item.unMount();
			});
		}
		return unMount;
	};
//kills observer logic and launches an unmount function
var modelKill = function (object, funct, watcher) {
		if(object.root){
			object.root.factoryList[object.factoryID]=null;
		}
		var modelName = object.modelName;
		var copiesOfComponent = componentsMade[modelName];
		if (copiesOfComponent) {
			_each_object(copiesOfComponent, function (item, key) {
				item.destroy();
			});
		}
		componentsMade[modelName] = null;
		_unobserve(object.data, object.observerFN);
		if (object.observers) {
			_each_object(object.observers, function (item) {
				var type = item[0];
				if (isPlainObject(type)) {
					_unobserve(item[0], item[1]);
				} else if (_isArray(type)) {
					_array_unobserve(item[0], item[1]);
				}
			});
		}
		_each_array(object.subscribed, function (item,key) {
			_model[key].subscriber[modelName] = null;
		});
		_each_array(object.subscriber, function (item, key) {
			_model[key].subscribed[modelName] = null;
			_model[key].share[modelName]=null;
		});
		_model[modelName] = null;
		componentID--;
		var object = null;
		return null;
	};
var modelObserverFunctions = function (model, modelName) {
		model.observerFN = function (changes, origin) {
			return synModelFN(changes, modelName, model, origin, 'data', model.data);
		};
		model.subObserverFN = function (subKey) {
			return function (changes) {
				return modelSubChanges(componentsMade[modelName], changes, subKey, objectViewChanges, modelName);
			};
		};
		model.arrayObserverFN = function (subKey) {
			return function (changes) {
				return modelSubChanges(componentsMade[modelName], changes, subKey, arrayChanges, modelName);
			};
		};
		model.privateDataChanges = function (changes) {
			return viewChanges(model, enhanceChange(changes, modelName, false, 'privateData'), modelName, false, model.privateData);
		};
		model.privateSubObserverFN = function (subKey) {
			return function (changes) {
				objectViewChanges(model, changes, subKey);
			};
		};
		model.privateArrayObserverFN = function (subKey) {
			return function (changes) {
				arrayChanges(model, changes, subKey);
			};
		};
	};
var modelDefaultProps = function (model, modelName, subscribeType) {
		model.modelName = modelName;
		model.subscriber = {};
		model.subscribed = {};
		model.observers = {};
		model.subscribeType = subscribeType;
		if (!model.data) {
			model.data = {};
		}
		if (!model.privateData) {
			model.privateData = {};
		}
		if (!model.bind) {
			model.bind = {};
		}
	};
var modelAddShares = function (model, share) {
		model.share = {};
		if (share) {
			var share = (_isArray(share)) ? share : [share];
			_each_array(share, function (item, key) {
				model.share[item] = _model[item];
			});
		}
	};
var modelSubscribeTo = function (model, subscribeTo) {
		if (subscribeTo) {
			var subscribeTo = (_isArray(subscribeTo)) ? subscribeTo : [subscribeTo];
			_each_array(subscribeTo, function (item) {
				model.subscribeTo(item);
			});
		}
	};
var addCustomMethods = function (model) {
		_each_object(model, function (item, key) {
			if (_isFunction(item)) {
				model[key] = _bind_call(item, model);
			}
		});
	};
var modelMounting = function (model, mount, unMount) {
		if (mount) {
			var mount = _bind_call(mount, model);
		}
		if (unMount) {
			var unMount = _bind_call(unMount, model);
		}
		//unmount function
		model.unMount = function () {
			return componentUnMount(model, unMount);
		};
		//mount function
		model.mount = function (set) {
			return componentMount(model, mount, set);
		};
	};
var notifyModel = function (model, modelName) {
		model.notifyModel = function (notifyName, change) {
			return _model[notifyName].notify(change, modelName);
		};
	};
var notifyFactoryComponents = function (model) {
		model.notifyFactoryComponents = function (notifyName, change) {
			_each_object(componentsMade[notifyName], function (item, key) {
				item.notify(change, key);
			});
		};
	};
var modelSubscribeMethods = function (model, modelName, typeOfSubscriber) {
		//factory subscribe
		model.subscribeTo = function (item, privateMode) {
			model.share[item] = _model[item];
			_model[item].subscriber[modelName] = (privateMode) ? 2 : typeOfSubscriber;
			model.subscribed[item] = true;
			return model;
		};
		//factory unsubscribe
		model.unSubscribeTo = function (item) {
			model.share[item] = null;
			_model[item].subscriber[modelName] = null;
			model.subscribed[item] = false;
			return model;
		};
		//factory subscribe
		model.addSubscriber = function (item, typeMode) {
			_model[item].share[modelName] = model;
			_model[item].subscribed[modelName] = typeOfSubscriber;
			model.subscriber[item] = (typeMode) ? typeMode : (_model[item].component) ? 1 : true;
			return model;
		};
		//factory unsubscribe
		model.removeSubscriber = function (item) {
			_model[item].share[modelName] = null;
			_model[item].subscribed[modelName] = null;
			model.subscriber[modelName] = null;
			return model;
		};
	};
var defaultNotifyMethods = function (model, observerFN, privatePropsChanges) {
		//notify the factory and it's components
		model.notify = function (changes, origin) {
			console.log(changes);
			observerFN(changes, origin);
			return model;
		};
		//notify only the factory
		model.privateNotify = function (changes, origin) {
			privatePropsChanges(changes, origin);
			return model;
		};
	};
var defaultEndMethods = function (model) {
		//kill the factory and it's components
		model.kill = function () {
			return modelKill(model);
		};
		//destroy factory and it's components
		model.destroy = function () {
			return componentDestroy(model);
		};
	};
var renderDefaultSynModel = function (model, modelName, subscribeTo, subscribeType) {
		modelObserverFunctions(model, modelName);
		modelDefaultProps(model, modelName, subscribeType);
		var copyData = model.data;
		var copyPrivateData = model.privateData;
		model.data = {};
		model.privateData = {};
		//observe the data
		_observe(model.data, model.observerFN);
		_observe(model.privateData, model.privateDataChanges);
		prepareCompileData(model, model.data, copyData);
		prepareCompileData(model, model.privateData, copyPrivateData);
		notifyModel(model, modelName);
		notifyFactoryComponents(model);
		modelMounting(model, model.mount, model.unMount);
		modelSubscribeMethods(model, modelName, subscribeType);
		defaultEndMethods(model, model.observerFN, model.watcher);
		defaultNotifyMethods(model, model.observerFN, model.privateDataChanges);
		//binding custom methods
		addCustomMethods(model);
		modelAddShares(model, model.share);
		modelSubscribeTo(model, subscribeTo);
	};