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
		view_changes = function (observer_object, changes) {
			var model = observer_object.model,
				len = changes.length,
				batch = {};
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
			var model = observer_object.model,
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
		sub_view_changes = function (object, changes, name) {
			var model = object.model,
				len = changes.length,
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
		array_changes = function (observer_object, changes, name) {
			var model = observer_object.model,
				len = changes.length,
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
			_componentsMade[object.OGModelName][object.modelName]=null;
			_unobserve(object.hidden, funct);
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
			_unobserve(object.hidden, funct);
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
				mount(object);
			}
			return object.node;
		},
		//remove node plus kill
		componentDestroy = function (object) {
			object.unMount();
			object.kill();
		},
		//custom notify data
		componentNotify = function (object, changes ,fn) {
			view_changes(object, changes);
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
		build_model = function (object, config) {
			//model name proxy
			if(_isString(config)){
				var ogModelName = config,
					config = _model(ogModelName);
			}else{
				var ogModelName = config.name || config._.name;
			}
			var modelName = ogModelName + (_componentids++);
			//model name save
			object.modelName = modelName;
			//original model name
			object.OGModelName = ogModelName;
			//save to models
			_model[modelName] = {};

			if(config.data){
				object.share=config.data;
			}

			if(!_componentsMade[ogModelName]){
				_componentsMade[ogModelName]={};
			}

			_componentsMade[ogModelName][modelName]=object;
			return config;
		},
		define_prop= function(object ,item, key, observers, optionalFNobj,optionalFNarray){
			object.hidden[key] = item;
			var isAr = _isArray(item),
				isOb = isPlainObject(item);
			//build the prop
			_defineProperty(object.data, key, {
				get: function () {
					return object.hidden[key];
				},
				set: function (newValue) {
					var oldValue = object.hidden[key],
						this_observer = observers[key];
					if (isPlainObject(oldValue)) {
						_unobserve(this_observer[0], this_observer[1]);
					} else if (_isArray(oldValue)) {
						_array_unobserve(this_observer[0], this_observer[1]);
					}
					var oldValue = null,
						this_observer = null;
					object.hidden[key] = newValue;
					if (_isArray(newValue)) {
						var funct = (optionalFNarray)? optionalFNarray(key) : function (changes) {
								array_changes(object, changes, key);
								return false;
							};
						_array_observe(object.data[key], funct);
					} else if (isPlainObject(newValue)) {
						var funct = (optionalFNobj)? optionalFNobj(key) : function (changes) {
								sub_view_changes(object, changes, key);
								return false;
							};
						_observe(object.data[key], funct);
					}
					if (funct) {
						observers[key] = [object.data[key], funct];
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
				_array_observe(object.data[key], funct);
			} else if (isOb) {
				var funct = (optionalFNobj)? optionalFNobj(key) : function (changes) {
						sub_view_changes(object, changes, key);
						return false;
					};
				_observe(object.data[key], funct);
			}
			if (funct) {
				observers[key] = ([object.data[key], funct]);
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
					var node = view_name(modelName);
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
					var node = _toDOM(template.call(object), 0);
				} else {
					var node = template;
				}
			}
			if (node instanceof _HTMLElement) {
				node.setAttribute('data-component-root', modelName);
				node.setAttribute('data-component-root-'+modelName,'');
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
			item.setAttribute('data-component', modelName);
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
		avoid_regex=/name|template|data|mount|unMount|model|componentMount|kill|componentUnMount|render|componentData|_|component|hidden|component|observers|share|subscribe|unSubscribe/g,
		generate_methods = function (object, config) {
			if (config.model) {
				if (isPlainObject(config.model)) {
					var config = config.model;
				} else if (_isFunction(config.model)) {
					var config = config.model.call(object);
					console.log(config);
				}
			}
			_each_object(config, function (item, key) {
				if (!key.match(avoid_regex)) {
					if (_isFunction(item)) {
						object.model[key] = _bind_call(item, object);
					} else {
						object.model[key] = item;
					}
				}
			});
			_defineProperty(object.model, 'component', {
				get: function () {
					return object;
				},
				set:function(){
					return false;
				},
				enumerable: true,
				configurable: true,
				writeable: false
			});
			_model[object.modelName] = object.model;
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
				},
				observer = _observe(object.hidden, funct),
				observer_add_data = _observe(object.data, watcher),
				mount = config.componentMount,
				unMount = config.componentUnMount;
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
				return componentNotify(object, data , funct);
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
			var object = {
				data: {},
				model: {},
				node: {},
				nodes: {},
				observers: {}
			};
			_defineProperty(object, 'hidden', {
				enumerable: true,
				configurable: false,
				writable: false,
				value: {}
			});
			//uses a porxy for super fast binding plus avoiding mem usage
			if (_isFunction(config)) {
				var config = _bind_call(object, config);
			}

			var config = build_model(object, config);
			//compile initial state
			compile_data(object, config.componentData);
			//compile DOM
			compile_view(object, config);
			//cache nodes and correct actions
			compile_nodes(object);
			//faceplate
			compile_faceplate(object, config);
			//bind methods to new model
			generate_methods(object, config);
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
		var subObserverFN=function(subKey){
			return function(changes){
				_each_object(_componentsMade[name],function(item,key){
					sub_view_changes(item,changes,subKey);
				});
			};
		};
		var arrayObserverFN=function(subKey){
			return function(changes){
				_each_object(_componentsMade[name],function(item,key){
					array_changes(item,changes,subKey);
				});
			};
		};
		var watcher = function (changes) {
			data_added(object, changes);
		};
		model.hidden = {};
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
		_observe(model.hidden, observerFN);
		_observe(model.data, watcher);
		return model;
	};
	//look up the tree
	$.findReact = function (node, name) {
		if (!name) {
			var name = 'data-component-root';
		} else {
			var name = 'data-component-' + name;
		}
		var root = _upTo(node, '[' + name + ']');
		if (root) {
			return _getReact(root);
		}
		return false;
	};
	//get the observer object that is attached to DOM node
	var _getReact = $.getReact = function (node) {
			var modelName = node.getAttribute('data-component-root') || node.getAttribute('data-component');
			if (modelName) {
				return _model[modelName];
			}
			return false;
		};
	return build_component;
})();