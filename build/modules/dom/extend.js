//single node only operations
var extendDom = function (obj, ext) {
		_each_object(obj,(item,key)=>{
			if (item) {
				Object.defineProperty(ext, acidLibPrefix + key, {
				  enumerable: false,
				  configurable: true,
				  writable: true,
				  value: item
				});
			}
		});
	};
extendDom(nodeOnly, node_prototype);
//lists without looping
extendDom(listOnly, nodelist_prototype);
extendDom(listOnly, htmlcollection_prototype);
