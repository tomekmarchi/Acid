(function () {
	var app = function (isNative, isFunction, template, cache, todom, model, fragment, service, serviceCreate, view, ensure, console, api, reserve, art, tip, msg) {
			$('#scroll_wrap').attr('style', 'height:1000px');
			//cache stack array
			cache('resize_stacks', []);
			//create resize service
			serviceCreate('resize');
			//get properties for native objects
			var get_acid_props = function (type, object) {
					var array = Object.getOwnPropertyNames(type.prototype),
						temp = [];
					array.each(function (item, i) {
						if (item == '__proto__') {
							return;
						}
						var method = object[item];
						if (method) {
							if (isFunction(method)) {
								if (!isNative(method)) {
									if (type == NodeList) {
										if (object[0][item]) {
											return;
										}
									}
									temp.push(item);
								}
							}
						}
					});
					return temp.sort();
				};
			//native objects
			var objects = {
				node: Node,
				array: Array,
				string: String,
				number: Number,
				'function': Function
			},
				//their symbols
				objects_symbols = {
					node: document.body,
					array: [],
					string: 's',
					number: 1,
					'function': function () {}
				};
/*
				build api stacks
			*/
			//build stacks for acid
			var each=({}).each;
			api.display.each(function (item, i) {
				//API info
				var object = item.obj,
					id=item.id,
					name = item.name;
				//new fragment
				var frag = fragment();
				//template the header and container
				frag.ap(view('object_type_h3', name.ucFirst())).ap(view('object_type_wrap', 'block_' + id));
				//append to DOM
				$('#stacks').ap(frag);
				//new fragment
				var frag = fragment();
				//loop through item methods
				each.call(object,function (value, key) {
					frag.ap(view('item_method', {
						name: key,
						example: (value) ? value.descrip + ' -> ' + value.example : '',
					}));
				});
				//cache stack
				cache(id + '_stack', reserve({
					animation: ['slideinft', 'slideinfb', 'slideinfl', 'slideinfr'],
					optimal_min: 150,
					optimal_max: 300,
					column: 'column',
					cls: 'griditem',
					empty_obj: template('empty_box'),
					container: $id('block_' + id),
					scroll_container: $id('scroll_wrap'),
				}));
				//add to stack
				cache(id + '_stack').add(frag);
				//insert line break
				$('#stacks').ap(template('line_break'));
				//push to all stacks for resize
				cache('resize_stacks').push(id + '_stack');
			});
/*
				BUILD STACKS FOR NATIVE OBJECTS
			*/
			var frag = fragment();
			objects.each(function (item, key) {
				frag.ap(view('object_type_h3', key.ucFirst())).ap(view('object_type_wrap', 'block_' + key));
				$('#stacks').ap(frag).ap(template('line_break'));
				var stack = fragment();
				var doc = api[key];
				get_acid_props(item, objects_symbols[key]).each(function (method, i) {
					var info = doc[method];
					stack.ap(view('item_method', {
						name: method,
						example: (info) ? info.descrip + ' -> ' + info.example : '',
					}));
				});
				cache[key + '_stack'] = reserve({
					animation: ['slideinft', 'slideinfb', 'slideinfl', 'slideinfr'],
					optimal_min: 150,
					optimal_max: 300,
					column: 'column',
					cls: 'griditem',
					height: 1,
					empty_obj: template('empty_box'),
					container: $id('block_' + key),
					scroll_container: $id('scroll_wrap'),
				});
				(function (key, stack) {
					(function () {
						cache(key + '_stack').add(stack);
						stack = null;
						key = null;
					}).async();
				})(key, stack);
				cache('resize_stacks').push(key + '_stack');
			});
/*
				RESIZE SERVICE FOR STACKS
			*/
			service('resize').process.stack = function () {
				//lots of stacks so defer them over time to recalc
				cache.resize_stacks.each(function (item) {
					(function (item) {
						(function () {
							(function () {
								cache[item].update();
							}).async();
						}).timer(100 * item.length);
					})(item);
				});
			};
			//time for ASCII
			art.each(function(item){
				console(item);
			});
			(function () {
				$('#scroll_wrap').removeAttr('style');
			}).timer(600);
			//app completed
			console(msg);
		};
	//creating a callback when also importing models for modules
	var module_callback = function (module) {
			//adding custom arguments to the module
			module.args('APP BUILT');
			//launch module in async
			module.async();
			//console.log it
			$.console('Module Callback - All resources loaded -> launched in async');
		};
	$.model('core', function () {
		//acid modules you would like to be defined and models you would like to load
		var define = [];
		//push acid functions to define
		define.push.apply(define,['isNative', 'isFunction', 'template', 'cache', 'todom', 'model', 'frag', 'service', 'serviceCreate', 'view', 'ensure', 'console']);
		//push files needed to be loaded
		define.push.apply(define,['docs/api.js', 'plugins/reserve.js', 'plugins/art.js', 'plugins/tip.js', 'templates/template.js']);
		//module is used to import modules from the main function $ for repeated use inside a function also is performant based it will return a module
		//module_callback is optional if not supplied app will be launched as a callback
		$.module(define, app, module_callback);
		//core function executed
		$.console('CORE INITILIZED');
	}, true); //lean model with true set meaning no model methods attached
})();