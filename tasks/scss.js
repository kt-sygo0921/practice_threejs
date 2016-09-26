var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer  = require('gulp-autoprefixer')

gulp.task('sass', ['sassLint'], function(){
	return gulp.src('./app/scss/**/*.scss')
	.pipe(sass({
		outputStyle:'expanded'
	}))
	.pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./app/css'))
});