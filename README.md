What is Acid?
=======
Acid.js is a utility library for building CWAs (Conscious Web Apps). CWAs build themselves based on realtime application demands. Think of a bridge being formed in front of you while walking across. Instead of the entire step being formed little bits of it come only exactly when you need it. Acid embraces a modular philosophy that results in a complete separation of concerns.

CWA's have several advantages over modern SPAs  
 - Scalability for large apps
 - Real-time
 - Fine grained self-construction
 - Less code
 - Faster development
 - Streaming apps

Acid Stacks
=======
Default Stack - Node , RethinkDB, Lucy, Acid, Ractive & Menrvah
Mongo Stack - Node , Mongo, Lucy, Acid, React & Menrvah

Menrvah - Coming soon next generation web app framework & platform.

Methods
-----------------------
All methods are available from the root object typically $ and ACID as a fallback.

Model, Define & Module
-----------------------
In Acid everything is a model. Models can be created using "define","module","model". Models created using these methods have an info property accessed via "*._".

Module
-----------------------
Modules are asynchronously compiled models with built-in import capabilities. Dependencies can be imported and injected into the model's function when invoked.

JS
	//returns a plain model
    $.model('post',{
    	like:(node,event) => {
    		console.log('Post Liked');
    	},
    	other:(node,event) => {
    		console.log('other event launched');
    	}
    });
    //returns an async model
    $.module('moduleName',{
    	import:['testModel.js'],
    	invoke:function(testModel) {
    		var {each,eachObject} = $;
    		each([1,2,3],(item,index)=>{
    			console.log(item,index);
    		});
    	}
    })();
    //returns a sync model not used for importing scripts
    $.define('moduleName',() => {
    		var {each,eachObject} = $;
    		each(['a',2],(item,index)=>{
    			console.log(item,index);
    		});
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
