var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('sassLint', function() {
    return gulp.src(['./app/scss/**/*.scss'])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});
