//uppercase first letter lower case the rest
string_extend.ucFirst = function () {
	var string = this;
	return string.charAt(0).toUpperCase() + string.substr(1);
};

//uppercase first letter for all
string_extend.ucFirstAll = function () {
	var array = this.split(' '),
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item=array[i];
		array[i]=item.charAt(0).toUpperCase() + item.substr(1);
	}
	return array.join(' ');
};

//uppercase first letter lower case the rest
string_extend.ucFirstOnly = function () {
	var string = this;
	return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
};

//uppercase first letter lower case the rest all
string_extend.ucFirstOnlyAll = function () {
	var array = this.split(' '),
		len = array.length;
	for (var i = 0; i < len; i++) {
		var item=array[i];
		array[i]=item.charAt(0).toUpperCase() + item.substr(1).toLowerCase();
	}
	return array.join(' ');
};

//Returns the camel cased string
string_extend.camel = function () {
	var string=string_extend.ucfirstall.call(this.replace(regex_underscore,' ').replace(regex_dash,' '));
	return (string.charAt(0).toLowerCase() + string.substr(1)).replace(regex_space_global, '');
};

//Returns the kebab cased string
string_extend.kebab = function () {
	return this.toLowerCase().replace(regex_underscore,' ').replace(regex_space_global, '-');
};

//Returns the snake cased string
string_extend.snake = function () {
	return this.toLowerCase().replace(regex_dash,' ').replace(regex_space_global, '_');
};

//returns the trunced version of the string
string_extend.truncate = function (amount) {
	var string=this,
		length=string.length;
	if(length>amount){
		return this.slice(0,amount);
	}
	return string;
};

//returns the trunced version of the string starting from the right
string_extend.truncateRight = function (amount) {
	var string=this,
		length=string.length;
	if(length>amount){
		return string.substr(amount,length);
	}
	return string;
};

//repeat
string_extend.repeat = (string_prototype.repeat)? false : function (amount) {
	if(!amount){
		return '';
	}
	if(amount==1){
		return this;
	}
	var string=this,
		temp=string;
	for(var i=1; i < amount; i++){
		if(i>0){
			var temp=temp+string;
		}
	}
	return temp;
};