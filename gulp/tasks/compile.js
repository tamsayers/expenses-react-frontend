const gulp = require('gulp'),
      babel = require("gulp-babel");

gulp.task('compile', () => {
  return gulp.src(['src/jsx/**/*.js', '!**/__tests__/**'])
    .pipe(babel({
      presets: [
        "react",
        "es2015",
        "stage-2"
      ]})
    )
    .pipe(gulp.dest('build/lib'));
})
