//Pluck an attribute from each object in an array.
var pluck = $.pluck = function (array,pluckThis) {
	return mapArray(array,(item,index) =>{
		if(isArray(pluckThis)){
			var object={};
			eachArray(pluckThis,(pluckItem) =>{
				object[pluckItem]=item[pluckItem];
			});
			return object;
		}else{
			return item[pluckThis];
		}
	});
};
