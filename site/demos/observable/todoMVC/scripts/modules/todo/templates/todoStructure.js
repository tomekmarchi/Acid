$.template({
        name: 'todoStructure',
        data: `<div>
	        	<div class="todoapp">
				<header>
					<h1>todos</h1>
					<input class="new-todo" data-node="input" data-bind="value[keyup:privateData.text]" data-keyup="this.addTodo" placeholder="What needs to be done?">
				</header>
				<section class="main">
					<input class="toggle-all" type="checkbox" data-node="checkAll" data-bind="checked[click:privateData.checkedAll]">
					<ul data-node="ul" class="todo-list"></ul>
				</section>
				<footer class="footer">
					<span data-node="todoCount" class="todo-count"></span>
					<ul class="filters">
						<li>
							<a data-click="pushRouter.pushState" data-href="/" data-node="filterindex">All</a>
						</li>
						<li>
							<a data-click="pushRouter.pushState" data-href="active/" data-node="filteractive">Active</a>
						</li>
						<li>
							<a data-click="pushRouter.pushState" data-href="completed/" data-node="filtercompleted">Completed</a>
						</li>
					</ul>
					<button class="clear-completed" data-node="clearCompleted" data-click="this.clearCompleted">Clear completed</button>
				</footer>
			</div>
			<footer class="info">
				<p>Double-click to edit a todo</p>
				<p>Created by <a href="https://twitter.com/tommarchi">Tomek Marchi</a></p>
				<p>Using <a href="https://acidjs.com">Acidjs</a></p>
				<p>Check out the code here on <a href="https://github.com/tomekmarchi/ACID/tree/master/site/demos/observable/todoMVC">Github</a></p>
			</footer>
		</div>`
});