//convert object to string
var $tostring = object_prototype.toString,
	//make collection into an array
	_toArray = (_array.from) ? _array.from : function (nodes) {
		var arr = [];
		for (var i = -1, l = nodes.length; ++i !== l; arr[i] = nodes[i]);
		return arr;
	},
	domListToArray = function(collection){
		var list=_toArray(collection),
			temp=[],
			item,
			name,
			length=list.length;
		for(var i=0; i<length; i++){
			item=list[i];
			name=item.constructor.name;
			if(name=="HTMLCollection" || name=="NodeList"){
				pushApply(temp,toArrayDeep(item));
			}else{
				temp.push(item);
			}
		}
		return temp;
	};
