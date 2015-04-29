(function () {
	//core model used for onready
	$.model('core', function () {
		//timer component
		var Timer = $.component('Timer', {
			template: `<div>Seconds Elapsed: <span data-node="timer" data-bind="secondsElapsed[textValue]"></span></div>`,
			data:function(){
				return {
					secondsElapsed: 0
				}
			},
			mount: function () {
				this.interval = setInterval(this.tick, 1000);
			},
			unMount: function () {
				clearInterval(this.interval);
			},
			tick: function () {
				this.data.secondsElapsed = this.data.secondsElapsed + 1;
			}
		});
		//mount timer on the page
		$('#wrapper').ap(Timer.render().mount());

		//add button for more timers
		$.model('app', {
			add: function () {
				$('#wrapper').ap(Timer.render().mount());
			}
		});
		
		//load these models then invoke them
		$.ensureInvoke(['/site/scripts/models/css/css.js','/site/scripts/models/libs/hl.js']);
	});
})();