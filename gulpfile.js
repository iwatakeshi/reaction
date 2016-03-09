const gulp = require('gulp');
const util = require('gulp-util');
const eslint = require('gulp-eslint');
const jspm = require('jspm');
const server = require('browser-sync').create();
const prettify = require('gulp-prettify');

// Check coding style and fix them if possible
gulp.task('lint', () =>
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  gulp.src([
    '**/*.js',
    '!node_modules/**',
    '!jspm_packages/**/',
    '!./config.js',
    '!dist/**',
  ])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
  .pipe(eslint({ extends: 'airbnb', fix: true }))
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
  .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  .pipe(eslint.failAfterError()));

// Prettify HTML
gulp.task('prettify', () =>
 gulp.src('index.html')
  .pipe(prettify({ indent_size: 2 }))
  .pipe(gulp.dest('./')));

// Bundle the app
gulp.task('jspm', (callback) => {
  jspm.setPackagePath('./');
  jspm.bundleSFX('src/app.js', 'dist/index.js')
  .then(() => {
    util.log(util.colors.magenta('JSPM:'), 'Bundled!');
    callback();
  });
});

// Static server
gulp.task('serve', () => {
  server.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch([
    'index.html',
    'src/*.js',
  ], ['jspm', 'watch']);
});

gulp.task('default', ['lint', 'jspm', 'prettify']);
gulp.task('watch', ['default'], server.reload);
gulp.task('develop', ['default', 'serve', 'watch']);
