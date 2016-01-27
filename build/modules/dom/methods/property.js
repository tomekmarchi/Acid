//props
var nodeValue = domPropertyMethod('value'),
	nodeSelect = domPropertyMethod('selected'),
    nodeStyle = function(node, attr, value) {
        if (hasValue(value)) {
            node.style[attr] = value;
            return node;
        }else if(attr){
			if(isPlainObject(attr)){
				eachObject(attr,(item,key) =>{
					nodeStyle(node,key,item);
				});
			}else{
				return node.style[attr];
			}
		}else {
			return node.style;
		}
        return node;
    };
