What is Acid?
=======
Acidjs is an ECMA script utility library that focuses on scalable real-time self-constructing SPAs(single-page applications). Acid proposes a highly modular environment where resources are split up and pulled on the fly.

DOM
-----------------------
DOM methods are extended via the prototype property with incident avoidence. This method was chosen due to chainig being the easiest method for interacting with the DOM.

Strings,Objects & Arrays
-----------------------
All other methods for Strings,Objects and Arrays are avalible from the root object typically $ and ACID as a fallback. The reason for this is because Acid is built around a module like system allowing for modules to quickly import external files,models,modules,definitions and methods attached to $. Methods can be imported to a module/define which produce high performance results while mainting clean and constructive code. Extending as a prototype to these objects produced slower object usage. For example by extending various methods to the array prototype operations on arrays became slower across the board. Thus opted for this inclusion method.

Model, Define & Module
-----------------------

Acid is built around a model system. Models can be loaded automatically from acid attached events or programmatically. Models can be definitions which are compiled models for immediately available objects. Models can also be modules which are asynchronously compiled models with built-in import capabilities. Modules can have various files,models and JS objects that are loaded on the fly and compiled into the final model. This allows for a highly scalable dynamic built on-demand web app. Think of a bridge being formed in front of you while walking across. 

JS

    $.model('post',{
    	like:(node,event) => {
    		console.log('Post Liked');
    	},
    	other:(node,event) => {
    		console.log('other event launched');
    	}
    });
    //returns an async module
    $.module({
    	name:'moduleName',
    	import:['each','eachObject','testModel.js'],
    	import:(each,eachObject,testModel) => {
    		each([1,2,3],(item,index)=>{
    			console.log(item,index);
    		});
    	}
    })();
    //returns a sync module not used for importing scripts
    $.define({
    	name:'moduleName',
    	import:['each','eachObject'],
    	import:(each,eachObject) => {
    		each([],(item,index)=>{
    			console.log(item,index);
    		});
    	}
    })();


Import & Ensure
-----------------------
JS Example Import

    $.require('post.js',function(post){
		//post model is loaded
	});
	
JS Example Ensure

    $.ensure('post',function(post){
		//post model is loaded
	});


