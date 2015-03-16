(function(){

	var depend=['tiles'],
		app=function(tiles){

		};

	//resources are ready
	$.promise(['css'],'appReady',function(){
		$.module(depend,app);
	});

	//core model used for onready
	$.model('core',function(){
		$.ensure(['tiles','/site/scripts/models/css/css'],function(tiles,css){
			css('css','appReady');
		});
	});

})();