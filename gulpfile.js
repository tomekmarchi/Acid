const gulp = require('gulp');
const rollup = require('rollup');
const beautify = require('gulp-beautify');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const lr = require('tiny-lr')();
const livereload = require('connect-livereload');
const express = require('express');
const babel = require('gulp-babel');
const app = express();
const expressRoot = '/';
const expressPort = 8890;
const livereloadPort = 35729;
const livereloadStart = () => {
  app.use(livereload());
  app.use(express.static(`${__dirname}/docs`));
  app.listen(expressPort);
  lr.listen(livereloadPort);
};
const notifyLivereload = (reloadEvent) => {
  const fileName = require('path')
    .relative(expressRoot, reloadEvent.path);
  lr.changed({
    body: {
      files: [fileName],
    },
  });
};
const compileAcid = () => {
  gulp.src('build/index.js')
    .pipe(beautify({
      indent_size: 2,
      indent_with_tabs: false,
    }))
    .pipe(concat('acid.js'))
    .pipe(gulp.dest('build'))
    .pipe(notify(() => {
      return 'Acid Beautified Saved';
    }))
    .pipe(gulp.dest('docs'))
    .pipe(concat('acidMin.js'))
    .pipe(babel({
      ast: false,
      comments: false,
      compact: true,
      highlightCode: false,
      minified: true,
      plugins: [
        ['transform-strict-mode', {
          strict: false,
        }],
        'minify-empty-function'
      ],
      presets: ['babili'],
    }))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('docs'))
    .pipe(concat('index.js'))
    .pipe(gulp.dest('npm'))
    .pipe(notify(() => {
      return 'Acid Minified Saved';
    }));
};
gulp.task('scripts', async () => {
  const bundle = await rollup.rollup({
    entry: './source/index.js'
  });
  await bundle.write({
    dest: './build/index.js',
    format: 'umd',
    moduleName: '$',
    sourceMap: true
  });
  compileAcid();
});
gulp.task('default', ['scripts'], () => {
  livereloadStart();
  gulp.watch('source/**', (gulpEvent) => {
    compileAcid(gulpEvent);
    setTimeout(() => {
      notifyLivereload(gulpEvent);
    }, 2000);
  });
});
