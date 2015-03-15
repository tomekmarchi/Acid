(function(){

	var wholetip=$.toDOM('<div class="fixed top left gpu_hide_top opacity0 trans-opacity zindexhigh acidtip-arrow-wrap">\
				<div id="tip_wrap">\
					<div class="acidtip-arrow"></div>\
				</div>\
			</div>\
			<div class="fixed top left gpu_hide_top opacity0 trans-opacity zindexhigh acidtip-tool-wrap">\
				<div id="acid_tooltip">\
					<div class="p no-margin rounded acid_tooltip_wrap"></div>\
				</div>\
			</div>'),
		tip_pos=wholetip.qs('.acidtip-arrow-wrap'),
		text_pos=wholetip.qs('.acidtip-tool-wrap'),
		tip_class=wholetip.qs('#tip_wrap'),
		text_class=wholetip.qs('#acid_tooltip'),
		acidtext=wholetip.qs('.acid_tooltip_wrap'),
		show_tip=function(obj,e){
			if($.agent.mobile){
				return false;
			}
			var text=obj.attr('data-tooltip');
			if(!text){
				return false;
			}
			var x = e.clientX,
				y = e.clientY,
				maxwidth=$.cache.bodyWidth;

			//object data
			var	position = obj.getBoundingClientRect(),
				objx = position.left,
				objy = position.top,
				tipposition=obj.attr('data-tip-position') || '',
				theme=obj.attr('data-tooltip-theme') || '',
				tipcls='default_acidtip_tip_theme '+theme,
				tipcls_og=tipcls,
				textcls='default_acidtip_text_theme '+theme;

			if(text){
				acidtext.tc(text);
			}

			var text_oh=text_class.oh(),
				objwidth=obj.ow(),
				objh=obj.oh(),
				textwidth=text_class.ow(),
				topstart=objy;

			var top=topstart-text_oh,
				top_og=top,
				left=(objx-(textwidth/2)+(objwidth/2)).round(),
				left_og=left;

			var top_tip=top+text_oh,
				top_tip_og=top_tip,
				left_tip=objx+(objwidth/2)-5,
				left_tip_og=left_tip;

			if(left<0){
				var left=objx+objwidth+6,
					left_tip=left-10;
				var top=objy+(objh/2)-(text_oh/2),
					top_tip=objy+(objh/2)-5;
				var tipcls=tipcls+' acidtipleftarrow';
			}


			var greaterthanmax=objx+objwidth+textwidth>maxwidth;

			if(top<0 && !greaterthanmax || top<0 && objwidth==maxwidth){
				var top=objy+objh+6,
					top_tip=objy+objh-3;
				var tipcls=tipcls+' acidtiptoparrow';
			}else if(greaterthanmax){
				var left=objx-textwidth-10,
					left_tip=left+textwidth;
				var top=objy+(objh/2)-(text_oh/2),
					top_tip=objy+(objh/2)-5;
				var tipcls=tipcls+' acidtiprightarrow';
			}

			if(left<0){
				var top=top_og,
					left=left_og,
					top_tip=top_tip_og,
					left_tip=left_tip_og,
					tipcls=tipcls_og;
			}

			if(tipcls==tipcls_og){
				if(top+top_tip-objh>objh){
					var top=top-(objh/2),
						top_tip=top_tip-(objh/2);
				}
			}

			if(tipcls){
				tip_class.cn(tipcls);
			}
			if(textcls){
				text_class.cn(textcls);
			}

			tip_pos.attr('style','-webkit-transform:translate3d('+left_tip+'px,'+top_tip+'px,0);transform:translate3d('+left_tip+'px,'+top_tip+'px,0);').clRemove('gpu_hide_top','opacity0');
			text_pos.attr('style','-webkit-transform:translate3d('+left+'px,'+top+'px,0);transform:translate3d('+left+'px,'+top+'px,0);').clRemove('gpu_hide_top','opacity0');


			return false;
		}.debounce(200);

	var tip_model=$.model.tip={
		show:show_tip,
		hide:function(){
			tip_pos.removeAttr('style').cl('gpu_hide_top','opacity0');
			text_pos.removeAttr('style').cl('gpu_hide_top','opacity0');
			show_tip.clear();
		},
		unpack:function(obj,e){
			tip_model.show(obj,e);
			var replacethis=obj.attr('data-mouseover'),
				path=replacethis.match(/([^,](.*)\/)?tip.unpack/),
				out='tip.hide';
			if(path[1]){
				var out=path[1]+out;
			}
			obj.attr('data-mouseover',replacethis.replace(/tip.unpack/,'tip.show')).attr('data-mouseout',out);
		}
	};

	document.body.ap(wholetip);

})();