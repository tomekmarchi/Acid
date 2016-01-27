//single node only operations
var acidLibPrefix = (acidLib) ? nodeAttribute(acidLib,'data-prefix') || emptyString : emptyString,
	extendDom = function (obj, ext) {
		eachObject(obj,(item,key)=>{
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
extendDom(nodeOnly, nodePrototype);
//lists without looping
extendDom(listOnly, nodeListPrototype);
extendDom(listOnly, htmlCollectionPrototype);
