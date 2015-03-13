 (function () {
	 //check parent for attribute
 	var checkup = function (obj, attr) {
		var obj = obj.parentNode,
			mod = obj.getAttribute(attr);
		if (mod == 'up') {
			return checkup(obj, attr);
		} else {
			return obj;
		}
	};
	//if key event
 	var keyevent = function (e, obj) {
		//key events
		var key = e.keyCode;
		if (key == 13) {
			var prevententer = obj.getAttribute('data-prevententer');
			if (prevententer) {
				if (prevententer == 'all') {
					e.preventDefault();
				} else if (_has(prevententer, 'allowshift')) {
					if (!e.shiftKey) {
						e.preventDefault();
					}
				} else if (_has(prevententer, 'allowalt')) {
					if (!e.altKey) {
						e.preventDefault();
					}
				}
			}
		}
		return;
	};
	var syntheticEvent=function (e,analytics,mobile,fn,lvl,type,attr) {
		var isdom = isDom(e),
			nonenode = 0;
		if (isdom) {
			var obj = e;
		} else {
			var obj = e.target;
			if (!isDom(obj)) {
				if (obj != _window && obj != _document) {
					var nonenode = 1;
				}else{
					var obj = _body;
				}
			}
		}
		if (!nonenode) {
			if (!obj) {
				return false;
			}
			if ($debug) {
				console.log(e);
			}
			var action = obj.getAttribute(attr);
			if (obj != _body) {
				if (!action) {
					if (obj.getAttribute('data-ext')) {
						return false;
					}
					if (lvl) {
						for (var i = 0; i < lvl; i++) {
							var obj = obj.parentNode;
							if (!obj) {
								return false;
							} else if (obj.nodeType != 1) {
								return false;
							}
							var action = obj.getAttribute(attr);
							if (action) {
								break;
							}
						}
					}else{
						while (obj=obj.parentNode) {
							if (!obj) {
								return false;
							} else if (obj.nodeType != 1) {
								return false;
							}
							var action = obj.getAttribute(attr);
							if (action) {
								break;
							}
						}
					}
				}
				if (action == 'up') {
					var obj = checkup(obj, attr),
						action = obj.getAttribute(attr);
				}
			}
			if (action == 'ext') {
				return false;
			}
			if (!isdom) {
				if (obj.getAttribute('data-prevent') || obj.getAttribute('data-prevent-' + type)) {
					e.preventDefault();
				}
				if (obj.getAttribute('data-stop-' + type)) {
					e.stopPropagation();
				}
				if (fn) {
					fn(e, obj);
				}
			}
			if (action) {
				if (!isdom) {
					e.stopPropagation();
				}
				var multi = action.split(','),
					len = multi.length;
				for (var i = 0; i < len; i++) {
					var action = multi[i],
						root = action.split('.')[0],
						ismodel = _find(action, $.model);
					if (ismodel) {
						ismodel(obj, e);
					} else {
						(function (action, analytics, obj, e, type) {
							_ensure(root, function () {
								if (action) {
									var fn = _find(action, $.model);
									if (fn) {
										if ($debug) {
											console.log(action);
										}
										fn.apply(obj, e);
										fn = null;
										action = null;
										obj = null;
										e = null;
									} else {
										console.log('ERROR: MISSING FN -> ' + action);
									}
									if (analytics) {
										_async(function () {
											analytics(type, action);
										});
									}
								}
							});
						})(action, analytics, obj, e, type);
					}
				}
			}
		}
		return false;
	};
	//generate the onevent function
 	var eventgenerate = function (data) {
		var type = data.type,
			lvl = data.lvl,
			fn = data.fn,
			mobile = data.mobile,
			analytics = data.analytics,
			data = null;
		if (mobile) {
			var attr = 'data-' + mobile;
		} else {
			var attr = 'data-' + type;
		}
		var syntheticEventWrap=function (e) {
			syntheticEvent(e,analytics,mobile,fn,lvl,type,attr);
		};
		return syntheticEventWrap;
	};
	//create events from config
 	$.acid.event = function (event) {
 		var data = {
 			type: ''
 		},
 			analytics = event.analytics;
 		if (analytics) {
 			data.analytics = analytics;
 		}
 		for (var i = 0,keys=_object_keys(event), len = keys.length; i < len; i++) {
			var key=keys[i];
 			var object = event[key];
 			for (var a = 0,subkeys=_object_keys(object), len_sub = subkeys.length; a < len_sub; a++) {
				var key_sub=subkeys[a];
				if (key_sub == 'obj') {
	 				continue;
	 			}
 				var item = object[key_sub];
 				data.type = key_sub;
 				data.lvl = item.bubble;
 				data.fn = item.fn;
 				if (_has(key_sub, 'key')) {
 					data.fn = keyevent;
 				}
 				var new_name = 'on' + key_sub;
 				$[new_name] = eventgenerate(data);
 				if ($.agent.mobile) {
 					if (item.mobile) {
 						var key_sub = item.mobile;
 					}
 				}
 				$eventadd(object.obj, key_sub, $[new_name], item.capture);
 			}
 		}
 		return false;
 	};
 	$.acid.event.generate = eventgenerate;
 })();

 var _event=$.acid.event;