Acid 
=======
Acidjs is an ECMAScript framework for web applications with a focus on modern & future APIs. http://acidjs.com


DOM
-----------------------
DOM methods are extended via the prototype property with incident avoidence. This method was chosen due to chainig being the easiest method for interacting with the DOM.

Strings,Objects & Arrays
-----------------------
All other methods for Strings,Objects and Arrays are avalible from the root object typically $ and ACID as a fallback. The reason for this is because Acid is built around a module like system allowing for modules to quickly import external files,models,modules,definitions and methods attached to $. Methods can be imported to a module/define which produce high performance results while mainting clean and constructive code. Extending as a prototype to these objects produced slower object usage. For example by extending various methods to the array prototype operations on arrays became slower across the board. Thus opted for this inclusion method.

Model, Define & Module
-----------------------

Acid is built around a model system. Models can be loaded automatically from acid attached events or programmatically. Models can be definitions which are compiled models for immediately available objects. Models can also be modules which are asynchronously compiled models with built-in import capabilities. Modules can have various files,models and JS objects that are loaded on the fly and compiled into the final model. This allows for a highly scalable dynamic built on-demand web app. Think of a bridge being formed in front of you while walking across. 

Import & Ensure
-----------------------


Event System
------------

The entire event system has asynchronous model loading by default. Acid captures most events and then delegates them to the model/function specified. For nodes it works by looking at the attribute associated with the action. 

For example lets say we have a click event (the attribute would be a valid html5 data-*) in this case it would be called data-click. Multiple events are supported by a comma separated list. Events are executed in a row. Below is an example of the JS and HTML needed. There is no event listening code of any sort required to link up click events on DOM nodes to models. It's all plug and play. 

When the button is clicked it will check if the model is available if it's not it will be loaded on the fly and the event will be executed when the script containing the model has been loaded successfully.

JS

    $.model('post',{
    	like:(node,event) => {
    		console.log('Post Liked');
    	},
    	other:(node,event) => {
    		console.log('other event launched');
    	}
    });

HTML

    <button data-click="post.like,post.other">Like</button>
