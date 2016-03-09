const gulp = require('gulp'),
 jscs = require('gulp-jscs'),
 jspm = require('jspm'),
 server = require('browser-sync').create(),
 prettify = require('gulp-prettify');

// Check coding style and fix them if possible
gulp.task('jscs', function () {
  return gulp.src([
  'src/app.js',
 ])
   .pipe(jscs({ fix: true }))
   .pipe(jscs.reporter())
   .pipe(jscs.reporter('fail'))
   .pipe(gulp.dest('src'));
});

// Prettify HTML
gulp.task('prettify', function () {
  return gulp.src('index.html')
    .pipe(prettify({ indent_size: 2 }))
    .pipe(gulp.dest('./'));
});

// Bundle the app
gulp.task('jspm', (callback) => {
  jspm.setPackagePath('./');
  jspm.bundleSFX('src/app.js', 'dist/index.js')
  .then(function () {
    console.log('JSPM: Bundled!');
    callback();
  });
});

// Static server
gulp.task('serve', function () {
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

gulp.task('default', ['jscs', 'jspm', 'prettify']);
gulp.task('watch', ['default'], server.reload);
gulp.task('develop', ['default', 'serve', 'watch']);
