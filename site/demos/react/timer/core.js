(function () {
	//core model used for onready
	$.model('core', function () {
		var Timer=$.reactModel('Timer', {
			template: '<div>Seconds Elapsed: <span data-node="timer"></span></div>',
			componentMount: function () {
				this.interval = setInterval(this.tick, 1000);
			},
			componentUnMount: function () {
				clearInterval(this.interval);
			},
			tick: function () {
				this.data.secondsElapsed = this.data.secondsElapsed + 1;
			},
			secondsElapsed: function (object, change) {
				this.nodes.timer.tc(this.data.secondsElapsed);
			}
		});

		$.model('app', {
			add: function () {
				$('#wrapper').ap(Timer.render().mount({
					secondsElapsed: 0
				}));
			}
		});

		$('#wrapper').ap(Timer.render().mount({
			secondsElapsed: 0
		}));

		$.import(["//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/default.min.css","//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/highlight.min.js"],{
			call:function(){
				hljs.configure({
				  tabReplace: '    ', // 4 spaces
				});
				hljs.initHighlightingOnLoad();
			}
		});

	});
})();