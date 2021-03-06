const gulp = require('gulp'),
      config = require('../config'),
      babel = require("gulp-babel");

gulp.task('babel',
  () => gulp.src(config.babel.src)
            .pipe(babel())
            .pipe(gulp.dest(config.babel.outputDir))
);
