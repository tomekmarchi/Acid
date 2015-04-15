(function(){

	var examples=[{
		name:'Todo',
		descrip:'A simple todo app with standard JS methods',
		url:'/site/demos/apps/todo/'
	},{
		name:'Observable Todo',
		descrip:'A simple observable todo app',
		url:'/site/demos/observable/todo/'
	},{
		name:'Observable TodoMVC',
		descrip:'A reactive todo app based off of the TodoMVC files',
		url:'/site/demos/observable/todoMVC/'
	},{
		name:'Observable List',
		descrip:'A simple reactive list',
		url:'/site/demos/observable/list/'
	},{
		name:'Observable List Updating',
		descrip:'A simple observable list that updates constantly',
		url:'/site/demos/observable/listReactItems/'
	},{
		name:'Factory Share',
		descrip:'A simple observable text app that shares data across rendered components from the same factory',
		url:'/site/demos/observable/dataShare/'
	},{
		name:'Factory share with other Factories',
		descrip:'A simple observable text app with a factory that shares data across rendered components from different factories. Subscribed factories also have a custom share name for the 		factory.',
		url:'/site/demos/observable/sharedData/'
	},{
		name:'Factory Share with a Base',
		descrip:'A simple observable text app with a factory that shares data across rendered components from a single Base',
		url:'/site/demos/observable/sharedData/'
	},{
		name:'Data Flow',
		descrip:'Demo of data flow changes across Bases & Factories',
		url:'/site/demos/observable/dataFlow/'
	},{
		name:'Plain',
		descrip:'An empty page for an ACID playground',
		url:'/site/demos/playground/plain/'
	},{
		name:'Handlebars',
		descrip:'Importing Handlebars and extending it to ACID',
		url:'/site/demos/plugin/handlebars/'
	},{
		name:'Observable Timer',
		descrip:'A timer component built from a factory',
		url:'/site/demos/observable/timer/'
	},{
		name:'Observable Timers sharing the same data',
		descrip:'A factory updating it\'s components',
		url:'/site/demos/observable/timer/share/'
	},{
		name:'Observable Timers On Canvas',
		descrip:'Timers that trigger canvas text changes',
		url:'/site/demos/observable/timer/share/canvas/'
	},{
		name:'Observable Timers On Canvas Random Symbols',
		descrip:'Timers that trigger canvas text changes using random symbols',
		url:'/site/demos/observable/timer/share/canvas/random/'
	}];

	var compare=[{
		name:'Compare React components/Acid components Timers',
		descrip:'3000 models & their components rendered',
		url:{
			name:'Acid',
			url:'/site/demos/observable/timer/acid/'
		},
		url_other:{
			name:'React',
			url:'/site/demos/observable/timer/react/'
		}
	}];

	$.model('list',{
		examples:examples,
		compare:compare
	});

})();