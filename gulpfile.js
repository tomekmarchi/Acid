(function () {
	'use strict';
	var gulp = require('gulp'),
		beautify = require('gulp-beautify'),
		notify = require('gulp-notify'),
		concat = require('gulp-concat'),
		lr = require('tiny-lr')(),
		gzip = require('gulp-gzip'),
		livereload = require('connect-livereload'),
		express = require('express'),
		babel = require('gulp-babel'),
		app = express(), // server
		EXPRESS_ROOT = '/', // root folder
		EXPRESS_PORT = 8890, // server port
		LIVERELOAD_PORT = 35729, // live reload port on websocket
		//start up server plus livereload
		livereload_start = () => {
			app.use(livereload()); //use livereload in express
			app.use(express.static(__dirname)); //dir of project
			app.listen(EXPRESS_PORT); //web port
			lr.listen(LIVERELOAD_PORT); //listen port for websocket live reload
		},
		//live reload functions
		notifyLivereload = (event) => {
			// `gulp.watch()` events provide an absolute path
			// so we need to make it relative to the server root
			var fileName = require('path').relative(EXPRESS_ROOT, event.path);
			lr.changed({
				body: {
					files: [fileName]
				}
			});
		},
		//file locations in order
		locations = [
			'build/start/credits.js',
			'build/start/start.js',

			'build/modules/namespace.js',
			'build/modules/shared/*.js',
			'build/modules/helpers/*.js',

			'build/modules/dom/methods/*.js',

			'build/end/info.js',
			'build/modules/events/*.js',

			'build/modules/string/*.js',
			'build/modules/string/modules/*.js',

			'build/modules/array/*.js',
			'build/modules/array/modules/*.js',

			'build/modules/object/*.js',
			'build/modules/object/modules/*.js',

			'build/modules/function/*.js',
			'build/modules/function/modules/*.js',

			'build/modules/number/*.js',
			'build/modules/number/modules/*.js',

			'build/modules/native/*.js',

			'build/modules/utils/*.js',

			'build/modules/domDependent/selector/*.js',
			'build/modules/domDependent/*.js',

			'build/end/loadcore.js',

			'build/end/documentReady.js',

			'build/end/end.js'
		],
		locations_length = locations.length,
		//compile the acid library
		compile_acid = () => {
			gulp.src(locations)
				//compile source
				.pipe(concat('acid.js'))
				.pipe(beautify({
					indent_size: 1,
					indent_with_tabs: true
				}))
				//make it fabulous
				.pipe(gulp.dest('compiled')).pipe(notify(function () {
					return 'Acid Beautified Saved';
				})).pipe(concat('acidMin.js')).pipe(babel({
					"plugins": [
						["transform-strict-mode", {
							"strict": false
						}],"minify-empty-function"
					],
					"presets": ["babili"],
					comments: false,
					highlightCode:false,
					ast:false,
					compact: true,
					minified:true
				})).pipe(gulp.dest('compiled')).pipe(concat('acidMin')).pipe(gzip()).pipe(gulp.dest('compiled')).pipe(notify(() => {
					return 'Acid Minified Saved';
				}));

		};
	//compile acid
	gulp.task('scripts', () => {
		return compile_acid();
	});
	//start livereload
	gulp.task('default', ['scripts'], () => {
		//start up server plus livereload
		livereload_start();
		//watch files then compile and notify lr
		gulp.watch(locations, (event) => {
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
