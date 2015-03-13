(function(){

	var state=function(data){
			$.cache('currentstate',{
				cleanup:[data.cleanup],
				state:data.state,
				name:data.name
			});
		},
		pages={
			api:{
				cleanup:function(){
					$('#api_overlay').cladd('gpu_hide_top');
				},
				state:function(){
					$('#api_overlay').clremove('gpu_hide_top');
				},
				name:'api'
			}
		}
		load=function(nav){
			state();
		};

	$.model('nav',{


	});


})();