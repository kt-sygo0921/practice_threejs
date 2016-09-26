var gulp = require('gulp');
var ejs = require("gulp-ejs");


gulp.task('ejs', function(){
	return gulp.src('./app/ejs/**/*.ejs')
	.pipe(ejs())
	.pipe(gulp.dest('./app/html/'))
})