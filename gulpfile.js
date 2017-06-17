const gulp = require('gulp');
const beautify = require('gulp-beautify');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const lucy = require('Lucy')();
const {
  last,
} = lucy;
const lr = require('tiny-lr')();
const gzip = require('gulp-gzip');
const livereload = require('connect-livereload');
const express = require('express');
const babel = require('gulp-babel');
const app = express();
const EXPRESS_ROOT = '/';
const EXPRESS_PORT = 8890;
const LIVERELOAD_PORT = 35729;
const livereloadStart = () => {
  app.use(livereload());
  app.use(express.static(`${__dirname}/docs`));
  app.listen(EXPRESS_PORT);
  lr.listen(LIVERELOAD_PORT);
};
const notifyLivereload = (reloadEvent) => {
  const fileName = require('path')
    .relative(EXPRESS_ROOT, reloadEvent.path);
  lr.changed({
    body: {
      files: [fileName],
    },
  });
};
const docsLocations = ['package.json', 'README.md', 'LICENSE'];
const locations = [
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
  'build/modules/collection/modules/*.js',
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
];
const compileDocsOnly = () => {
  gulp.src(docsLocations)
    .pipe(gulp.dest('npm'))
    .pipe(notify((file) => {
      const filename = last(file.base.split('/'));
      return `NPM Compiled > ${filename}`;
    }));
};
const compileAcid = () => {
  gulp.src(locations)
    .pipe(concat('acid.js'))
    .pipe(beautify({
      indent_size: 1,
      indent_with_tabs: true,
    }))
    .pipe(gulp.dest('compiled'))
    .pipe(notify(() => {
      return 'Acid Beautified Saved';
    }))
    .pipe(gulp.dest('docs'))
    .pipe(concat('acidMin.js'))
    .pipe(babel({
      plugins: [
        [
          'transform-strict-mode',
          {
            strict: false,
          }],
        'minify-empty-function'
      ],
      presets: ['babili'],
      comments: false,
      highlightCode: false,
      ast: false,
      compact: true,
      minified: true,
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
  gulp.watch(locations, (gulpEvent) => {
    compileAcid(gulpEvent);
    setTimeout(() => {
      notifyLivereload(gulpEvent);
    }, 2000);
  });
  gulp.watch('*.html', notifyLivereload);
  gulp.watch('site/styles/**', notifyLivereload);
  gulp.watch('site/scripts/**', notifyLivereload);
  gulp.watch('site/demos/**', notifyLivereload);
  gulp.watch(docsLocations, (gulpEvent) => {
    compileDocsOnly(gulpEvent);
  });
});
