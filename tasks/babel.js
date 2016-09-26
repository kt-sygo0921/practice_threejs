var gulp = require("gulp");
var babel = require("gulp-babel");
var plumber = require("gulp-plumber");


gulp.task('babel', () => {
    // libはプラグインのため見ない
    return gulp.src(['./app/js/es6/*.js', '!' + './app/**/lib/*.js',])
    	.pipe(plumber())
    	.pipe(babel())
    	.pipe(gulp.dest('./app/js/'))
});
