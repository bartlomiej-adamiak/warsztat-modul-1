var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

var c = require('ansi-colors');
var notifier = require('node-notifier');

function showError(err) {

  notifier.notify({
    title: 'Błąd kompilacji SCSS',
    message: err.messageFormatted
  });

  console.log( c.red('==================') );
  console.log( c.red(err.messageFormatted) );
  console.log( c.red('==================') );
  this.emit('end');

}

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(plumber({
      errorHandler : showError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass'])
});


gulp.task('default', ['sass', 'watch'])
