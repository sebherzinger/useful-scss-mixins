var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect');
  
gulp.task('build-scss', function() {
  return gulp.src('app/scss/main.scss')
    .pipe(
        sass({
          outputStyle: 'compressed'
        }).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('copy-html', function() {
	gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    https: false
  });
});

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['build-scss']);
  gulp.watch('app/*.html', ['copy-html']);
});

gulp.task('default', ['connect', 'watch']);
