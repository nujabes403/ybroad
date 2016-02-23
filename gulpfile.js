var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var webserver = require('gulp-webserver');
var source = require('vinyl-source-stream');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

// gulp.task('scripts', function() {
//   return gulp.src('src/**/*.js')
//     .pipe(concat('app.js'))
//     .pipe(gulp.dest('./'));
// });

gulp.task('sass', function () {
  return gulp.src('src/client/assets/styles/*.scss',{base:"./"})
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./"));
});

gulp.task('sass:watch',function(){
    gulp.watch('src/client/assets/styles/*.scss',['sass']);
});

gulp.task('default',['sass','sass:watch']);
