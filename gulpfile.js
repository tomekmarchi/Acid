const gulp = require('gulp'),
  beautify = require('gulp-beautify'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  lucy = require('Lucy')(),
  {
    last
  } = lucy,
  lr = require('tiny-lr')(),
  gzip = require('gulp-gzip'),
  livereload = require('connect-livereload'),
  express = require('express'),
  babel = require('gulp-babel'),
  app = express(),
  EXPRESS_ROOT = '/',
  EXPRESS_PORT = 8890,
  LIVERELOAD_PORT = 35729,
  livereloadStart = () => {
    app.use(livereload());
    app.use(express.static(`${__dirname}/docs`));
    app.listen(EXPRESS_PORT);
    lr.listen(LIVERELOAD_PORT);
  },
  notifyLivereload = (event) => {
    const fileName = require('path')
      .relative(EXPRESS_ROOT, event.path);
    lr.changed({
      body: {
        files: [fileName]
      }
    });
  },
  docsLocations = ['package.json', 'README.md', 'LICENSE'],
  locations = ['build/start/credits.js', 'build/start/start.js', 'build/modules/namespace.js', 'build/modules/shared/*.js', 'build/modules/helpers/*.js', 'build/modules/dom/methods/*.js', 'build/end/info.js', 'build/modules/events/*.js', 'build/modules/string/*.js', 'build/modules/string/modules/*.js', 'build/modules/array/*.js', 'build/modules/array/modules/*.js', 'build/modules/collection/modules/*.js', 'build/modules/object/*.js', 'build/modules/object/modules/*.js', 'build/modules/function/*.js', 'build/modules/function/modules/*.js', 'build/modules/number/*.js', 'build/modules/number/modules/*.js', 'build/modules/native/*.js', 'build/modules/utils/*.js', 'build/modules/domDependent/selector/*.js', 'build/modules/domDependent/*.js', 'build/end/loadcore.js', 'build/end/documentReady.js', 'build/end/end.js'],
  compileDocsOnly = () => {
    gulp.src(docsLocations)
      .pipe(gulp.dest('npm'))
      .pipe(notify((file) => {
        const filename = last(file.base.split('/'));
        return `NPM Compiled > ${filename}`;
      }));
  },
  compileAcid = () => {
    gulp.src(locations)
      .pipe(concat('acid.js'))
      .pipe(beautify({
        indent_size: 1,
        indent_with_tabs: true
      }))
      .pipe(gulp.dest('compiled'))
      .pipe(notify(() => {
        return 'Acid Beautified Saved';
      }))
      .pipe(gulp.dest('docs'))
      .pipe(concat('acidMin.js'))
      .pipe(babel({
        plugins: [
          ['transform-strict-mode', {
            strict: false
          }], 'minify-empty-function'
        ],
        presets: ['babili'],
        comments: false,
        highlightCode: false,
        ast: false,
        compact: true,
        minified: true
      }))
      .pipe(gulp.dest('compiled'))
      .pipe(gulp.dest('docs'))
      .pipe(concat('index.js'))
      .pipe(gulp.dest('npm'))
      .pipe(concat('acidMin'))
      .pipe(gzip())
      .pipe(gulp.dest('compiled'))
      .pipe(notify(() => {
        compileDocsOnly();
        return 'Acid Minified Saved';
      }));
  };
gulp.task('scripts', () => {
  return compileAcid();
});
gulp.task('default', ['scripts'], () => {
  livereloadStart();
  gulp.watch(locations, (event) => {
    compileAcid(event);
    notifyLivereload(event);
  });
  gulp.watch('*.html', notifyLivereload);
  gulp.watch('site/styles/**', notifyLivereload);
  gulp.watch('site/scripts/**', notifyLivereload);
  gulp.watch('site/demos/**', notifyLivereload);
  gulp.watch(docsLocations, (event) => {
    compileDocsOnly(event);
  });
});
