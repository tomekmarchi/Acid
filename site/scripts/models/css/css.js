(function(){

	$.model('css',function(name,promise){
		var root='/site/styles/';
		$.import([root+'blotr.css',root+'theme.css',root+'icon.css'],function(){
			if(promise){
				$.promise(name,promise);
			}
		});
	});

})();