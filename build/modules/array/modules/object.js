//Converts arrays into objects.
$.object = function (values,keys) {
	return arraySortToObject((item,index,object) =>{
		object[keys[index]]=item;
	}, values);
};
