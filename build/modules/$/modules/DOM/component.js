/*

	HIGHLY EXPERIMENTAL YOU HAVE BEEN WARNED ES6+ES7 only
	WELCOME TO THE DANGER ZONE

	This is advanced web components with ES7+ES6 browser support is limited

*/
var _react = $.react = (function () {
	if (!_observe) {
		return false;
	}
	var //component list
		_componentsMade={},
		//template regex for adding nodes and event data
		regex = /(.*)\[(.*)\]/,
		//keep track of components to avoid clashing
		_componentids = 0,
		//batch updating in progress
		asyncChanges = [],
		asyncChangesCount = 0,
		cancelFrame = false,
		makechanges = function () {
			var items = asyncChanges,
				len = asyncChangesCount;
			for (var i = 0; i < len; i++) {
				items[i]();
			}
			asyncChangesCount = 0;
			asyncChanges = [];
			cancelFrame = false;
			return false;
		},
		//add elements to the batch
		add_to_batch = function (func, change) {
			asyncChanges[asyncChangesCount] = function () {
				func(change);
				change = null;
				func = null;
				return false;
			};
			asyncChangesCount = asyncChangesCount + 1;
			return false;
		},
		//add elements to the batch
		add_to_batch_call = function (object, func, change) {
			asyncChanges[asyncChangesCount] = function () {
				func.call(object, change);
				change = null;
				func = null;
				object = null;
				return false;
			};
			asyncChangesCount = asyncChangesCount + 1;
			return false;
		},
		//changes that happen to level 0 of data
		view_changes = function(model,changes){
			var len = changes.length;
			for (var i = 0; i < len; i++) {
				var change = changes[i],
					method = model[change.name];
				if (method) {
					add_to_batch(method, change);
				}
			}
			if (cancelFrame === false) {
				cancelFrame = _RAF(makechanges);
			}
			return false;
		},
		manual_changes=function (model,changes) {
			var len = changes.length;
			for (var i = 0; i < len; i++) {
				var change = changes[i],
					method = model[change.name];
				if (method) {
					add_to_batch(method, change);
				}
			}
			if (cancelFrame === false) {
				cancelFrame = _RAF(makechanges);
			}
			return false;
		},
		data_added = function (observer_object, changes) {
			var model = observer_object,
				len = changes.length,
				batch = {};
			for (var i = 0; i < len; i++) {
				var change = changes[i],
					name = change.name;
				if(change.type=='add'){
					define_prop(observer_object , change.object[name], name, observer_object.observers);
				}
			}
			return false;
		},
		//changes that happen to level 1 of data
		sub_view_changes = function (model, changes, name) {
			var len = changes.length,
				loose = model[name];
			for (var i = 0; i < len; i++) {
				var change = changes[i],
					method = loose[change.name];
				if (method) {
					add_to_batch_call(object, method, change);
				}
			}
			if (cancelFrame === false) {
				cancelFrame = _RAF(makechanges);
			}
			return false;
		},
		//changes that happen to arrays level 0
		array_changes = function (model, changes, name) {
			var len = changes.length,
				loose = model[name];
			for (var i = 0; i < len; i++) {
				var change = changes[i];
				if (loose) {
					add_to_batch(loose, change);
				}
			}
			if (cancelFrame === false) {
				cancelFrame = _RAF(makechanges);
			}
			return false;
		},
		//kills observer logic and launches an unmount function
		componentKill = function (object, funct , watcher) {
			_componentsMade[object.OGModelName][objectName]=null;
			_unobserve(object.props, funct);
			_unobserve(object.data, watcher);
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
			if (object.modelName) {
				_model[object.modelName] = null;
				_componentids--;
			}
			return null;
		},
		//kills observer logic and launches an unmount function
		modelKill = function (object, funct , watcher) {
			_componentsMade[object._.name]=null;
			_unobserve(object.props, funct);
			_unobserve(object.data, watcher);
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
			if (object.modelName) {
				_model[object.modelName._.name] = null;
			}
			return null;
		},
		//unmount function on component
		componentUnMount = function (object, unMount) {
			if (unMount) {
				unMount(object);
			}
			_removeNode(object.node);
			return object;
		},
		//mount function on component
		componentMount = function (object, mount, set) {
			if (set) {
				componentSet(object, set);
			}
			if (mount) {
				mount.call(object);
			}
			return object.node;
		},
		//remove node plus kill
		componentDestroy = function (object) {
			object.unMount();
			object.kill();
		},
		//custom notify data
		componentNotify = function (object, changes) {
			manual_changes(object, changes);
		},
		//set to data
		componentSet = function (object, key, value) {
			if (value) {
				object.data[key] = value;
			} else if (isPlainObject(key)) {
				_each_object(key, function (item, key) {
					object.data[key] = item;
				});
			}
			return object.data[key];
		},
		//build the initial model
		build_model = function (config) {
			//model name proxy
			if(_isString(config)){
				var ogModelName = config,
					config = _model(ogModelName);
			}else{
				var ogModelName = config.name || config._.name;
			}
			var modelName = ogModelName + (_componentids++);
			//save to models
			_model[modelName] = {
				OGModelName:ogModelName,
				modelName:modelName,
				data: {},
				node: {},
				nodes: {},
				observers: {},
				props:{},
				share:config.data
			};
			if(!_componentsMade[ogModelName]){
				_componentsMade[ogModelName]={};
			}

			_componentsMade[ogModelName][modelName]=_model[modelName];
			return {model:_model[modelName],config:config};
		},
		define_prop= function(object ,item, key, observers, optionalFNobj,optionalFNarray){
			var isAr = _isArray(item),
				object_data = object.data,
				object_props = object.props,
				isOb = isPlainObject(item);

			object_props[key] = item;
			//build the prop
			_defineProperty(object_data, key, {
				get: function () {
					return object_props[key];
				},
				set: function (newValue) {
					var oldValue = object_props[key],
						this_observer = observers[key];
					if (isPlainObject(oldValue)) {
						_unobserve(this_observer[0], this_observer[1]);
					} else if (_isArray(oldValue)) {
						_array_unobserve(this_observer[0], this_observer[1]);
					}
					var oldValue = null,
						this_observer = null;
					object_props[key] = newValue;
					if (_isArray(newValue)) {
						var funct = (optionalFNarray)? optionalFNarray(key) : function (changes) {
								array_changes(object, changes, key);
								return false;
							};
						_array_observe(object_props[key], funct);
					} else if (isPlainObject(newValue)) {
						var funct = (optionalFNobj)? optionalFNobj(key) : function (changes) {
								sub_view_changes(object, changes, key);
								return false;
							};
						_observe(object_props[key], funct);
					}
					if (funct) {
						observers[key] = [object_props[key], funct];
					}
				},
				enumerable: true,
				configurable: true,
				writeable: false
			});
			//start observing
			if (isAr) {
				var funct = (optionalFNarray)? optionalFNarray(key) : function (changes) {
						array_changes(object, changes, key);
						return false;
					};
				_array_observe(object_props[key], funct);
			} else if (isOb) {
				var funct = (optionalFNobj)? optionalFNobj(key) : function (changes) {
						sub_view_changes(object, changes, key);
						return false;
					};
				_observe(object_props[key], funct);
			}
			if (funct) {
				observers[key] = ([object_props[key], funct]);
			}
		},
		compile_data = function (object, data , optionalFNobj,optionalFNarray) {
			if (_isFunction(data)) {
				var data = data.call(object);
			}
			if (!data) {
				return false;
			}
			//experimental array changes
			var observers = {};
			_each_object(data, function (item, key) {
				define_prop(object ,item, key, observers, optionalFNobj,optionalFNarray);
			});
			object.observers = observers;
			return object;
		},
		compile_view = function (object,config) {
			var modelName = object.modelName,
				view_name = config.view,
				template = config.template;
			if (view_name) {
				if (_isFunction(view_name)) {
					var node = view_name.call(object,object);
					if (_isString(node)) {
						var node = _toDOM(node, 0);
					}
				} else if (_isString(view_name)) {
					var node = _template(view_name);
					if (_isFunction(node)) {
						var node = _toDOM(node(modelName), 0);
					}
				}
			} else if (template) {
				if (_isString(template)) {
					var node = _toDOM(template, 0);
				} else if (_isFunction(template)) {
					var node = template.call(object,object);
					if(_isString(node)){
						var node=_toDOM(node, 0);
					}
				} else {
					var node = template;
				}
			}
			if (node instanceof _HTMLElement) {
				node.setAttribute('data-react-root', modelName);
				node.setAttribute('data-react-root-'+modelName,'');
			}
			object.node = node;
			return object;
		},
		this_regex_replace = /(this)./g,
		register_node = function (object, item, rootName) {
			var componentData = item.getAttribute('acid'),
				modelName = object.modelName,
				rootName = rootName || modelName + '.',
				attributes = componentData.match(regex);
			if (!attributes) {
				object.nodes[componentData] = item;
			} else {
				var componentNode = attributes[1],
					attrs = attributes[2].split(';');
				if (componentNode) {
					object.nodes[componentNode] = item;
				}
				if (attrs) {
					_each_array(attrs, function (event) {
						var event_sub = event.split(':');
						item.setAttribute('data-' + event_sub[0], event_sub[1].replace(this_regex_replace, rootName));
					});
				}
			}
			item.setAttribute('data-react', modelName);
			item.removeAttribute('acid');
		},
		compile_nodes = function (object) {
			var register_nodes = object.node.querySelectorAll('[acid]'),
				modelName = object.modelName,
				rootName = modelName + '.';
			if (register_nodes) {
				_each_array(_toArray(register_nodes), function (item) {
					register_node(object, item, rootName);
				});
			}
			if(_isMatch_dom(object.node,'[acid]')){
				register_node(object, object.node, rootName);
			}
			var register_nodes = null;
			return object;
		},
		//some cases this may prove to be faster if methods are required to be cached
		avoid_regex=/name|template|data|mount|unMount|componentModel|componentMount|kill|componentUnMount|render|componentData|_|component|props|observers|share|subscribe|unSubscribe/g,
		generate_methods = function (object, config) {
			if (_isFunction(config)) {
				var config = config.call(object);
			}
			_each_object(config, function (item, key) {
				if (!key.match(avoid_regex)) {
					if (_isFunction(item)) {
						object[key] = _bind_call(item, object);
					} else {
						object[key] = item;
					}
				}
			});
		},
		compile_faceplate = function (object, config) {
			if (_isString(config.view)) {
				var face = _faceplate[config.view];
				if (face) {
					face(object, object.node);
				}
			}
		},
		generate_component_methods = function (object, config) {
			var funct = function (changes) {
					view_changes(object, changes);
				},
				watcher = function (changes) {
					data_added(object, changes);
				};
			_observe(object.props, funct);
			_observe(object.data, watcher);
			if(config.componentModel){
				var mount = config.componentModel.componentMount,
				unMount = config.componentModel.componentUnMount;
			}else{
				var mount = config.componentMount,
					unMount = config.componentUnMount;
			}
			if (mount) {
				var mount = _bind.call(mount, object);
			}
			if (unMount) {
				var unMount = _bind.call(unMount, object);
			}
			object.kill = function () {
				componentKill(object, funct, watcher);
				object = null;
				funct = null;
				return null;
			};
			object.unMount = function () {
				return componentUnMount(object, unMount);
			};
			object.mount = function (set) {
				return componentMount(object, mount, set);
			};
			object.destroy = function () {
				return componentDestroy(object);
			};
			object.set = function (key, value) {
				return componentSet(object, key, value);
			};
			object.notify = function (data) {
				return componentNotify(object, data);
			};
			object.notifySub = function (data) {
				return componentNotify(object, data , funct);
			};
			object.notifyArray = function (data) {
				return componentNotify(object, data , funct);
			};
			object.deliver = function () {
				_deliverChangeRecords(funct);
			};
		},
		//build a view for a node
		build_component = function (config) {
			//uses a porxy for super fast binding plus avoiding mem usage
			if (_isFunction(config)) {
				var config = _bind_call(config);
			}

			var compiled = build_model(config),
				object=compiled.model,
				config=compiled.config;
			//compile initial state
			compile_data(object, config.componentData);
			//compile DOM
			compile_view(object, config);
			//cache nodes and correct actions
			compile_nodes(object);
			//faceplate
			compile_faceplate(object, config);
			//bind methods to new model
			generate_methods(object, config.componentModel || config);
			//generate component specific methods
			generate_component_methods(object, config);
			return object;
		};
	//create a component component
	$.reactNode = function (object, node) {
		if (_isString(node)) {
			var node = _toDOM(node, 0);
		}
		register_node(object, node);
		return node;
	};

	var modelSubChanges=function(_componentsMade,changes,subKey,func){
		_each_object(_componentsMade,function(item,key){
			func(item,changes,subKey);
		});
	},
	reactModelFN=function(changes,name){
		var copiesOfComponent=_componentsMade[name];
		if(copiesOfComponent){
			_each_object(copiesOfComponent,function(item,key){
				item.notify(changes);
			});
		}
		_each_object(model.subscribe,function(item,key){
			if(item){
				var copiesOfComponent=_componentsMade[key];
				if(copiesOfComponent){
					_each_object(copiesOfComponent,function(subItem,key){
						subItem.notify(changes);
					});
				}
			}
		});
	};

	//build the component model
	$.reactModel = function (name, object, lean) {
		var model = _model(name, object, lean),
			subscribeTo=model.subscribe;

		model.render = function () {
			return _react(model);
		};
		if(subscribeTo){
			var subscribeTo=(_isArray(subscribeTo))? subscribeTo : [subscribeTo];
			_each_array(subscribeTo,function(item){
				_model[item].subscribe[name]=1;
			});
		}
		model.subscribe=function(item){
			model.subscribe[item]=1;
		};
		model.unSubscribe=function(item){
			model.subscribe[item]=null;
		};
		var observerFN=function(changes){
			reactModelFN(changes,name);
		};
		var subObserverFN=function(subKey){
			return function(changes){
				modelSubChanges(_componentsMade[name],changes,subKey,sub_view_changes);
			};
		};
		var arrayObserverFN=function(subKey){
			return function(changes){
				modelSubChanges(_componentsMade[name],changes,subKey,array_changes);
			};
		};
		var watcher = function (changes) {
			data_added(object, changes);
		};
		model.props = {};
		if(model.data){
			compile_data(model,model.data,subObserverFN,arrayObserverFN);
		}else{
			model.data = {};
		}
		model.kill = function () {
			modelKill(model, observerFN, watcher);
			model = null;
			observerFN = null;
			return null;
		};
		var mount = model.mount,
			unMount = model.unMount;
		model.unMount = function () {
			return componentUnMount(model, unMount);
		};
		model.mount = function (set) {
			return componentMount(model, mount, set);
		};
		if(model.componentModel){
			generate_methods(model, model);
		}
		_observe(model.props, observerFN);
		_observe(model.data, watcher);
		return model;
	};
	//look up the tree
	$.findReact = function (node, name) {
		if (!name) {
			var name = 'data-react-root';
		} else {
			var name = 'data-react-' + name;
		}
		var root = _upTo(node, '[' + name + ']');
		if (root) {
			return _getReact(root);
		}
		return false;
	};
	//get the observer object that is attached to DOM node
	var _getReact = $.getReact = function (node) {
			var modelName = node.getAttribute('data-react-root') || node.getAttribute('data-react');
			if (modelName) {
				return _model[modelName];
			}
			return false;
		};
	return build_component;
})();