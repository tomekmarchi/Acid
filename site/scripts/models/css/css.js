(function(){

	$.model('css',function(name,promise){
		$.import(['../../../styles/blotr.css','../../../styles/theme.css','../../../styles/icon.css'],function(){
			$.promise(name,promise);
		});
	});

})();