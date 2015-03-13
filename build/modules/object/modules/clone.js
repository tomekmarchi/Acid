//clone an object ES6 + ES5
object_extend.clone = (function(){

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
object_extend.copy = function(){
	return $merge(this,{});
};