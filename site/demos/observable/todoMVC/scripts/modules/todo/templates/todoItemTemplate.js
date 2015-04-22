$.template({
    name: 'todoItemTemplate',
    data: `<li>
   			<span class="view">
				<input class="toggle" type="checkbox" data-node="check" data-bind="checked[click:completed]">
				<label data-node="title" data-dblclick="this.edit" data-bind="title[textContent]"></label>
				<button class="destroy" data-node="removeBTN" data-click="this.remove"></button>
			</span>
			<input class="edit" data-node="editInput" data-bind="title[value:keyup]" data-blur="this.edit">
		</li>`
});