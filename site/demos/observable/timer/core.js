(function () {
	//core model used for onready
	$.model('core', function () {
		var Timer = $.component('Timer', {
			template: `<div>Seconds Elapsed: <span data-node="timer"></span></div>`,
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
			},
			secondsElapsed: function (object, change) {
				this.nodes.timer.textValue(this.data.secondsElapsed);
			}
		});
		$.model('app', {
			add: function () {
				$('#wrapper').ap(Timer.render().mount());
			}
		});
		$('#wrapper').ap(Timer.render().mount());
		$.ensureInvoke(['/site/scripts/models/css/css.js','/site/scripts/models/libs/hl.js']);
	});
})();