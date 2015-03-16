(function () {
	"use strict";
	var frag = $.frag,
		column_node=$.tag('div').cn('left column max-full'),
		math_random = Math.random,
		add_items = function (self, posts, type, columns) {
			if (self.column_number == 1) {
				self.amount = self.amount + 1;
				columns[0].appendChild(posts);
				return false;
			}
			var childs = posts.childNodes,
				len = childs.length,
				animations = self.animations,
				alen = (animations) ? animations.length : null;
			while (posts.firstChild) {
				var c = posts.firstChild;
				if (c) {
					var h = columns.oh(),
						len_h = h.length,
						smallest = h.smallest();
					for (var a = 0; a < len_h; a++) {
						if (h[a] == smallest) {
							if (alen) {
								c.cl(animations[~~ (math_random() * alen)]);
							}
							if (type) {
								type(columns, a, c);
							} else {
								self.amount = self.amount + 1;
								columns[a].appendChild(c);
							}
							self.items_len[a] = self.items_len[a] + 1;
							break;
						}
					}
				}
			}
			return false;
		},
		generate_columns = function (data) {
			var html = frag(),
				cls = data.cls,
				column_number = data.column_number,
				out = [],
				data = [],
				empty = [],
				items_len = [],
				items = [];
			for (var i = 0; i < column_number; i++) {
				html.appendChild(column_node.clone().cl('column_' + i).attr('style', 'width:' + cls + '%'));
				out[i] = [];
				data[i] = [];
				empty[i] = [];
				items_len[i] = 0;
			}
			return {
				out: out,
				empty: empty,
				items: items,
				data: data,
				items_len: items_len,
				html: html
			}
		},
		estimate = function (data) {
			var width = data.container.clw(),
				item_width = data.item_width_min,
				optimal_max = data.optimal_max,
				optimal_min = data.optimal_min;
			if (data.column_number) {
				var column_number = 1,
					cls = 100/column_number;
			} else {
				var column_number = 1,
					possible = [];
				while (column_number) {
					var wrap_test = width / column_number;
					if (wrap_test >= optimal_min && wrap_test <= optimal_max) {
						possible.push(wrap_test);
					} else if (wrap_test < optimal_min) {
						break;
					}
					column_number++;
				}
				var possible_len = possible.length;
				if (possible_len == 0) {
					var column_number = 1,
						cls = 100;
				} else {
					var cls = (possible[possible_len - 1] / width) * 100,
						column_number = column_number - 1;
				}
			}
			return {
				cls: cls,
				column_number: column_number,
				width: width
			};
		},
		get_live_lists = function (columns, column_number, cls) {
			var items = [];
			for (var i = 0; i < column_number; i++) {
				items[i] = columns[i].cls(cls);
			}
			return items;
		},
		veil_model = $.model.veil,
		veil_reserve = function (stack, getviewborders) {
			var items = stack.items,
				items_len = stack.items_len,
				columns = stack.columns,
				len = stack.column_number;
			var d = getviewborders(stack.scroll_container),
				containertop = stack.container.offsetTop;
			if (d.top < containertop) {
				d.top = 0;
			} else {
				d.top = d.top - containertop;
			}
			d.bottom = d.bottom + containertop;
			for (var i = 0; i < len; i++) {
				veil_model(items[i], i, stack, d, items_len[i]);
			}
			stack.range = 0;
			return false;
		};

	var update_reserve = function (self) {
		var container = self.container;
		self.busy = true;
		container.setAttribute('style', 'height:' + container.offsetHeight + 'px');
		var estimate_obj = estimate(self.setup),
			column_number = estimate_obj.column_number;
		if (estimate_obj.column_number == self.column_number) {
			container.removeAttribute('style');
			self.busy = false;
			return false;
		} else if (column_number < self.column_number) {
			var columns_obj = generate_columns(estimate_obj),
				columns = self.columns,
				len = columns.length,
				real = frag(),
				remove = [],
				add = [],
				posts = [];
			for (var i = column_number; i < len; i++) {
				var column = self.columns[i],
					items = column.childNodes,
					alen = items.length,
					empty = self.empty[i],
					out = self.out[i];
				for (var a = 0; a < alen; a++) {
					if (empty[a]) {
						add.push(out[a]);
					} else {
						add.push(items[a]);
					}
				}
				remove.push(column);
			}
			var len = add.length;
			for (var i = 0; i < len; i++) {
				real.appendChild(add[i]);
			}
			var len = remove.length;
			for (var i = 0; i < len; i++) {
				remove[i].remove();
				self.items.pop();
				self.empty.pop();
				self.out.pop();
			}
			self.column_number = column_number;
			var columns = container.cls(self.setup.column);
			columns.attr('style', 'width:' + estimate_obj.cls + '%');
			self.html = columns_obj.html;
			self.data = columns_obj.data;
			estimate_obj.merge(self);
			if (real) {
				self.add(real);
			}
		} else if (column_number > self.column_number) {
			var columns_obj = generate_columns(estimate_obj),
				columns = self.columns,
				len = columns.length,
				real = frag(),
				remove = [],
				add = [],
				posts = [];
			for (var i = 0; i < len; i++) {
				var column = self.columns[i],
					items = column.childNodes,
					alen = items.length,
					empty = self.empty[i],
					out = self.out[i];
				for (var a = 0; a < alen; a++) {
					if (empty[a]) {
						add.push(out[a]);
					} else {
						add.push(items[a]);
					}
				}
				remove.push(column);
			}
			var len = add.length;
			for (var i = 0; i < len; i++) {
				real.appendChild(add[i]);
			}
			var len = remove.length;
			for (var i = 0; i < len; i++) {
				remove[i].remove();
			}
			self.column_number = column_number;
			var columns = container.cls(self.setup.column);
			columns.attr('style', 'width:' + estimate_obj.cls + '%');
			self.html = columns_obj.html;
			self.data = columns_obj.data;
			estimate_obj.merge(self);
			columns_obj.merge(self);
			if (real) {
				container.appendChild(columns_obj.html);
				self.items = get_live_lists(columns, column_number, self.setup.cls);
				(function () {
					add_items(self, real, false, columns);
				}).async();
			}
		}
		container.removeAttribute('style');
		self.busy = false;
		return false;
			};
	$.model.reserve = function (data) {
		var container = data.container,
			estimate_obj = estimate(data),
			columns_obj = generate_columns(estimate_obj);
		container.appendChild(columns_obj.html);
		var columns = container.cls(data.column);
		columns_obj.items = get_live_lists(columns, estimate_obj.column_number, data.cls);
		if (veil_model) {
			var getviewborders = veil_model.getviewborders,
				veil = function () {
					return veil_reserve(this, getviewborders);
				};
		}
		var new_updatefunction=update_reserve.debounce(200);
		return {
			busy: false,
			setup: data,
			animations: data.animation,
			lastscroll: 0,
			veil: veil,
			empty_obj: data.empty_obj,
			scroll_container: data.scroll_container,
			height: {},
			cls: data.cls,
			container: container,
			columns: columns,
			width: estimate_obj.width,
			column_number: estimate_obj.column_number,
			number: 0,
			amount: 0,
			update: function () {
				return new_updatefunction(this);
			},
			add: function (posts, type) {
				var self = this;
				return (function () {
					add_items(self, posts, type, columns);
				}).async();
			}
		}.merge(columns_obj);
	};
})();