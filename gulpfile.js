const gulp = require('gulp'),
      del = require('del'),
      requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('clean', () => {
  return del.sync(['build', 'dist']);
});
