//Compiled import function
(function () {
	//store URL dir data to save bytes and dev time
	$ext.import = {};
	//keep track of what has been imported
	$.imported = {};

	$.dir={
		css:'',
		html:'',
		js:'',
	};
	/*
	IMPORT SHARED FUNCTIONS

	*/
	var import_listen = function (data) {
			//if URL loads
			$eventadd(data.node, 'load', data.call);
			//if URL fails
			$eventadd(data.node, 'error', data.error);
			return false;
		},
		import_id = function (id) {
			return (id.replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_import');
		},
		import_events = function (node, url, id, call, error, remove) {
			var callback = function (event) {
					if (call) {
						if (_isString(call)) {
							_async(function () {
								var fn = _find(call, _model);
								if (_isFunction(fn)) {
									fn();
								}
								call = null;
								fn=null;
							});
						} else if (_isFunction(call)) {
							var splitIt=url.split('/'),
								model = _find(splitIt[splitIt.length-1].split('.js')[0], _model);
							_async(function(){
								call.call(call,model);
								model=null;
								call=null;
							});
						}
					}
					if (remove) {
						var par = node.parentNode;
						if (par) {
							par.removeChild(node);
						}
					}
					//clean up
					$eventremove(node, 'load', callback);
					$eventremove(node, 'error', callback_error);
					node = null;
					callback_error = null;
					callback = null;
					error = null;
				},
				callback_error = function (event) {
					if (error) {
						if (_isString(error)) {
							(function () {
								var fn = _find(error, _model);
								if (_isFunction(fn)) {
									fn();
								}
								error = null;
							}).async();
						} else if (_isFunction(error)) {
							error.async();
							error = null;
						}
					}
					//clean up
					$eventremove(node, 'load', callback_error);
					$eventremove(node, 'error', callback_error);
					node.parentNode.removeChild(node);
					node = null;
					callback_error = null;
					callback = null;
					call = null;
				};
			var returned={
				node: node,
				call: callback,
				error: callback_error
			};
			return returned;
		};
/*

CSS IMPORT FUNCTIONS

*/
	//STYLE NODE
	var style_node = _document.createElement('link');
	style_node.setAttribute('rel', 'stylesheet');
	style_node.setAttribute('type', 'text/css');
	//create style node
	var import_style = function (url, id) {
			var node = style_node.cloneNode(false);
			node.setAttribute('href', url);
			node.setAttribute('id', id);
			var returned={
				node: node,
				remove: false
			};
			return returned;
		};
/*

SCRIPT IMPORT FUNCTIONS

*/
	var script_node = _document.createElement('script');
	script_node.setAttribute('async', '');
	//create style node
	var import_script = function (url, id, remove) {
			var node = script_node.cloneNode(false);
			node.setAttribute('src', url);
			node.setAttribute('id', id);
			var returned={
				node: node,
				remove: remove || true
			};
			return returned;
		};
/*

NODE TYPE OBJECT


*/
	var node_types = {
		js: import_script,
		css: import_style
	};
/*

	EXTEND import to string

*/
	//import a single item
	var import_it = function (url, data, ismultiple) {
			var data = data || {},
				dir = data.dir,
				type = url.match(regex_ext)[0].replace('.', ''),
				url = ((!dir) ? ((_has(url, '//')) ? url : ($.dir[type] || '') + url) : ($.dir[dir] || '') + url),
				id = import_id(url);
			if (!$.imported[id]) {
				//mark as imported already
				$.imported[id] = true;
				//create node type
				var node_data = node_types[type](url, id, data.remove),
					node = node_data.node;
				//events
				import_listen(import_events(node, url, id, data.call, data.error, node_data.remove));
				//append
				var parent = ((head_node) ? head_node : $(data.selector)).appendChild(node),
					parent = null;
			} else {
				//if already there attach events
				var node = $id(id);
				if (node && _has(url, '.js')) {
					import_listen(import_events(node, url, id, data.call, data.error, ((data.remove) ? data.remove : ((type == 'js') ? true : false))));
				}else{
					if(!ismultiple){
						if (_has(url, '.js')) {
							var splitIt=url.split('/'),
								model = _find(splitIt[splitIt.length-1].split('.js')[0], _model);
							if (model) {
								return (function(){
									data.call(model);
									model=null;
								}).async();
							}
						}
					}
					return data.call.async();
				}

			}
			return false;
		};
	//import an array of items
	var array_import = function (array,data) {
		var len = array.length,
			array_model = [],
			name = array.join('').replace(regex_fowardslash, '_').replace(regex_dash, '_').replace(regex_dot, '_') + '_promise',
			error = data.error,
			call = data.call;
		//create promise
		_promise(array, name, function () {
			for (var i = 0; i < array.length; i++) {
				var item = array[i];
				if (_has(item, '.js')) {
					var model = _find(item.split('/').last().split('.js')[0], _model);
					if (model) {
						array_model.push(model);
					}
				}
			}
			_async(function () {
				call.apply(call, array_model);
				call = null;
				array_model = null;
			});
			return false;
		});
		//make imports
		for (var i = 0; i < len; i++) {
			(function (item, n) {
				_import(item,{
					error: function () {
						if(error){
							error(item, n);
						}
						_promised(item, n);
						item = null;
						n = null;
						return false;
					},
					call: function () {
						_promised(item, n);
						item = null;
						n = null;
						return false;
					}
				},1);
			})(array[i], name);
		}
		var len = null,
			name = null;
		return false;
	};
	$.import = function(key,value){
		if(_isString(key)){
			return import_it(key,value);
		}
		return array_import(key,value);
	};

})();

//cache import function
var _import=$.import;