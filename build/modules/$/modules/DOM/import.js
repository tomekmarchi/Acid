/*
	This imports any type of file.
	It works just like require in the browser.

	The main concern here is to
		remove event listeners
		null to ensure absolutely no leaks
		condense the code
*/
var _define,
	_import = (() => {
		var directoryNames = (name) => {
				return directoryNames[name] || '';
			},
			_imported = {},
			import_listen = (returned) => {
				$eventadd(returned.node, 'load', returned.call, true);
				$eventadd(returned.node, 'error', returned.call, true);
			},
			import_id = (id) => {
				return (id.replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_import');
			},
			importMainCallback = (node, url, id, call, remove, returned) => {
				if (call) {
					if (_isString(call)) {
						call = _find(call, _model);
					}
					_async(call);
				}
				if (remove) {
					node.remove();
				}
				//clean up
				$eventremove(node, 'load', returned.call);
				$eventremove(node, 'error', returned.call);
				node = null;
				remove = null;
				returned = null;
				call = null;
				id = null;
			},
			import_events = (node, url, id, data, remove) => {
				var returned = {
					node: node,
					call: function(event, funct, removeType) {
						_imported[id] = 1;
						event.stopPropagation();
						var type = event.type,
							removeType;
						if (type === 'load') {
							removeType = remove;
						} else {
							removeType = true;
						}
						importMainCallback(node, url, id, data.call, removeType, returned);
						returned = null;
						node = null;
						url = null;
						id = null;
						data = null;
						remove = null;
						event = null;
					}
				};
				return returned;
			},
			/*
				CSS IMPORT FUNCTIONS
			*/
			//STYLE NODE
			style_node = _attr(_attr(_tag('link'), 'rel', 'stylesheet'), 'type', 'text/css'),
			//create style node
			import_style = (url, id) => {
				return _attr(_clone(style_node), 'href', url);
			},
			/*
				SCRIPT IMPORT FUNCTIONS
			*/
			script_node = _attr(_tag('script'), 'async', ''),
			//create style node
			import_script = (url, id) => {
				return _attr(_clone(script_node), 'src', url);
			},
			/*
				NODE TYPE OBJECT
			*/
			node_types = {
				js: import_script,
				css: import_style
			},
			/*

				EXTEND import to string

			*/
			//import a single item
			import_it = (url, data, ismultiple) => {
				var isJS = isJavascript(url),
					id = import_id(url),
					type = url.match(regex_ext)[0].replace('.', ''),
					remove,
					node,
					parent,
					model;
				if (!_has(url, '//')) {
					url = directoryNames(type) + url;
				}
				if (!data.remove) {
					if (isJS) {
						remove = true;
					}
				}
				if (!_imported[id]) {
					//mark as imported already
					_imported[id] = true;
					//create node type
					node = node_types[type](url, id);
					//events
					import_listen(import_events(node, url, id, data, remove));
					//append
					head_node.appendChild(node);
				} else {
					//if already there attach events
					node = $qs('[href="' + url + '"]');
					if (node && _imported[id] !== 1) {
						import_listen(import_events(node, url, id, data, remove));
					} else {
						_async(data.call);
					}
				}
			},
			orderArgumentObjects = (item) => {
				if (_isString(item)) {
					if (isJavascript(item)) {
						item = getModelName(item);
					} else if (isCSS(item)) {
						item = $qs('[href="' + item + '"]');
					} else {
						item = _find(item, $);
					}
				}
				return item;
			},
			define = (data) => {
		        var funct = data.invoke,
		            modelName = data.name,
		            args = data.import,
		            wrapFunct = function() {
		                var freshArgs=_each_array(args,orderArgumentObjects);
		                if (arguments.length > 0) {
							pushApply(freshArgs, arguments);
		                }
		                return funct.apply(wrapFunct, freshArgs);
		            }.bind(wrapFunct);
		        if (modelName) {
		            _model[modelName] = wrapFunct;
		        }

		        return wrapFunct;
		    },
			arrayImportLoop = (item, name, error) => {
				import_it(item, {
					call: () => {
						if (error) {
							error(item, name);
						}
						_promised(item, name);
						item = null;
						name = null;
						error = null;
					}
				});
			},
			array_import = (array, data) => {
				var name = import_id(array.join('')),
					error = data.error,
					call = data.call,
					callback = () => {
						call.apply(call, _each_array(array,orderArgumentObjects));
						call = null;
						array = null;
					},
					stringArray = _each_array(array, (item, index) => {
						if (_isString(item)) {
							if (isJavascript(item) || isCSS(item)) {
								return item;
							}
						}
					});
				if (stringArray.length > 0) {
					_promise(stringArray, name, () => {
						callback();
					});
					//make imports
					_each_array(stringArray, (item, index) => {
						arrayImportLoop(item, name, error);
					});
				} else {
					_async(() => {
						callback();
					});
				}
				name = null;
				data = null;
				error = null;
			},
			importFunction = (key, value) => {
				if (_isFunction(value)) {
					value = {
						call: value
					};
				}
				if (_isString(key)) {
					key = [key];
				}
				return array_import(key, value);
			},
			//Save CSS and JS files directories
			directoryNames = (name) => {
				return directoryNames[name] || '';
			};
		//keep track of what has been imported
		$.imported = _imported;
		directoryNames.css = '';
		directoryNames.js = '';
		$.dir = directoryNames;

		//export Define function
		_define = define;
		$.define = define;
		return importFunction;
	})();

$.import = _import;
