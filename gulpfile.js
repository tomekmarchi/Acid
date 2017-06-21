const gulp = require('gulp');
const rollup = require('rollup');
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
      indent_size: 2,
      indent_with_tabs: false,
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
gulp.task('scripts', async () => {
  const bundle = await rollup.rollup({
    entry: './source/index.js'
  });
  bundle.write({
    format: 'umd',
    moduleName: '$',
    dest: './build/acid.js',
    sourceMap: true
  });
});
gulp.task('default', ['scripts'], () => {
  return;
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
