$.factory('todo',{
	template:`<div>
		<input type="text" data-node="input" data-bind="privateData.text[value:keyup]">
		<button data-node="button" data-click="this.add">add</button>
		<ul data-node="list" data-bind="privateData.list"></ul>
	</div>`,
	privateData:function(){
		return {
			list:[]
		}
	},
	add:function(){
		this.privateData.list.push(this.component.listItem.render({text:this.privateData.text}));
		this.privateData.text='';
	},
	component:{
		listItem:{
			template:`<li data-node="item" data-bind="text[textContent]"></li>`
		}
	}
});

$id('wrapper').ap($.factory('todo').render().mount());