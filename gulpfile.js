const gulp = require('gulp'),
      del = require('del'),
      config = require('./gulp/config'),
      shell = require('gulp-shell'),
      runSequence = require('run-sequence'),
      requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
});

gulp.task('clean',
  () => del.sync([config.buildDir, config.distDir])
);

gulp.task('html',
  () => gulp.src('src/html/**')
            .pipe(gulp.dest(config.distDir))
);

gulp.task('css',
  done => runSequence('bower', 'sass:compile', done)
);

gulp.task('test:unit', ['babel'], shell.task(['npm test']));

gulp.task('build', ['css', 'test:unit', 'html'],
  done => runSequence('browserify', done)
);

gulp.task('default', ['build']);
