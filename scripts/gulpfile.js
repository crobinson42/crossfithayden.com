var gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function () {
  return gulp.src('../assets/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('../assets/css'));
});
