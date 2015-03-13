(function(){
	"use strict";

	var wrap_outter=$('#scroll_wrap');
	var header=$('header')[0];

	var scrollit=function(){
			var s=wrap_outter.scrollTop;
			if(s<300){
				var f=s-60;
			}else if(s<500){
				var f=s-Math.round(s/3);
			}else if(s<800){
				var f=s-Math.round(s/2.5);
			}else {
				var f=s-Math.round(s/2);
			}
			if(f<0){
				var f=0;
			}
			wrap_outter.scrollTop=f;
			if(f>0){
				up();
			}
			return false;
		},
		up=function(){
			if(wrap_outter.scrollTop!=0){
				scrollit.raf();
			}
		};

	$.model.scroll={
		up: function(obj) {
			up();
			return false;
		},
		move: function (obj){
			if(wrap_outter.scrollTop > 100){
				header.attr('data-tooltip','Scroll Up');
			}else{
				header.attr('data-tooltip','');
			}
		}
	};

})();