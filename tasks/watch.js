var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequance = require('run-sequence');

gulp.task('watch',function(){
	browserSync({
		server:{
			baseDir:'./',
			directory: true
		}
	});

	// gulp.watch(['./app/scss/**/*.scss'], function(){
	// 	runSequance(['sass'], browserSync.reload)
	// })
	// gulp.watch('./app/ejs/**/*.ejs', function(){
	// 	runSequance(['ejs'], browserSync.reload)
	// })
	// gulp.watch('./app/js/es6/**/*.js', function(){
	// 	runSequance(['js'], ['babel'],  browserSync.reload)
	// })
});
