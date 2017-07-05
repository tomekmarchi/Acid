const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babili');
const esformatter = require('esformatter');
const tinyLR = require('tiny-lr')();
const liveReload = require('connect-livereload');
const documentation = require('documentation');
const streamArray = require('stream-array');
const fs = require('fs');
const vfs = require('vinyl-fs');
const watch = require('node-watch');
const express = require('express');
const path = require('path');
const app = express();
const expressRoot = '/';
const expressPort = 8890;
const liveReloadPort = 35729;
const liveReloadStart = () => {
  app.use(liveReload());
  app.use(express.static(`${__dirname}/docs`));
  app.listen(expressPort);
  tinyLR.listen(liveReloadPort);
};
const notifyLiveReload = (evt, filename) => {
  const fileName = path.relative(expressRoot, filename);
  tinyLR.changed({
    body: {
      files: [fileName],
    },
  });
};
const beautify = () => {
  const code = fs.readFileSync('./build/bundle.js').toString();
  const formattedCode = esformatter.format(code, {
    indent: {
      value: '  '
    }
  });
  fs.writeFileSync('./build/bundle.js', formattedCode, 'utf8');
};
const copyFile = (start, end) => {
  fs.writeFileSync(end, fs.readFileSync(start).toString(), 'utf8');
};
const build = async () => {
  console.log('Build Start');
  const bundle = await rollup({
    entry: './source/index.js',
  });
  await bundle.write({
    dest: './build/bundle.js',
    format: 'umd',
    moduleName: '$',
    sourceMap: true
  });
  beautify();
  const production = await rollup({
    entry: './source/index.js',
    plugins: [
      babel({
        banner: `/* Acid 2.0.0 */`,
        comments: false,
      })
    ]
  });
  await production.write({
    dest: './build/index.js',
    format: 'umd',
    moduleName: '$',
    sourceMap: true
  });
  copyFile('./build/bundle.js', './docs/bundle.js');
  copyFile('./build/index.js', './docs/index.js');
  console.log('Build Complete');
  console.log('Docs Started');
  const docs = await new Promise((accept) => {
    documentation(['build/bundle.js'], {}, (error, value) => {
      if (error) {
        return console.log(error);
      }
      accept(value);
    });
  });
  const htmlDocs = await new Promise((accept) => {
    documentation.formats.html(docs, {
      theme: './documentation-theme-acid'
    }, (error, value) => {
      if (error) {
        return console.log(error);
      }
      accept(value);
    });
  });
  await streamArray(htmlDocs).pipe(vfs.dest('./docs'));
  console.log('Docs Complete');
  console.log('NPM Started');
  copyFile('./build/index.js', './npm/index.js');
  copyFile('./LICENSE', './npm/LICENSE');
  copyFile('./package.json', './npm/package.json');
  copyFile('./README.md', './npm/README.md');
  console.log('NPM Complete');
  console.log('Build Complete');
};
build();
liveReloadStart();
watch('./source/', {
  recursive: true
}, async (evt, filename) => {
  await build();
  notifyLiveReload(evt, filename);
});
