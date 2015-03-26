//loop through a range of numbers
number_extend.each = function (start,funct) {
	var end=this;
	if(!funct){
		var funct=start;
		var start=0;
	}
	var returned=_each_number(start,end,funct);
	return returned;
};
