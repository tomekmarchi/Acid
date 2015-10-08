//clone an object ES6 + ES5
$.cloneObject = (function(){

	function cloned_function() { }
	function clone_it(obj) {
		cloned_function.prototype = obj;
		return new cloned_function();
	}
	var clone=function(){
		return clone_it(this);
	};

	return clone;

})();

//copy an object ES6 + ES5
$.copyObject = function(item){
	return $merge(item,{});
};
