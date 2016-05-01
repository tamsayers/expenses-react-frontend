const gulp = require('gulp'),
      shell = require('gulp-shell');

gulp.task('test', shell.task(['npm test']));
