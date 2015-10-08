//add event
$.eventAdd = function(obj,name,funct,bool){
	if(!funct){
		var checkSpot=weakEvents.get(obj);
		if(checkSpot){
			_each_object(name,function(value,key){
				checkSpot[key]=value;
			});
		}else{
			weakEvents.set(obj,name);
			checkSpot=weakEvents.get(obj);
		}
		return checkSpot;
	}
	return $eventadd(obj,name,funct,bool);
};
//remove event
$.eventRemove = function(obj,name,funct,bool){
	if(!funct){
		return weakEvents.delete(obj);
	}
	return $eventremove(obj,name,funct,bool);
};