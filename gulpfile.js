(function() {
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
            notify({
                message: 'DOCS UPDATED'
            });
        },
        //file locations in order
        locations = [
            'build/start/credits.js',
            'build/start/start.js',

            'build/modules/shared/*.js',

            'build/modules/dom/closure/methods/*.js',
            'build/modules/dom/selectors.js',
            'build/modules/namespace.js',

            'build/modules/events/*.js',

            'build/end/info.js',

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

            'build/modules/dom/closure/node.js',
            'build/modules/dom/closure/list.js',
            'build/modules/dom/extend/*.js',
            'build/modules/dom/extend.js',

            'build/modules/dom/event/availableEvents.js',
            'build/modules/dom/event/event.js',

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
                .pipe(babel({
                    blacklist: ["strict"],
                    compact: false
                })).pipe(notify(() => {
                    return 'Acid Babeled';
                }))
                //make it fabulous
                .pipe(beautify({
                    indent_size: 4,
                    indent_char: '	',
                    indent_with_tabs: true
                })).pipe(gulp.dest('compiled')).pipe(notify(function() {
                    return 'Acid Beautified Saved';
                })).pipe(concat('acid_min.js')).pipe(uglify({
                    compress: true,
                    fromString: true,
                    sequences: true,
                    join_vars: true,
                    keep_fnames: false,
                    pure_getters: true,
                    conditionals: true,
                    booleans: true,
                    drop_debugger: true,
                    if_return: true
                })).pipe(notify(() => {
                    return 'Acid Uglified';
                })).pipe(gulp.dest('compiled')).pipe(notify(() => {
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
