const gulp = require('gulp'),
      concat = require('gulp-concat'),
      config = require('../config'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps');

gulp.task('sass:compile', () => {
  return gulp.src(`${config.sass.dir}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.config))
    .pipe(concat(config.sass.outputFileName))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.distDir}/css`));
});
