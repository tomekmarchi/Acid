//find matching elements
var $match = function (args, data) {
		var ismatch = args.match($replace_template_string);
		if (ismatch) {
			for (var i = 0, keys = _object_keys(ismatch), len = keys.length; i < len; i++) {
				var key = keys[i];
				var item = ismatch[key];
				var newitem = item.substring(1, item.length - 1),
					newitem = data[newitem];
				if (hasValue(newitem)) {
					if (!_isString(newitem)) {
						var args = newitem;
					} else {
						var args = args.replace(item, newitem);
					}
				} else {
					var args = args.replace(item, '');
				}
			}
		}
		return args;
	},
	//match loop
	$matchloop = function (args, data) {
		for (var a = 0, len = args.length, arry = []; a < len; a++) {
			arry[a] = $match(args[a], data);
			if (arry[a] === false) {
				return false;
			}
		}
		return arry;
	},
	//view parse
	$autoparse = function (item, data, op) {
		for (var i = 0, keys = _object_keys(op), len = keys.length; i < len; i++) {
			var key = keys[i];
			if (!op.hasOwnProperty(key)) {
				continue;
			}
			var args = op[key],
				list = args.list;
			if (_isString(args)) {
				var args = $match(args, data);
			} else if (_isFunction(args)) {
				var args = args(data);
			} else if (_isArray(args)) {
				var args = $matchloop(args, data);
			} else if (args.list) {
				var list = args.list,
					listlen = list.length,
					operation = {};
				operation[key] = [];
				for (var i = 0; i < listlen; i++) {
					operation[key] = list[i];
					$autoparse(item, data, operation);
				}
			}
			if (hasValue(args)) {
				node_prototype[key].apply(item, _isArray(args) ? args : [args]);
			}
		}
		return false;
	},
	//takes a data object then places over based on nodes
	_faceplateDOM = function (node, data, name) {
		//check if a name is supplied else then use default name
		if(!name){
			var name='data-faceplate';
		}
		if(_isString(name)){//faster
			if(_has(name, 'data-')){//slower
				var attribute = node.getAttribute(name);
				var face = (attribute[0] === '{') ? json.parse(attribute) : _faceplate[attribute];
			}else{
				var face =  _faceplate[name];
			}
		}else {//fastest
			var face = name;
		}
		//run direct function plate
		if (_isFunction(face)) {
			face(data, node);
		} else {
			$autoparse(node, data, face);
		}
		return node;
	};