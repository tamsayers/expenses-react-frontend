const gulp = require('gulp'),
  concat = require('gulp-concat'),
  config = require('../config'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('css', ['bower'], () => {
  return gulp.src(`${config.sassDir}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({includePaths: [
      config.sassDir,
      'bower_components'
    ]}))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.distDir}/css`));
});
