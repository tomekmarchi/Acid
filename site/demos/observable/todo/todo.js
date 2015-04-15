(function(){

	var TodoApp=$.factory('todo', {
		template: `<div><h3>TODO</h3>
			<ul data-node="ul"></ul>
			<input data-node="input" data-bind="value[keyup:privateData.text]" type="text" />
			<button data-click="this.handleSubmit" data-node="handleSubmit">Add #<span data-node="span"></span></button>
		</div>`,
		privateData:function(){
			return {
				list: [],
				text:''
			};
		},
		privateHelper:{
			reactList:{
				node:'ul',
				array:'list',
				every:function(){
					this.nodes.span.tc(this.privateData.list.length+1);
				}
			}
		},
		handleSubmit: function (obj) {
			this.privateData.list.push(this.componentRender({text:this.privateData.text}));
			this.privateData.text='';
		},
		component:{
			template:`<li></li>`,
			data:{
				text:'',
				title:''
			},
			text:function(){
				this.node.tc(this.data.text);
			}
		}
	});

	TodoApp.render().mount().apTo($('#wrapper'));

})();
