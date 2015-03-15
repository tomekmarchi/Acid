(function(){

	var examples=[{
		name:'Todo',
		descrip:'A simple todo app with standard JS methods',
		url:'/site/demos/apps/todo/'
	},{
		name:'Plain',
		descrip:'An empty page for an ACID playground',
		url:'/site/demos/playground/plain/'
	},{
		name:'Handlebars',
		descrip:'Importing Handlebars and extending it to ACID',
		url:'/site/demos/plugin/handlebars/'
	},{
		name:'React Timer',
		descrip:'A timer built from a reactive model',
		url:'/site/demos/react/timer/'
	},{
		name:'Reactive Timers sharing the same data',
		descrip:'Timers that update based on the parent reactive model',
		url:'/site/demos/react/timer/share/'
	},{
		name:'Reactive Timers On Canvas',
		descrip:'Timers that trigger canvas text changes',
		url:'/site/demos/react/timer/share/canvas/'
	},{
		name:'Reactive Timers On Canvas Random Symbols',
		descrip:'Timers that trigger canvas text changes using random symbols',
		url:'/site/demos/react/timer/share/canvas/random/'
	}];

	var compare=[{
		name:'Compare Reactive Timers',
		descrip:'3000 models & their components rendered',
		url:{
			name:'Acid',
			url:'/site/demos/react/timer/acid/'
		},
		url_other:{
			name:'React',
			url:'/site/demos/react/timer/react/'
		}
	}];

	$.model('list',{
		examples:examples,
		compare:compare
	});

})();