/*
ensure is for JS models only and is a more simple api than import
Ensure uses import plus sugar to accomplish it's functionality it's more specific to ACID's internals whereas import is focused on simple importation of content
*/

$.ensure(['plugins/tip','docs/api'],function(tip,api){
	$.log(tip);
	$.log(api);
});


$.import(['styles/blotr.css','docs/api.js'],{
	call:function(api){
		$.log(api);
	}
});