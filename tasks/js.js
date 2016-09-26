var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

gulp.task('js', function() {
    // libはプラグインのため見ない
    return gulp.src(['./app/js/es6/*.js', '!' + './app/**/lib/*.js',])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(eslint({
        	"env": {
        		"es6": true
        	}
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});
