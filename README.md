What is Acid?
=======
Acidjs is an ECMA script utility library for building scalable real-time self-constructing SPAs(single-page applications). What I call an autonomous web app (AWA). Acid embraces a highly modular philosophy in which all files of the system are split up, organized, and called individually when absolutly required. Think of a bridge being formed in front of you while walking across.

Strings,Objects & Arrays
-----------------------
All methods for Strings,Objects and Arrays are avalible from the root object typically $ and ACID as a fallback. 

Model, Define & Module
-----------------------
In Acid everything is a model (Simple plain objects). Models can be "define" which are compiled models for immediately available objects. Models can also be "modules" which are asynchronously compiled models with built-in import capabilities. Modules can have various files,models and JS objects that are loaded on the fly and compiled into the final model.

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
    $.module('moduleName',{
    	import:['testModel.js'],
    	import:(testModel) => {
    		var {each,eachObject} = $;
    		each([1,2,3],(item,index)=>{
    			console.log(item,index);
    		});
    	}
    })();
    //returns a sync module not used for importing scripts
    $.define('moduleName',() => {
    		var {each,eachObject} = $;
    		each([],(item,index)=>{
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


