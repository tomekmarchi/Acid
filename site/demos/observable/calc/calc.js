(function(){
	var calc = $.synModel('todo', {
		componentData:{
			addList: [],
			result:0
		},
		result:function(){
			this.nodes.result.tc(this.data.result);
		},
		addList:function(change){
			var addedCount=change.addedCount,
				result=this.data.result;
			if(addedCount>0){
				var len=change.index+addedCount;
				for(var i=change.index; i < len; i++){
					result=result+this.data.addList[i];
				}
			}
			this.data.result=result;
		},
		add:function(number){
			var number=$.toArray(arguments);
			this.data.addList.push.apply(this.data.addList,number);
		},
		template: '<div>\
		Result: <span data-node="result"></span>\
		<br />To add type this into console calcfn.add(2,3)\
		</div>'
	});
	window.calc=calc.render();
	window.calcfn=window.calc.model;
	$('#wrapper').ap(window.calc.node);
})();
