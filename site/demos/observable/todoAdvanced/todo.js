(function(){

	var TodoApp=$.factory('todo', {
		template: `<div>
			<h2>Todo</h2>
			<span><span data-node="remaining"></span> of <span data-node="total"></span> remaining</span>
	      	[ <a data-click="this.archive">archive</a> ]
	      	<ul data-node="ul"></ul>
	        <input type="text" data-node="input" data-keyup="this.todoText" size="30" placeholder="add new todo here" />
	        <button data-click="this.addTodo">Add</button>
	    </div>`,
		privateData:{
			list: []
		},
		privateHelper:{
			synNodeList:{
				node:'ul',
				name:'list',
				every:function(){
					this.nodes.total.tc(this.privateData.list.length);
					this.remainingUpdate();
				}
			}
		},
		remaining:function(){
			this.nodes.remaining.tc(this.privateData.remaining);
		},
		remainingUpdate:function(){
			var count=0;
			this.components().each(function(item){
				if(item.data.done){
					count++;
				}
			});
			this.privateData.remaining=count;
		},
		addTodo: function (obj) {
			this.privateData.list.push(this.componentRender({text:this.text,done:false}));
			this.nodes.input.value = '';
			this.text='';
		},
		todoText: function (obj,e) {
			this.text = obj.value;
		},
		componentTemplate:`<li><input type="checkbox" data-node="check" data-click="this.check"><span data-node="text"></span></li>`,
		componentData:{
			text:''
		},
		componentModel:{
			check:function(obj){
				this.data.done=obj.checked;
			},
			text:function(){
				this.nodes.text.tc(this.data.text);
			},
			done:function(){
				this.nodes.text.cn('done-'+this.data.done);
				this.factory.remainingUpdate();
			}
		}
	});

	TodoApp.render().node.apTo($('#wrapper'));

})();
