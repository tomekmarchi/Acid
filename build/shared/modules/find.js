/*

This is for finding an object method via a string used througout events

*/
//find method
var _find = function (name, obj) {
		var obj = (obj) ? obj : $,
			name = name.split('/').last();
		if (_has(name, '.')) {
			var newname = name.split('.'),
				length = newname.length;
			for (var i = 0; i < length; i++) {
				var obj = obj[newname[i]];
				if (!obj) {
					return false;
				}
			}
		} else {
			var obj = obj[name];
		}
		return obj || false;
	};