var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var ts = require('gulp-typescript');

var options = {
    target: 'ES5'
}

gulp.task('ts', function() {
    // libはプラグインのため見ない
    return gulp.src(['./practice/ts/**/*.ts'], { base: './practice/ts/' })
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(ts(options))
        .pipe(gulp.dest('./practice/js/'))
});