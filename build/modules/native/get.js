/*

This is for finding an object method via a string used througout events

*/
//find method
var _find = $.get = function (name, obj) {
		var obj = (obj) ? obj : $,
			name = name.split('/'),
			name= name[name.length-1];
		if (_has(name, '.')) {
			_eachWhile(name.split('.'),(item,index) =>{
				obj = obj[item];
				if (hasValue(obj)) {
					return true;
				}
			});
		} else {
			var obj = obj[name];
		}
		return obj || false;
	};
