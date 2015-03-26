(function(){

	var examples=[{
		name:'Todo',
		descrip:'A simple todo app with standard JS methods',
		url:'/site/demos/apps/todo/'
	},{
		name:'Reactive Todo',
		descrip:'A simple reactive todo app with standard JS methods',
		url:'/site/demos/react/todo/'
	},{
		name:'Reactive List',
		descrip:'A simple reactive list',
		url:'/site/demos/react/list/'
	},{
		name:'Reactive List Updating',
		descrip:'A simple reactive list that updates constantly',
		url:'/site/demos/react/listReactItems/'
	},{
		name:'Reactive Component Share',
		descrip:'A simple reactive text app that shares data across rendered components of the same model',
		url:'/site/demos/react/dataShare/'
	},{
		name:'Reactive Data Share',
		descrip:'A simple reactive text app with a reactive model that shares data across rendered components from different models',
		url:'/site/demos/react/sharedData/'
	},{
		name:'Plain',
		descrip:'An empty page for an ACID playground',
		url:'/site/demos/playground/plain/'
	},{
		name:'Handlebars',
		descrip:'Importing Handlebars and extending it to ACID',
		url:'/site/demos/plugin/handlebars/'
	},{
		name:'Reactive Timer',
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