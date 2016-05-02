const gulp = require('gulp'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util'),
      config = require('../config');

gulp.task('browserify', () => {
  var b = browserify({
    entries: config.browserify.entryFile,
    debug: true
  });

  return b.bundle()
    .pipe(source(config.browserify.outputFileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${config.distDir}/js/`));
});
