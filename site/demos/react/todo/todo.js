(function(){
	var TodoApp = $.reactModel('todo', {
		componentData:{
			list: []
		},
		handleSubmit: function (obj) {
			this.data.list.push('<li>'+this.text+'</li>');
			this.nodes.input.value = '';
			this.text='';
		},
		onChange: function (obj,e) {
			this.text = obj.value;
			if(e.isEnter()){
				this.handleSubmit();
			}
		},
		list:function(change){
			this.nodes.ul.be(this.data.list[change.index]);
			this.nodes.span.tc(this.data.list.length + 1);
		},
		template: '<div><h3>TODO</h3>\
			<ul data-node="ul"></ul>\
			<input data-node="input" data-keyup="this.onChange" type="text" />\
			<button data-click="this.handleSubmit">Add #\
			<span data-node="span">1</span>\
			</button>\
		</div>'
	});
	$('#wrapper').ap(TodoApp.render().node);
})();
