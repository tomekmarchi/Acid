(function(){

	var TodoApp=$.factory('todo', {
		template: `<div><h3>TODO</h3>
			<ul data-node="ul" data-bind="privateData.list"></ul>
			<input data-node="input" data-bind="privateData.text[value:keyup]" type="text" />
			<button data-click="this.handleSubmit" data-node="handleSubmit">
				Add #
				<span data-node="span"></span>
			</button>
		</div>`,
		privateData:function(){
			return {
				list: [],
				text:''
			};
		},
		listOnEvery:function(){
			this.nodes.span.tc(this.privateData.list.length+1);
		},
		handleSubmit: function (obj) {
			this.privateData.list.push(this.component.listItem.render({text:this.privateData.text}));
			this.privateData.text='';
		},
		component:{
			listItem:{
				template:`<li data-node="todoItem" data-bind="text[textContent]"></li>`
			}
		}
	});

	TodoApp.render().mount().apTo($('#wrapper'));

})();
