(function () {
	'use strict';
	var gulp = require('gulp'),
		beautify = require('gulp-beautify'),
		uglify = require('gulp-uglify'),
		notify = require('gulp-notify'),
		concat = require('gulp-concat'),
		gulpif = require('gulp-if'),
		lr = require('tiny-lr')(),
		livereload = require('connect-livereload'),
		express = require('express'),
		app = express(), // server
		EXPRESS_ROOT = '/', // root folder
		EXPRESS_PORT = 80, // server port
		LIVERELOAD_PORT = 35729; // live reload port on websocket

	//start up server plus livereload
	function livereload_start() {
		app.use(livereload());//use livereload in express
		app.use(express.static(__dirname));//dir of project
		app.listen(EXPRESS_PORT);//web port
		lr.listen(LIVERELOAD_PORT);//listen port for websocket live reload
	}
	//live reload functions
	function notifyLivereload(event) {
		// `gulp.watch()` events provide an absolute path
		// so we need to make it relative to the server root
		var fileName = require('path').relative(EXPRESS_ROOT, event.path);
		lr.changed({
			body: {
				files: [fileName]
			}
		});
		notify({
			message: 'DOCS UPDATED'
		});
	}
	//file locations
	var locations = [
	//begin
	//comment info
	'build/start/credits.js',
	//seaf function open
	'build/start/start.js',
	//shared vars across seaf
	'build/shared/vars/*.js',
	'build/shared/vars/DOM/*.js',
	'build/shared/modules/*.js',
	'build/shared/modules/DOM/*.js',
	//selector functions
	'build/modules/dom/*.js',
	//namespace
	'build/namespace.js',
	'build/modules/dom/seaf/start.js',
	//dom prototypes nodes only
	'build/modules/dom/methods/*.js',
	//dom prototypes loading all modules
	'build/modules/dom/seaf/node.js',
	'build/modules/dom/seaf/list.js',
	'build/modules/dom/seaf/return.js',
	'build/modules/dom/seaf/end.js',
	//worker prototype
	'build/modules/worker/worker.js',
	//websocket prototype
	'build/modules/websocket/websocket.js',
	//array prototype
	'build/modules/array/array.js',
	//array prototype modules
	'build/modules/array/modules/*.js',
	//string prototype
	'build/modules/string/string.js',
	//string prototype modules
	'build/modules/string/modules/*.js',
	//bool prototype
	'build/modules/bool/bool.js',
	//object prototype
	'build/modules/object/object.js',
	//object prototype
	'build/modules/object/modules/*.js',
	//function prototype
	'build/modules/function/functions.js',
	//function prototype modules
	'build/modules/function/modules/*.js',
	//number prototype
	'build/modules/number/number.js',
	//number prototype modules
	'build/modules/number/modules/*.js',
	//window prototype
	'build/modules/window/window.js',
	//event prototype
	'build/modules/events/events.js',
	//extend and load
	//extend prototypes
	'build/end/extend/*.js',
	//Shared functions that are above modules that are attached to the main global ($) namespace
	'build/modules/$/*.js',
	//modules that are attached to the main global ($) namespace
	//for acid specific modules
	'build/modules/$/modules/acid/*.js',
	//modules that deal with native objects
	'build/modules/$/modules/native/*.js',
	//modules that deal with DOM
	'build/modules/$/modules/DOM/*.js',
	//get system info
	'build/end/info.js',
	//acid engine related functions
	'build/modules/$/modules/engine/*.js',
	'build/modules/$/modules/engine/event/*.js',
	//load core function
	'build/end/loadcore.js',
	//seaf function close
	'build/end/end.js'],
	locations_length=locations.length;
	//compile the acid library
	function compile_acid() {
		return gulp.src(locations)
		//compile source
		.pipe(concat('acid.js'))
		//make it fabulous
		.pipe(beautify({
			indentSize: 4
		}))
		//make it dirty and min it
		.pipe(gulp.dest('compiled')).pipe(uglify()).pipe(concat('acid_min.js'))
		//we done bois
		.pipe(gulp.dest('compiled')).pipe(notify(function(){
			compile_lucy();
			return 'ACID COMPILED';
		}));
	}
	//compile the acid library into lucy (Acid without DOM)
	function compile_lucy() {
		var lucy_locations=[];
		var condition=function(file){
			var file=file.path || file;
			if(file.indexOf('dom') == -1 && file.indexOf('node') == -1 && file.indexOf('window') == -1 && file.indexOf('DOM') == -1){
				return true;
			}
			return false;
		};

		for(var i=0; i < locations_length; i++){
			var item=locations[i];
			if(condition(item)){
				lucy_locations.push(item);
			}
		}

		return gulp.src(lucy_locations)
		//compile source
		.pipe(gulpif(condition,concat('lucy.js')))
		//make it fabulous
		.pipe(beautify({
			indentSize: 4
		}))
		//make it dirty and min it
		.pipe(gulp.dest('compiled')).pipe(uglify()).pipe(concat('lucy_min.js'))
		//we done bois
		.pipe(gulp.dest('compiled')).pipe(notify({
			message: 'LUCY COMPILED'
		}));
	}
	//compile acid
	gulp.task('scripts', function () {
		return compile_acid();
	});
	//start livereload
	gulp.task('default', ['scripts'], function () {
		//start up server plus livereload
		livereload_start();
		//watch files then compile and notify lr
		gulp.watch(locations, function (event) {
			compile_acid(event);
			notifyLivereload(event);
		});
		//watch docs then compile and notify lr
		gulp.watch('*.html', notifyLivereload);
		gulp.watch('site/styles/**', notifyLivereload);
		gulp.watch('site/scripts/**', notifyLivereload);
		gulp.watch('site/demos/**', notifyLivereload);
	});
})();